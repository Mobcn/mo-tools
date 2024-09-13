import Spreadsheet from 'x-data-spreadsheet';
import 'x-data-spreadsheet/dist/locale/zh-cn';

/**
 * 工具栏元素文档对象
 *
 * @type {Element}
 */
let toolbarBtns;

/**
 * 工具栏添加分割线
 */
function addToolbarDivider() {
    const toolbarDivider = toolbarBtns.children[5];
    toolbarBtns.appendChild(toolbarDivider.cloneNode(true));
}

/**
 * 工具栏添加按钮
 *
 * @param {ExtendToolbarOption} toolbarOption
 */
function addToolbarBtn(toolbarOption) {
    const toolBarPrint = toolbarBtns.children[2];
    /** @type {any} */
    const cloneNode = toolBarPrint.cloneNode(true);
    /** @type {HTMLElement} */
    const cloneElement = cloneNode;
    cloneElement.dataset['tooltip'] = toolbarOption.tip;
    cloneElement.addEventListener('mouseenter', () => tooltip(cloneElement));
    cloneElement.addEventListener('click', toolbarOption.onClick);
    /** @type {any} */
    let childNode = cloneElement.firstChild;
    childNode = childNode.firstChild;
    /** @type {HTMLElement} */
    const cloneElementIcon = childNode;
    cloneElementIcon.classList.remove('print');
    cloneElementIcon.classList.add(toolbarOption.icon);
    toolbarBtns.appendChild(cloneElement);
}

/**
 * 提示展示
 *
 * @param {HTMLElement} target
 */
function tooltip(target) {
    const { left, top, width, height } = target.getBoundingClientRect();
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('x-spreadsheet-tooltip');
    tooltipElement.innerHTML = target.dataset.tooltip || '';
    document.body.appendChild(tooltipElement);
    tooltipElement.style.left = `${left + width / 2 - tooltipElement.clientWidth / 2}px`;
    tooltipElement.style.top = `${top + height + 2}px`;
    target.addEventListener('mouseleave', () => {
        if (document.body.contains(tooltipElement)) {
            document.body.removeChild(tooltipElement);
        }
    });
    target.addEventListener('click', () => {
        if (document.body.contains(tooltipElement)) {
            document.body.removeChild(tooltipElement);
        }
    });
}

/**
 * 创建表格
 *
 * @param {string | HTMLElement} container
 * @param {PatchOptions} options
 */
export async function createXSpreadsheet(container, options = {}) {
    /** @type {import("x-data-spreadsheet").default} */
    let spreadsheet;
    const { extendToolbar, ...opts } = options;
    // 创建表格
    Spreadsheet.locale('zh-cn');
    spreadsheet = new Spreadsheet(container, opts);
    // 添加扩展工具栏
    if (extendToolbar) {
        const addToolbarFun = () => {
            const queryElement = document.querySelector('.x-spreadsheet-toolbar-btns');
            if (!queryElement) {
                return;
            }
            toolbarBtns = queryElement;
            addToolbarDivider();
            for (const toolbarOption of extendToolbar) {
                addToolbarBtn(toolbarOption);
            }
        };
        setTimeout(() => {
            addToolbarFun();
            if (!toolbarBtns) {
                const intervalInstance = setInterval(() => {
                    addToolbarFun();
                    if (toolbarBtns) {
                        clearInterval(intervalInstance);
                    }
                }, 100);
            }
        });
    }
    return spreadsheet;
}

/**
 * @typedef {import("x-data-spreadsheet").Options & {
 *   extendToolbar?: ExtendToolbarOption[];
 * }} PatchOptions 参数
 */

/**
 * @typedef {Object} ExtendToolbarOption 扩展工具栏
 * @property {string} tip 提示
 * @property {string} icon 图标
 * @property {() => void} onClick 点击事件
 */
