import Plus from './icon/Plus.jsx';
import Download from './icon/Download.jsx';

/**
 * 工具条
 *
 * @param {{ hasFile: () => boolean; onSelectFiles: () => void; onDownloadAll: () => void }} props 参数
 */
function ToolBar(props) {
    return (
        <div className="flex w-full px-1 py-2 bg-gray-100  bg-opacity-50">
            <button
                className="flex justify-center items-center pl-1 pr-3 rounded bg-green-400 hover:bg-green-500 active:bg-green-600 text-white"
                onClick={props.onSelectFiles}
            >
                <Plus className="inline-block w-7 h-7" />
                <span className="text-base">选择需要转换的文件</span>
            </button>
            {props.hasFile() && (
                <button
                    className="flex justify-center items-center px-3 ml-2 rounded bg-green-400 hover:bg-green-500 active:bg-green-600 text-white"
                    onClick={props.onDownloadAll}
                >
                    <Download className="inline-block w-4 h-4" />
                    <span className="text-base ml-2">全部下载</span>
                </button>
            )}
        </div>
    );
}

export default ToolBar;
