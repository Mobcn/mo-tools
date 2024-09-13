import { For } from 'solid-js';
import Download from './icon/Download.jsx';
import X from './icon/X.jsx';

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
 * 音乐列表项
 *
 * @param {{ data: MusicInfo, onRemove: () => void }} props 参数
 */
function MusicItem(props) {
    const { ext, file, picture, rawFilename } = props.data;
    const fullName = rawFilename + '.' + ext;
    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = fullName;
        link.href = file;
        link.click();
    };
    return (
        <div className="flex w-full items-center p-2 border-t bg-gray-50">
            <img className="inline-block w-20 h-20" src={picture} />
            <audio className="ml-2" src={file} controls></audio>
            <div
                className="flex-1 ml-2 text-blue-400 hover:text-blue-500 active:text-blue-600 cursor-pointer"
                onClick={handleDownload}
            >
                <span className="hover:border-b-2 hover:border-blue-500 active:border-blue-600">
                    <Download className="inline-block relative bottom-px" />
                    <span>下载</span>
                    <span className="ml-2 align-middle">{fullName}</span>
                </span>
            </div>
            <button
                className="flex justify-center items-center px-2 py-1 rounded bg-red-400 hover:bg-red-500 active:bg-red-600 text-white"
                onClick={props.onRemove}
            >
                <X className="inline-block w-5 h-5" />
                <span className="text-base ml-1">删除</span>
            </button>
        </div>
    );
}

/**
 * 音乐列表
 *
 * @param {{ list: MusicInfo[], onRemove: (index: number) => void }} props 参数
 */
function MusicList(props) {
    return (
        <div className="flex flex-col w-full pb-2">
            <For each={props.list}>
                {(item, index) => <MusicItem data={item} onRemove={() => props.onRemove(index)} />}
            </For>
        </div>
    );
}

export default MusicList;
