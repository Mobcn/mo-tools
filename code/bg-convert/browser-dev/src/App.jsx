import { createSignal } from 'solid-js';
import RightArrow from './components/icon/RightArrow.jsx';
import ToolBar from './components/Toolbar.jsx';

/** 敏感度 */
const sensibility = 25;

function App() {
    /**
     * 原图片地址
     *
     * @type {[() => string, (newURL: string) => void]}
     */
    const [getSrcImageURL, setSrcImageURL] = createSignal('');

    /**
     * 转换图片地址
     *
     * @type {[() => string, (newURL: string) => void]}
     */
    const [getDesImageURL, setDesImageURL] = createSignal('');

    /**
     * 目标底色 [r, g, b, a]
     *
     * @type {[() => [number, number, number, number], (newColor: [number, number, number, number]) => void]}
     */
    const [getTargetColor, setTargetColor] = createSignal([255, 255, 255, 255]);

    /**
     * Image DOM 元素
     *
     * @type {HTMLImageElement}
     */
    let imageDom = document.createElement('img');

    /**
     * Canvas DOM 元素
     *
     * @type {HTMLCanvasElement}
     */
    let canvasDom = document.createElement('canvas');

    /**
     * 选择图片
     */
    const handleSelectImage = async () => {
        const fileHandles = await showOpenFilePicker({
            types: [
                {
                    description: 'Image',
                    accept: { 'image/*': ['.png', '.jpe', '.jpg', '.jpeg'] }
                }
            ]
        });
        const image = await fileHandles[0].getFile();
        const imageURL = URL.createObjectURL(image);
        imageDom.src = imageURL;
        setSrcImageURL(imageURL);
    };

    /**
     * 图片背景切换
     */
    const handleConvert = () => {
        if (!getSrcImageURL()) {
            alert('请选择图片！');
            return;
        }
        // 设置画布宽高
        canvasDom.width = imageDom.width;
        canvasDom.height = imageDom.height;
        // 按原图绘制
        const ctx = canvasDom.getContext('2d');
        ctx.drawImage(imageDom, 0, 0, imageDom.width, imageDom.height);
        const imgData = ctx.getImageData(0, 0, imageDom.width, imageDom.height);
        // 获取原底色值
        const r = imgData.data[(4 * imgData.width + 4) * 4];
        const b = imgData.data[(4 * imgData.width + 4) * 4 + 1];
        const g = imgData.data[(4 * imgData.width + 4) * 4 + 2];
        const a = imgData.data[(4 * imgData.width + 4) * 4 + 3];
        // 待替换像素点
        const dots = [];
        // 全图扫描图像，获取待替换像素点
        for (let i = 0; i < imgData.height; i++) {
            for (let j = 0; j < imgData.width; j++) {
                const y = 4 * (i * imgData.width + j);
                if (
                    Math.abs(imgData.data[y] - r) < sensibility &&
                    Math.abs(imgData.data[y + 1] - b) < sensibility &&
                    Math.abs(imgData.data[y + 2] - g) < sensibility &&
                    Math.abs(imgData.data[y + 3] - a) < sensibility
                ) {
                    if (j < Math.floor(imgData.width / 2)) {
                        dots.push(4 * (i * imgData.width + (j + 1)));
                        dots.push(4 * (i * imgData.width + (j + 2)));
                        dots.push(4 * (i * imgData.width + (j + 3)));
                    }
                    if (j >= Math.ceil(imgData.width / 2)) {
                        dots.push(4 * (i * imgData.width + (j - 1)));
                        dots.push(4 * (i * imgData.width + (j - 2)));
                        dots.push(4 * (i * imgData.width + (j - 3)));
                    }
                    dots.push(4 * ((i + 1) * imgData.width + j));
                    dots.push(4 * ((i - 1) * imgData.width + j));
                    dots.push(4 * ((i + 2) * imgData.width + j));
                    dots.push(4 * ((i - 2) * imgData.width + j));
                    dots.push(4 * ((i + 1) * imgData.width + (j + 1)));
                    dots.push(4 * ((i - 1) * imgData.width + (j - 1)));
                    dots.push(4 * ((i + 1) * imgData.width + (j - 1)));
                    dots.push(4 * ((i - 1) * imgData.width + (j + 1)));
                    dots.push(y);
                }
            }
        }
        // 替换像素点
        dots.forEach((item) => {
            const targetColor = getTargetColor();
            imgData.data[item] = targetColor[0];
            imgData.data[item + 1] = targetColor[1];
            imgData.data[item + 2] = targetColor[2];
            imgData.data[item + 3] = targetColor[3];
        });
        // 重新绘制
        ctx.putImageData(imgData, 0, 0);
        // 生成转换文件下载地址
        canvasDom.toBlob((blob) => setDesImageURL(URL.createObjectURL(blob)));
    };

    /**
     * 下载
     */
    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = '新图片.png';
        link.href = getDesImageURL();
        link.click();
    };

    return (
        <div className="h-full box-border bg-blue-50">
            <div className="flex flex-col items-start w-full min-w-[56rem] max-w-6xl h-full mx-auto bg-white">
                <ToolBar
                    hasFile={() => getDesImageURL() !== ''}
                    onChange={setTargetColor}
                    onConvert={handleConvert}
                    onDownload={handleDownload}
                />
                <div className="flex items-center justify-between w-full p-10">
                    <div
                        className="flex items-center justify-center w-[22.4rem] h-[31.36rem] p-2 bg-red-50 cursor-pointer"
                        onClick={handleSelectImage}
                    >
                        {getSrcImageURL() ? (
                            <img className="max-w-full max-h-full" src={getSrcImageURL()} />
                        ) : (
                            <span className="select-none">点击选择图片</span>
                        )}
                    </div>
                    <RightArrow className="w-12 h-12" />
                    <div className="flex items-center justify-center w-[22.4rem] h-[31.36rem] p-2 bg-blue-50">
                        {getDesImageURL() && <img className="max-w-full max-h-full" src={getDesImageURL()} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
