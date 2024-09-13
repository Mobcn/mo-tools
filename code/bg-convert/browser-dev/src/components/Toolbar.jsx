import Download from './icon/Download.jsx';
import Convert from './icon/Convert.jsx';

/**
 * 工具条
 *
 * @param {{ hasFile: () => boolean; onChange: (color: number[]) => void; onConvert: () => void; onDownload: () => void }} props 参数
 */
function ToolBar(props) {
    return (
        <div className="flex w-full px-1 py-2 bg-gray-100  bg-opacity-50">
            <select
                className="flex justify-center items-center px-2 py-1 rounded bg-green-400 hover:bg-green-500 text-white"
                onChange={(e) => props.onChange(e.target.value.split(',').map((item) => Number(item)))}
            >
                <option value={[255, 255, 255, 255]} selected>
                    白色底
                </option>
                <option value={[255, 0, 0, 255]}>红色底</option>
                <option value={[67, 142, 219, 255]}>蓝色底</option>
            </select>
            <button
                className="flex justify-center items-center px-2 py-1 ml-2 rounded bg-green-400 hover:bg-green-500 active:bg-green-600 text-white"
                onClick={props.onConvert}
            >
                <Convert className="inline-block w-5 h-5" />
                <span className="text-base ml-2">转换</span>
            </button>
            {props.hasFile() && (
                <button
                    className="flex justify-center items-center px-2 ml-2 rounded bg-green-400 hover:bg-green-500 active:bg-green-600 text-white"
                    onClick={props.onDownload}
                >
                    <Download className="inline-block w-4 h-4" />
                    <span className="text-base ml-2">下载</span>
                </button>
            )}
        </div>
    );
}

export default ToolBar;
