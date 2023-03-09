// 编辑器VS引入路径
const editorVS = 'https://cdn.staticfile.org/monaco-editor/0.36.1/min/vs';
// 编辑器Loader引入路径
const editorLoader = editorVS + '/loader.js';

// 异步导入monaco对象
const monacoAsync = fetch(editorLoader)
    .then((res) => res.text())
    .then((textJS) => {
        textJS = textJS.replace('var h=do', '//var h=do');
        textJS = textJS.replace('d(h)', 'd(h)\nfetch(r).then(d=>d.text()).then(t=>eval(t))');
        return eval(
            `new Promise((rev) => ({
                execFun: function () {
                    ${textJS};
                    this.require.config({paths:{vs:'${editorVS}'}});
                    this.require(['vs/editor/editor.main'],()=>rev(monaco));
                }
            }).execFun())`
        );
    });

/**
 * 编辑器工具
 */
const MoEditor = {
    /**
     * 使用monaco对象
     *
     * @param {(monaco: any) => void} callback monaco对象使用回调
     */
    useMonaco: (callback) => {
        monacoAsync.then((monaco) => callback(monaco));
    },

    /**
     * 创建编辑器
     *
     * @param {HTMLElement} domElement 编辑器挂载DOM元素
     * @param {EditorOptions | undefined} options 编辑器参数（详见：https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IEditorConstructionOptions.html#acceptSuggestionOnCommitCharacter）
     * @param {any} override 编辑器功能覆盖
     * @param {(result: { layout: () => void }) => void} callback 返回结果回调
     */
    create: (domElement, options, override, callback) =>
        MoEditor.useMonaco((monaco) => callback(monaco.editor.create(domElement, options, override))),

    /**
     * 设置编辑器主题
     *
     * @param {string} themeName 主题名称
     */
    setTheme: (themeName) => MoEditor.useMonaco((monaco) => monaco.editor.setTheme(themeName))
};

export default MoEditor;

/**
 * @typedef {Object} EditorOptions
 * @property {string} value 编辑器初始显示文字
 * @property {string} language 语言支持自行查阅demo
 * @property {boolean} automaticLayout 自动布局
 * @property {string} foldingStrategy 代码可分小段折叠
 * @property {string} autoClosingBrackets 是否自动添加结束括号(包括中括号) "always" | "languageDefined" | "beforeWhitespace" | "never"
 * @property {string} autoClosingDelete 是否自动删除结束括号(包括中括号) "always" | "never" | "auto"
 * @property {string} autoClosingQuotes 是否自动添加结束的单引号 双引号 "always" | "languageDefined" | "beforeWhitespace" | "never"
 * @property {string} autoIndent 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
 * @property {{ignoreEmptyLines: boolean, insertSpace: boolean}} comments 注释配置（ignoreEmptyLines: 插入行注释时忽略空行。默认为真。insertSpace: 插入行注释时忽略空行。默认为真。）
 * @property {string} cursorBlinking 光标动画样式
 * @property {boolean} cursorSmoothCaretAnimation 是否启用光标平滑插入动画  当你在快速输入文字的时候 光标是直接平滑的移动还是直接"闪现"到当前文字所处位置
 * @property {number} cursorSurroundingLines 光标环绕行数 当文字输入超过屏幕时 可以看见右侧滚动条中光标所处位置是在滚动条中间还是顶部还是底部 即光标环绕行数 环绕行数越大 光标在滚动条中位置越居中
 * @property {string} cursorSurroundingLinesStyle 光标环绕样式 "default" | "all"
 * @property {number} cursorWidth 光标宽度 <=25
 * @property {{enabled: boolean}} minimap 代码缩略图
 * @property {boolean} overviewRulerBorder 是否应围绕概览标尺绘制边框
 * @property {boolean} folding 是否启用代码折叠
 * @property {boolean} scrollBeyondLastLine 置编辑器是否可以滚动到最后一行之后
 * @property {string} renderLineHighlight 当前行突出显示方式  "all" | "line" | "none" | "gutter"
 * @property {string} theme 官方自带三种主题 vs, hc-black, or vs-dark
 * @property {boolean} readOnly 是否只读
 */
