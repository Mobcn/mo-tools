import { request, FormData } from 'undici';

/** 登录api */
const LOGIN_URL = 'https://pc.woozooo.com/account.php';
/** 上传api */
const UPLOAD_URL = 'https://up.woozooo.com/html5up.php';

/** 蓝奏云用户登录ID（在浏览器登录后从Cookie中获取） */
const LANZOU_Y_LOGIN = '';
/** 蓝奏云PHP磁盘信息（在浏览器登录后从Cookie中获取） */
const LANZOU_PHP_DISK_INFO = '';
/** 蓝奏云文件存储目录ID（根目录：-1） */
const LANZOU_FOLDER_ID = '-1';
/** 蓝奏云文件域名（个人中心 -> 个性域名） */
const LANZOU_FILE_DOMAIN = 'www.lanzouw.com';

/** PC请求头 */
const pcHeaders = {
    referer: 'https://pc.woozooo.com/mydisk.php',
    'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
    'accept-language': 'zh-CN,zh;q=0.9'
};

/** 手机请求头 */
const mobileHeaders = {
    'user-agent':
        'Mozilla/5.0 (Linux; U; Android 9; zh-cn; Redmi Note 5 Build/PKQ1.180904.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/71.0.3578.141 Mobile Safari/537.36 XiaoMi/MiuiBrowser/11.10.8',
    'accept-language': 'zh'
};

/**
 * 蓝奏云工具
 */
const LanZouUtils = {
    /**
     * 登录蓝奏云（获取PHPSESSID，有效期大约两天）
     *
     * @param {string} yLogin 用户登录ID（在浏览器登录后从Cookie中获取）
     * @param {string} phpDiskInfo PHP磁盘信息（在浏览器登录后从Cookie中获取）
     * @returns Cookie
     */
    login: async (yLogin = LANZOU_Y_LOGIN, phpDiskInfo = LANZOU_PHP_DISK_INFO) => {
        if (!yLogin || !phpDiskInfo) {
            throw new Error('用户登录信息未设置');
        }
        let cookie = `ylogin=${yLogin}; phpdisk_info=${phpDiskInfo}`;
        const headers = Object.assign({}, pcHeaders, { cookie });
        const setCookie = await request(LOGIN_URL, { headers }).then((res) => res.headers['set-cookie']?.toString());
        cookie += '; ' + setCookie?.substring(0, setCookie.indexOf(';'));
        return cookie;
    },

    /**
     * 上传文件
     *
     * @param {Blob} fileBlob 文件二进制对象
     * @param {string} fileName 文件名
     * @param {string} folderId 存储目录ID（根目录：-1）
     * @param {string} cookie Cookie（通过login方法获取）
     * @returns 上传响应信息
     */
    upload: async (fileBlob, fileName, cookie, folderId = LANZOU_FOLDER_ID) => {
        const method = 'POST';
        const headers = Object.assign({}, pcHeaders, { cookie });
        const file = new File([fileBlob], fileName);
        const body = new FormData();
        body.append('task', '1');
        body.append('name', file.name);
        body.append('id', 'WU_FILE_1');
        body.append('folder_id', folderId);
        body.append('upload_file', file);
        return request(UPLOAD_URL, { method, headers, body }).then((res) => res.body.json());
    },

    /**
     * 解析直链
     *
     * @param {string} fileId 文件ID
     * @returns 直链
     */
    parse: async (fileId) => {
        const headers = mobileHeaders;
        const url = `https://${LANZOU_FILE_DOMAIN}/tp/${fileId}`;
        const html = await request(url, { headers }).then((res) => res.body.text());
        const jsStart = html.indexOf('<script type="text/javascript">') + 32;
        const jsEnd = html.indexOf('</script>', jsStart);
        const preffix = '(function(){var document={getElementById:function(){return document;}};';
        const suffix = 'for(var k in document)typeof document[k]=="function"&&document[k]();return document.href;})()';
        const tmpUrl = eval(preffix + html.substring(jsStart, jsEnd) + suffix);
        const directURL = await request(tmpUrl, { headers }).then((res) => res.headers.location);
        if (!directURL) {
            throw new Error('解析失败');
        }
        return directURL;
    }
};

class File extends Blob {
    lastModified;
    name;
    /**
     *
     * @param {BlobPart[]} fileBits
     * @param {string} fileName
     * @param {{ lastModified?: number; type?: string }} options
     */
    constructor(fileBits, fileName, options) {
        super(fileBits, options);
        this.lastModified = options?.lastModified ?? Date.now();
        this.name = fileName;
    }
    get [Symbol.toStringTag]() {
        return 'File';
    }
    static [Symbol.hasInstance](object) {
        return !!object && object instanceof Blob && /^(File)$/.test(object[Symbol.toStringTag]);
    }
}

export default LanZouUtils;
