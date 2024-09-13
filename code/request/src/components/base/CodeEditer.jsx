import React, { useState } from 'react';
import MonacoEditor, { loader } from '@monaco-editor/react';

// MonacoEditor CDN 加载配置
loader.config({ paths: { vs: 'https://cdn.staticfile.org/monaco-editor/0.33.0/min/vs' } });

/**
 * 编辑器语言枚举
 */
const LanguageEnum = {
    JAVASCRIPT: 'javascript',
    JSON: 'json',
    HTML: 'html'
};

/**
 * 代码编辑器
 */
function CodeEditer({ defaultLanguage = LanguageEnum.JAVASCRIPT, value, readOnly = false, onChange }) {
    let [innerValue, setInnerVale] = useState('');
    return (
        <MonacoEditor
            width="100%"
            height="100%"
            defaultLanguage={defaultLanguage}
            value={value == null ? innerValue : value}
            options={{ minimap: { enabled: false }, readOnly }}
            onChange={(newValue = '') => (onChange ? onChange(newValue) : setInnerVale(newValue))}
        />
    );
}

export default CodeEditer;
export { LanguageEnum };
