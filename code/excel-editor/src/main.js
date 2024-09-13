import { createXSpreadsheet } from './js/x-spreadsheet-patch.js';
import { import2Sheet, export2Excel } from './js/import-export.js';

(async () => {
    const spreadsheet = await createXSpreadsheet('#app', {
        extendToolbar: [
            {
                tip: '导入',
                icon: 'align-top',
                onClick: () => import2Sheet(spreadsheet)
            },
            {
                tip: '导出',
                icon: 'align-bottom',
                onClick: () => export2Excel(spreadsheet)
            }
        ]
    });
})();
