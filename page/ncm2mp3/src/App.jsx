import { createSignal, For } from 'solid-js';
import Plus from './components/icon/Plus.jsx';
import decrypt from 'decrypt';

/**
 * @typedef {Object} MusicInfo 音乐信息
 * @property {string} album 音乐名
 * @property {string} artist 演唱者
 * @property {Blob} blob 二进制对象
 * @property {string} ext 扩展名
 * @property {string} file 文件下载地址
 * @property {string} mime 文件类型
 * @property {string} picture 封面地址
 * @property {string} rawExt 原扩展名
 * @property {string} rawFilename 原文件名
 * @property {string} title 标题
 */

/**
 * 应用
 */
function App() {
    /**
     * 音乐列表
     *
     * @type {[() => MusicInfo[], (newMusicList: MusicInfo[]) => void]}
     */
    const [getMusicList, setMusicList] = createSignal([]);

    /**
     * 选择文件
     */
    const handleSelectFiles = async () => {
        // 获取文件句柄
        const fileHandles = await showOpenFilePicker({ multiple: true });
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

    return (
        <div className="h-screen box-border p-1 bg-red-100">
            <div className="flex flex-col items-start w-2/3 max-w-6xl h-full mx-auto bg-gray-100">
                <button
                    className="flex justify-center items-center pl-1 pr-3 rounded bg-green-400 hover:bg-green-500 active:bg-green-600 text-white"
                    onClick={handleSelectFiles}
                >
                    <Plus className="inline-block w-7 h-7" />
                    <span className="text-base">选择需要转换的文件</span>
                </button>
                <For each={getMusicList()}>
                    {
                        /** @type {(musicInfo: MusicInfo) => JSX.Element} */
                        (musicInfo) => (
                            <div>
                                <a href={musicInfo.file} download={`${musicInfo.rawFilename}.${musicInfo.ext}`}>
                                    {musicInfo.rawFilename}
                                </a>
                            </div>
                        )
                    }
                </For>
            </div>
        </div>
    );
}

export default App;
