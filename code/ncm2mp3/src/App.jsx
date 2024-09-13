import { createSignal } from 'solid-js';
import Toolbar from './components/Toolbar.jsx';
import MusicList from './components/MusicList.jsx';
import decrypt from './utils/decrypt.js';

/**
 * @typedef {import("./components/MusicList").MusicInfo} MusicInfo
 */

/**
 * 支持的后缀
 *
 * @type {string[]}
 */
const exts = [
    '.ncm',
    '.uc',
    '.kwm',
    '.xm',
    '.wav',
    '.mp3',
    '.flac',
    '.m4a',
    '.ogg',
    '.tm0',
    '.tm3',
    '.qmc3',
    '.qmc2',
    '.qmc0',
    '.qmcflac',
    '.qmcogg',
    '.tkm',
    '.bkcmp3',
    '.bkcm4a',
    '.bkcflac',
    '.bkcwav',
    '.bkcape',
    '.bkcogg',
    '.bkcwma',
    '.mggl',
    '.mflac',
    '.mflac0',
    '.mgg',
    '.mgg1',
    '.mgg0',
    '.666c6163',
    '.6d7033',
    '.6f6767',
    '.6d3461',
    '.776176',
    '.tm2',
    '.tm6',
    '.cache',
    '.vpr',
    '.kgm',
    '.kgma'
];

function App() {
    /**
     * 音乐列表
     *
     * @type {[() => MusicInfo[], (newMusicList: MusicInfo[]) => void]}
     */
    const [getMusicList, setMusicList] = createSignal([]);

    /**
     * 是否存在文件
     *
     * @return {boolean}
     */
    const hasFile = () => getMusicList().length > 0;

    /**
     * 选择文件
     */
    const handleSelectFiles = async () => {
        // 获取文件句柄
        const fileHandles = await showOpenFilePicker({
            types: [{ description: 'Audios', accept: { 'audio/*': exts } }],
            multiple: true
        });
        // 批量转换
        const infos = await Promise.all(
            fileHandles.map(async (fileHandle) => {
                const file = await fileHandle.getFile();
                return decrypt.Decrypt(file);
            })
        );
        // 更新音乐列表
        setMusicList(infos);
    };

    /**
     * 删除
     */
    const handleRemove = (index) => {
        const newList = [...getMusicList()];
        newList.splice(index, 1);
        setMusicList(newList);
    };

    /**
     * 全部下载
     */
    const handleDownloadAll = () => {
        for (const musicInfo of getMusicList()) {
            const link = document.createElement('a');
            link.download = musicInfo.rawFilename + '.' + musicInfo.ext;
            link.href = musicInfo.file;
            link.click();
        }
    };

    return (
        <div className="h-full box-border bg-blue-50">
            <div className="flex flex-col items-start w-full min-w-[56rem] max-w-6xl h-full mx-auto bg-white">
                <Toolbar hasFile={hasFile} onSelectFiles={handleSelectFiles} onDownloadAll={handleDownloadAll} />
                {hasFile() && <MusicList list={getMusicList()} onRemove={handleRemove} />}
            </div>
        </div>
    );
}

export default App;
