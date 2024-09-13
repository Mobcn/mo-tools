/**
 * 基础元素
 */
class BaseElement extends HTMLElement {
    /**
     * 属性数组
     *
     * @type {string[]}
     */
    static properties = [];

    /**
     * 属性监听数组
     *
     * @returns {string[]}
     */
    static get observedAttributes() {
        return this.properties;
    }

    /**
     * 数据监听方法集
     *
     * @type {Map<string, Array<(newValue: string, oldValue: string) => void>}
     */
    watchAttributeMap = new Map();

    /**
     * @param {string | undefined} innerHTML
     * @param {ShadowRootInit | undefined} init
     */
    constructor(innerHTML, init) {
        super();
        this.attachShadow(init ?? { mode: 'open' });
        this.shadowRoot.innerHTML = innerHTML ?? '<style></style><slot></slot>';
        this.setStyle(':host{display:block;}');
        const watchs = this.watchAttribute();
        for (const attributeName in watchs) {
            this.watchAttributeMap.set(attributeName, [watchs[attributeName]]);
        }
    }

    /**
     * 连接文档回调
     */
    connectedCallback() {}

    /**
     * 断开文档回调
     */
    disconnectedCallback() {}

    /**
     * 移动文档回调
     */
    adoptedCallback() {}

    /**
     * 属性修改回调
     *
     * @param {string} attributeName 属性名
     * @param {string} oldValue 属性旧值
     * @param {string} newValue 属性新值
     */
    attributeChangedCallback(attributeName, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (this.watchAttributeMap.has(attributeName)) {
                this.watchAttributeMap.get(attributeName).forEach((fun) => fun(newValue, oldValue));
            }
        }
    }

    /**
     * 属性监听
     *
     * @return {{[attributeName: string]: (newValue: string, oldValue: string) => void}} 属性监听集
     */
    watchAttribute() {
        return {};
    }

    /**
     * 设置组件样式
     *
     * @param {string} style 样式字符串
     * @param {boolean} append 是否为追加
     */
    setStyle(style, append = false) {
        let styleElement = this.shadowRoot.querySelector('style');
        if (!styleElement) {
            styleElement = document.createElement('style');
            this.shadowRoot.appendChild(styleElement);
        }
        styleElement.innerHTML = append ? styleElement.innerHTML + '\n' + style : style;
    }

    /**
     * 添加组件样式
     *
     * @param {string} style 样式字符串
     */
    addStyle(style) {
        this.setStyle(style, true);
    }
}

export default BaseElement;
