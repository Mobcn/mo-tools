const MoFileSystem = ((exports) => {
    /**
     * 文件句柄Buffer
     */
    class FileHandleBuffer {
        /**
         * @param {FileSystemFileHandle} fileHandle 文件句柄
         */
        constructor(fileHandle) {
            this.fileHandle = fileHandle;
        }

        verifyPermission(withWrite = false) {
            return verifyPermission(this.fileHandle, withWrite);
        }
        write(data, isAppend = true) {
            return write(this.fileHandle, data, isAppend);
        }
        readFileHandleAsText() {
            return readFileHandleAsText(this.fileHandle);
        }
        readFileHandleAsDataURL() {
            return readFileHandleAsDataURL(this.fileHandle);
        }
        readFileHandleAsBinaryString() {
            return readFileHandleAsBinaryString(this.fileHandle);
        }
        readFileHandleAsArrayBuffer() {
            return readFileHandleAsArrayBuffer(this.fileHandle);
        }
        readFileHandle(resultType = 'Text') {
            return readFileHandle(this.fileHandle, resultType);
        }

        getFileHandle() {
            return this.fileHandle;
        }
    }

    /**
     * 目录句柄Buffer
     */
    class DirectoryHandleBuffer {
        /**
         * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
         */
        constructor(dirHandle) {
            this.dirHandle = dirHandle;
        }

        getFileHandle(fileName) {
            return getFileHandle(this.dirHandle, fileName);
        }
        getDirectoryHandle(dirName) {
            return getDirectoryHandle(this.dirHandle, dirName);
        }
        getFileHandleArray() {
            return getFileHandleArray(this.dirHandle);
        }
        getDirectoryHandleArray() {
            return getDirectoryHandleArray(this.dirHandle);
        }
        getHandleArray(kind = 'all') {
            return getHandleArray(this.dirHandle, kind);
        }
        getHandleMap(path = '/') {
            return getHandleMap(this.dirHandle, path);
        }
        createFile(fileName) {
            return createFile(this.dirHandle, fileName);
        }
        createDirectory(dirName) {
            return createDirectory(this.dirHandle, dirName);
        }
        removeFile(fileName) {
            return removeFile(this.dirHandle, fileName);
        }
        removeDirectory(dirName) {
            return removeDirectory(this.dirHandle, dirName);
        }
        resolve(childHandle) {
            return resolve(this.dirHandle, childHandle);
        }
        getChildHandlePath(childHandle) {
            return getChildHandlePath(this.dirHandle, childHandle);
        }

        getDirectoryHandle() {
            return this.dirHandle;
        }
    }

    // 文件类型枚举
    const fileTypeEnum = {
        text: {
            'text/plain': ['.txt', '.md']
        },
        image: {
            'image/png': '.png',
            'image/jpeg': ['.jpe', '.jpg', '.jpeg'],
            'image/gif': '.gif'
        }
    };

    /**
     * 获取文件句柄Buffer
     *
     * @param {FileSystemFileHandle} fileHandle 文件句柄
     * @returns {FileHandleBuffer} 文件句柄Buffer
     */
    function getFileHandleBuffer(fileHandle) {
        if (fileHandle instanceof FileSystemFileHandle) {
            return new FileHandleBuffer(fileHandle);
        }
        throw new Error('获取文件句柄Buffer失败，参数不为文件句柄！');
    }

    /**
     * 获取目录句柄Buffer
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @returns {DirectoryHandleBuffer} 目录句柄Buffer
     */
    function getDirectoryHandleBuffer(dirHandle) {
        if (dirHandle instanceof FileSystemDirectoryHandle) {
            return new DirectoryHandleBuffer(dirHandle);
        }
        throw new Error('获取目录句柄Buffer失败，参数不为目录句柄！');
    }

    /**
     * 打开文件选择器
     *
     * @param {String} description 描述
     * @param {String|Array<String>} fileType 文件类型（文本：text、图片：image）
     * @param {Boolean} multiple 是否选择多文件
     * @returns {FileSystemFileHandle|null} 文件句柄
     */
    async function openFilePicker(description = '文本文件', fileType = 'text', multiple = false) {
        try {
            let accept;
            if (typeof fileType === 'string') {
                accept = fileTypeEnum[fileType.toLowerCase()];
                if (accept === undefined) {
                    throw Error(`文件类型${fileType}不存在！`);
                }
            } else if (fileType instanceof Array) {
                const fileTypes = [];
                for (const typeString of fileType) {
                    const type = fileTypeEnum[typeString.toLowerCase()];
                    if (type === undefined) {
                        throw Error(`文件类型${typeString}不存在！`);
                    }
                    fileTypes.push(type);
                }
                accept = Object.assign({}, ...fileTypes);
            } else {
                throw new Error('文件类型参数错误！');
            }
            const fileHandles = await showOpenFilePicker({
                multiple,
                types: [{ description, accept }],
                excludeAcceptAllOption: true
            });
            return multiple ? fileHandles : fileHandles[0];
        } catch (e) {
            if (e.message.indexOf('The user aborted a request') === -1) {
                console.error(e);
            }
            return null;
        }
    }

    /**
     * 打开目录选择器
     *
     * @returns {FileSystemDirectoryHandle|null} 目录句柄
     */
    async function openDirectoryPicker() {
        try {
            return await showDirectoryPicker();
        } catch (e) {
            if (e.message.indexOf('The user aborted a request') === -1) {
                console.error(e);
            }
            return null;
        }
    }

    /**
     * 验证并请求文件权限
     *
     * @param {FileSystemFileHandle} fileHandle 文件句柄
     * @param {Boolean} withWrite 是否写入
     * @returns {Boolean} 权限获取是否成功
     */
    async function verifyPermission(fileHandle, withWrite = false) {
        const options = {
            writable: withWrite,
            mode: withWrite ? 'readwrite' : 'read'
        };
        if ((await fileHandle.queryPermission(options)) === 'granted') {
            return true;
        }
        if ((await fileHandle.requestPermission(options)) === 'granted') {
            return true;
        }
        return false;
    }

    /**
     * 获取目录中的文件句柄
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @param {String} fileName 文件名
     * @returns {FileSystemFileHandle|null} 文件句柄
     */
    async function getFileHandle(dirHandle, fileName) {
        const pathItems = fileName.split('/');
        const fileSimpleName = pathItems[pathItems.length - 1];
        if (fileSimpleName.trim() === '') {
            throw Error('文件名称不能为空！');
        }
        let currentHandle = dirHandle;
        try {
            for (let i = 0; i < pathItems.length - 1; ++i) {
                currentHandle = await currentHandle.getDirectoryHandle(pathItems[i]);
            }
            return await currentHandle.getFileHandle(fileSimpleName);
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    /**
     * 获取目录中的目录句柄
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @param {String} dirName 目录名
     * @returns {FileSystemDirectoryHandle|null} 目录句柄
     */
    async function getDirectoryHandle(dirHandle, dirName) {
        const pathItems = dirName.split('/');
        const dirSimpleName = pathItems[pathItems.length - 1];
        if (dirSimpleName.trim() === '') {
            throw Error('目录名称不能为空！');
        }
        let currentHandle = dirHandle;
        try {
            for (let i = 0; i < pathItems.length - 1; ++i) {
                currentHandle = await currentHandle.getDirectoryHandle(pathItems[i]);
            }
            return await currentHandle.getDirectoryHandle(dirSimpleName);
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    /**
     * 获取目录中的文件句柄数组
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @returns {Array<FileSystemFileHandle>} 文件句柄数组
     */
    async function getFileHandleArray(dirHandle) {
        return await getHandleArray(dirHandle, 'file');
    }

    /**
     * 获取目录中的目录句柄数组
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @returns {Array<FileSystemDirectoryHandle>} 目录句柄数组
     */
    async function getDirectoryHandleArray(dirHandle) {
        return await getHandleArray(dirHandle, 'directory');
    }

    /**
     * 获取目录中的句柄数组
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @param {String} kind 句柄种类（文件：file、目录：directory）
     * @returns {Array<FileSystemFileHandle>} 文件句柄数组
     */
    async function getHandleArray(dirHandle, kind = 'all') {
        const handleArray = [];
        for await (const handle of dirHandle.values()) {
            if (handle.kind === kind || kind == 'all') {
                handleArray.push(handle);
            }
        }
        return handleArray;
    }

    /**
     * 获取目录包含的句柄Map
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @param {String} path 目录路径（初始为"/"）
     * @returns {Map<String, Object>} 目录包含的句柄Map
     */
    async function getHandleMap(dirHandle, path = '/') {
        const handleMap = new Map();
        for await (const handle of dirHandle.values()) {
            const childMap = new Map();
            childMap.set('handle', handle);
            if (handle.kind === 'directory') {
                const currentPath = path + handle.name + '/';
                childMap.set('children', await getHandleMap(handle, currentPath));
                handleMap.set(currentPath, childMap);
            } else {
                handleMap.set(path + handle.name, childMap);
            }
        }
        return handleMap;
    }

    /**
     * 创建新文件
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @param {String} fileName 文件名
     * @returns {FileSystemFileHandle|null} 新文件句柄
     */
    async function createFile(dirHandle, fileName) {
        const pathItems = fileName.split('/');
        const fileSimpleName = pathItems[pathItems.length - 1];
        if (fileSimpleName.trim() === '') {
            throw Error('文件名称不能为空！');
        }
        let currentHandle = dirHandle;
        try {
            for (let i = 0; i < pathItems.length - 1; ++i) {
                currentHandle = await currentHandle.getDirectoryHandle(pathItems[i], { create: true });
            }
            await currentHandle.getFileHandle(fileSimpleName);
            throw Error("文件名称为'" + fileSimpleName + "'的文件已存在！");
        } catch (e) {
            if (e.message.indexOf('文件已存在') === -1) {
                return await currentHandle.getFileHandle(fileSimpleName, { create: true });
            } else {
                console.error(e);
                return null;
            }
        }
    }

    /**
     * 创建新目录
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @param {String} dirName 目录名
     * @returns {FileSystemDirectoryHandle|null} 新目录句柄
     */
    async function createDirectory(dirHandle, dirName) {
        const pathItems = dirName.split('/');
        const dirSimpleName = pathItems[pathItems.length - 1];
        if (dirSimpleName.trim() === '') {
            throw Error('目录名称不能为空！');
        }
        let currentHandle = dirHandle;
        try {
            for (let i = 0; i < pathItems.length - 1; ++i) {
                currentHandle = await currentHandle.getDirectoryHandle(pathItems[i], { create: true });
            }
            await currentHandle.getDirectoryHandle(dirSimpleName);
            throw Error("目录名称为'" + dirSimpleName + "'的目录已存在！");
        } catch (e) {
            if (e.message.indexOf('目录已存在') === -1) {
                return await currentHandle.getDirectoryHandle(dirSimpleName, { create: true });
            }
            console.error(e);
            return null;
        }
    }

    /**
     * 删除文件
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @param {String} fileName 文件名
     * @returns {Boolean} 删除是否成功
     */
    async function removeFile(dirHandle, fileName) {
        const pathItems = fileName.split('/');
        const fileSimpleName = pathItems[pathItems.length - 1];
        let currentHandle = dirHandle;
        try {
            for (let i = 0; i < pathItems.length - 1; ++i) {
                currentHandle = await currentHandle.getDirectoryHandle(pathItems[i]);
            }
            await currentHandle.getFileHandle(fileSimpleName);
            await currentHandle.removeEntry(fileSimpleName);
        } catch (e) {}
        return true;
    }

    /**
     * 删除目录
     *
     * @param {FileSystemDirectoryHandle} dirHandle 目录句柄
     * @param {String} dirName 目录名
     * @returns {Boolean} 删除是否成功
     */
    async function removeDirectory(dirHandle, dirName) {
        const pathItems = dirName.split('/');
        const dirSimpleName = pathItems[pathItems.length - 1];
        let currentHandle = dirHandle;
        try {
            for (let i = 0; i < pathItems.length - 1; ++i) {
                currentHandle = await currentHandle.getDirectoryHandle(pathItems[i]);
            }
            await currentHandle.getDirectoryHandle(dirSimpleName);
            await currentHandle.removeEntry(dirSimpleName, { recursive: true });
        } catch (e) {}
        return true;
    }

    /**
     * 文件写入
     *
     * @param {FileSystemFileHandle} fileHandle 文件句柄
     * @param {Object} data 写入数据
     * @param {Boolean} isAppend 是否追加
     * @returns {Boolean} 写入是否成功
     */
    async function write(fileHandle, data, isAppend = true) {
        if (!(await verifyPermission(fileHandle, true))) {
            alert('文件没有写入权限！');
            return false;
        }
        const writable = await fileHandle.createWritable({ keepExistingData: isAppend });
        if (isAppend) {
            const file = await fileHandle.getFile();
            writable.seek(file.size);
        }
        writable.write(data);
        writable.close();
        return true;
    }

    /**
     * 判断是否是同一文件或目录
     *
     * @param {FileSystemFileHandle|FileSystemDirectoryHandle} handle1 句柄1
     * @param {FileSystemFileHandle|FileSystemDirectoryHandle} handle2 句柄2
     * @returns {Boolean} 是否是同一文件或目录
     */
    async function isSameEntry(handle1, handle2) {
        return await handle1.isSameEntry(handle2);
    }

    /**
     * 获取父目录句柄到子句柄之间的路径元素名称数组
     *
     * @param {FileSystemDirectoryHandle} parentHandle 父目录句柄
     * @param {FileSystemFileHandle|FileSystemDirectoryHandle} childHandle 子句柄
     * @returns {Array<String>} 父句柄到子句柄之间的路径元素名称数组
     */
    async function resolve(parentHandle, childHandle) {
        return await parentHandle.resolve(childHandle);
    }

    /**
     * 获取父目录句柄到子句柄之间的路径
     *
     * @param {FileSystemDirectoryHandle} parentHandle 父目录句柄
     * @param {FileSystemFileHandle|FileSystemDirectoryHandle} childHandle 子句柄
     * @returns {String|null} 父句柄到子句柄之间的路径
     */
    async function getChildHandlePath(parentHandle, childHandle) {
        const pathItems = await parentHandle.resolve(childHandle);
        if (pathItems === null) {
            return null;
        }
        return `{${parentHandle.name}}/` + pathItems.join('/') + (childHandle.kind === 'directory' ? '/' : '');
    }

    /**
     * 读取文件为文本
     *
     * @param {File} file 文件
     * @returns {String} 文件文本
     */
    async function readFileAsText(file) {
        return await readFile(file);
    }

    /**
     * 读取文件为DataURL字符串（Base64）
     *
     * @param {File} file 文件
     * @returns {String} 文件DataURL字符串
     */
    async function readFileAsDataURL(file) {
        return await readFile(file, 'DataURL');
    }

    /**
     * 读取文件为二进制字符串
     *
     * @param {File} file 文件
     * @returns {String} 文件二进制字符串
     */
    async function readFileAsBinaryString(file) {
        return await readFile(file, 'BinaryString');
    }

    /**
     * 读取文件为ArrayBuffer对象
     *
     * @param {File} file 文件
     * @returns {ArrayBuffer} 文件ArrayBuffer对象
     */
    async function readFileAsArrayBuffer(file) {
        return await readFile(file, 'ArrayBuffer');
    }

    /**
     * 读取文件句柄文件为文本
     *
     * @param {FileSystemFileHandle} fileHandle 文件句柄
     * @returns {String} 文件文本
     */
    async function readFileHandleAsText(fileHandle) {
        return await readFileHandle(fileHandle);
    }

    /**
     * 读取文件句柄文件为DataURL字符串（Base64）
     *
     * @param {FileSystemFileHandle} fileHandle 文件句柄
     * @returns {String} 文件DataURL字符串
     */
    async function readFileHandleAsDataURL(fileHandle) {
        return await readFileHandle(fileHandle, 'DataURL');
    }

    /**
     * 读取文件句柄文件为二进制字符串
     *
     * @param {FileSystemFileHandle} fileHandle 文件句柄
     * @returns {String} 文件二进制字符串
     */
    async function readFileHandleAsBinaryString(fileHandle) {
        return await readFileHandle(fileHandle, 'BinaryString');
    }

    /**
     * 读取文件句柄文件为ArrayBuffer对象
     *
     * @param {FileSystemFileHandle} fileHandle 文件句柄
     * @returns {ArrayBuffer} 文件ArrayBuffer对象
     */
    async function readFileHandleAsArrayBuffer(fileHandle) {
        return await readFileHandle(fileHandle, 'ArrayBuffer');
    }

    /**
     * 读取文件句柄文件
     *
     * @param {FileSystemFileHandle} fileHandle 文件句柄
     * @param {String} resultType 返回类型
     * @returns {Object} 读取结果
     */
    async function readFileHandle(fileHandle, resultType = 'Text') {
        return new Promise(async function (resolve, reject) {
            try {
                const file = await fileHandle.getFile();
                const reader = new FileReader();
                reader.onload = () => {
                    resolve(reader.result);
                };
                reader.onerror = () => {
                    reject(reader.error);
                };
                reader['readAs' + resultType](file);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * 读取文件
     *
     * @param {File} file 文件
     * @param {String} resultType 返回类型
     * @returns {Object} 读取结果
     */
    async function readFile(file, resultType = 'Text') {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = () => {
                reject(reader.error);
            };
            reader['readAs' + resultType](file);
        });
    }

    Object.defineProperty(exports, 'getFileHandleBuffer', { value: getFileHandleBuffer });
    Object.defineProperty(exports, 'getDirectoryHandleBuffer', { value: getDirectoryHandleBuffer });
    Object.defineProperty(exports, 'openFilePicker', { value: openFilePicker });
    Object.defineProperty(exports, 'openDirectoryPicker', { value: openDirectoryPicker });
    Object.defineProperty(exports, 'verifyPermission', { value: verifyPermission });
    Object.defineProperty(exports, 'getFileHandle', { value: getFileHandle });
    Object.defineProperty(exports, 'getDirectoryHandle', { value: getDirectoryHandle });
    Object.defineProperty(exports, 'getFileHandleArray', { value: getFileHandleArray });
    Object.defineProperty(exports, 'getDirectoryHandleArray', { value: getDirectoryHandleArray });
    Object.defineProperty(exports, 'getHandleArray', { value: getHandleArray });
    Object.defineProperty(exports, 'getHandleMap', { value: getHandleMap });
    Object.defineProperty(exports, 'createFile', { value: createFile });
    Object.defineProperty(exports, 'createDirectory', { value: createDirectory });
    Object.defineProperty(exports, 'removeFile', { value: removeFile });
    Object.defineProperty(exports, 'removeDirectory', { value: removeDirectory });
    Object.defineProperty(exports, 'write', { value: write });
    Object.defineProperty(exports, 'isSameEntry', { value: isSameEntry });
    Object.defineProperty(exports, 'resolve', { value: resolve });
    Object.defineProperty(exports, 'getChildHandlePath', { value: getChildHandlePath });
    Object.defineProperty(exports, 'readFileAsText', { value: readFileAsText });
    Object.defineProperty(exports, 'readFileAsDataURL', { value: readFileAsDataURL });
    Object.defineProperty(exports, 'readFileAsBinaryString', { value: readFileAsBinaryString });
    Object.defineProperty(exports, 'readFileAsArrayBuffer', { value: readFileAsArrayBuffer });
    Object.defineProperty(exports, 'readFileHandleAsText', { value: readFileHandleAsText });
    Object.defineProperty(exports, 'readFileHandleAsDataURL', { value: readFileHandleAsDataURL });
    Object.defineProperty(exports, 'readFileHandleAsBinaryString', { value: readFileHandleAsBinaryString });
    Object.defineProperty(exports, 'readFileHandleAsArrayBuffer', { value: readFileHandleAsArrayBuffer });
    Object.defineProperty(exports, 'readFileHandle', { value: readFileHandle });
    Object.defineProperty(exports, 'readFile', { value: readFile });

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;
})({});

export default MoFileSystem;
export const getFileHandleBuffer = MoFileSystem.getFileHandleBuffer;
export const getDirectoryHandleBuffer = MoFileSystem.getDirectoryHandleBuffer;
export const openFilePicker = MoFileSystem.openFilePicker;
export const openDirectoryPicker = MoFileSystem.openDirectoryPicker;
export const verifyPermission = MoFileSystem.verifyPermission;
export const getFileHandle = MoFileSystem.getFileHandle;
export const getDirectoryHandle = MoFileSystem.getDirectoryHandle;
export const getFileHandleArray = MoFileSystem.getFileHandleArray;
export const getDirectoryHandleArray = MoFileSystem.getDirectoryHandleArray;
export const getHandleArray = MoFileSystem.getHandleArray;
export const getHandleMap = MoFileSystem.getHandleMap;
export const createFile = MoFileSystem.createFile;
export const createDirectory = MoFileSystem.createDirectory;
export const removeFile = MoFileSystem.removeFile;
export const removeDirectory = MoFileSystem.removeDirectory;
export const write = MoFileSystem.write;
export const isSameEntry = MoFileSystem.isSameEntry;
export const resolve = MoFileSystem.resolve;
export const getChildHandlePath = MoFileSystem.getChildHandlePath;
export const readFileAsText = MoFileSystem.readFileAsText;
export const readFileAsDataURL = MoFileSystem.readFileAsDataURL;
export const readFileAsBinaryString = MoFileSystem.readFileAsBinaryString;
export const readFileAsArrayBuffer = MoFileSystem.readFileAsArrayBuffer;
export const readFileHandleAsText = MoFileSystem.readFileHandleAsText;
export const readFileHandleAsDataURL = MoFileSystem.readFileHandleAsDataURL;
export const readFileHandleAsBinaryString = MoFileSystem.readFileHandleAsBinaryString;
export const readFileHandleAsArrayBuffer = MoFileSystem.readFileHandleAsArrayBuffer;
export const readFileHandle = MoFileSystem.readFileHandle;
export const readFile = MoFileSystem.readFile;
