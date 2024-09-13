import { utils as xlsxUtils, writeFile } from './xlsx.js';
import LuckyExcel from 'luckyexcel';

// 边框样式
const borderStyle = {
    0: 'none',
    1: 'thin',
    2: 'hair',
    3: 'dotted',
    4: 'dashed',
    5: 'dashDot',
    6: 'dashDotDot',
    7: 'double',
    8: 'medium',
    9: 'mediumDashed',
    10: 'mediumDashDot',
    11: 'mediumDashDotDot',
    12: 'slantDashDot',
    13: 'thick'
};

/**
 * 将 x-spreadsheet 样式数据格式转换为 xlsx-js-style
 *
 * @param {Object} style x-spreadsheet 样式
 * @returns {Object} xlsx-js-style
 */
function transformStyles(style) {
    if (!style) {
        return undefined;
    }

    const newStyle = { alignment: { vertical: 'center' } };
    const { border, color, bgcolor, font, underline, strike, valign, align } = style;

    // border - 边框样式
    if (border) {
        if (!newStyle.border) {
            newStyle.border = {};
        }
        const borderPosition = ['bottom', 'top', 'left', 'right'];
        borderPosition.forEach(function (p) {
            if (border[p]) {
                newStyle.border[p] = {
                    style: border[p][0],
                    color: border[p][1]
                };
            }
        });
    }
    // color - 字体颜色
    if (color) {
        if (!newStyle.font) {
            newStyle.font = {};
        }
        newStyle.font.color = { rgb: color.replace('#', '') };
    }
    // bgColor - 背景颜色
    if (bgcolor) {
        if (!newStyle.fill) {
            newStyle.fill = {};
        }
        newStyle.fill.fgColor = { rgb: bgcolor.replace('#', '') };
    }
    // font - 字体样式
    if (font) {
        if (!newStyle.font) {
            newStyle.font = {};
        }
        newStyle.font = {
            ...newStyle.font,
            ...font,
            sz: font.size
        };
    }
    // underline - 文本下划线
    if (underline) {
        if (!newStyle.font) {
            newStyle.font = {};
        }
        newStyle.font.underline = underline;
    }
    // strike - 文本中划线
    if (strike) {
        if (!newStyle.font) {
            newStyle.font = {};
        }
        newStyle.font.strike = strike;
    }
    // valign - 文本纵向对齐显示方式（默认居中）
    if (valign) {
        if (valign === 'middle') {
            newStyle.alignment.vertical = 'center';
        } else {
            newStyle.alignment.vertical = valign;
        }
    }
    // align - 文本横向对齐显示方式
    if (align) {
        newStyle.alignment.horizontal = align;
    }

    return newStyle;
}

/**
 * 导入到表格
 *
 * @param {import('x-data-spreadsheet').default} spreadsheet
 */
export function import2Sheet(spreadsheet) {
    const addInputElement = document.createElement('input');
    addInputElement.setAttribute('type', 'file');
    addInputElement.setAttribute('accept', '.xlsx');
    addInputElement.addEventListener('change', () => {
        const file = addInputElement.files?.[0];
        if (!file) {
            return;
        }
        LuckyExcel.transformExcelToLucky(file, function (exportJson) {
            const data = [];
            for (const sheet of exportJson.sheets) {
                /**
                 * @type {{
                 *   name: string;
                 *   merges: string[];
                 *   rows: any;
                 *   styles: any[];
                 * }}
                 */
                const item = { name: sheet.name, merges: [], rows: {}, styles: [] };
                const rowHeightMap = new Map();
                if (sheet.config.customHeight) {
                    for (const rowIndex of Object.keys(sheet.config.customHeight)) {
                        if (sheet.config.customHeight[rowIndex]) {
                            rowHeightMap.set(Number(rowIndex), sheet.config.rowlen[rowIndex]);
                        }
                    }
                }
                if (sheet.config.customWidth) {
                    for (const colIndex of Object.keys(sheet.config.customWidth)) {
                        if (sheet.config.customWidth[colIndex]) {
                            item.cols ??= {};
                            item.cols[colIndex] = { width: sheet.config.columnlen[colIndex] };
                        }
                    }
                }
                const borderMap = new Map();
                if (sheet.config.borderInfo && sheet.config.borderInfo.length) {
                    for (const { rangeType, value } of sheet.config.borderInfo) {
                        if (rangeType === 'cell') {
                            const { row_index, col_index, ...border } = value;
                            borderMap.set(`${row_index}_${col_index}`, border);
                        }
                    }
                }
                const styleStrArr = [];
                for (const cellitem of sheet.celldata) {
                    const {
                        r,
                        c,
                        v: { bg, bl, cl, fc, ff, fs, ht, it, tb, un, vt, v }
                    } = cellitem;
                    item.rows[r] ??= rowHeightMap.has(r) ? { cells: {}, height: rowHeightMap.get(r) } : { cells: {} };
                    item.rows[r].cells[c] = {
                        text: v
                    };
                    const bd = borderMap.get(`${r}_${c}`);
                    if (bg || bl || cl || fc || ff || fs || ht || it || tb || un || vt) {
                        const style = {};
                        bg && (style.bgcolor = bg);
                        cl && (style.strike = true);
                        fc && (style.color = fc);
                        ht != undefined && (style.align = ht == 0 ? 'center' : ht == 1 ? 'left' : 'right');
                        vt && (style.valign = vt == 0 ? 'middle' : vt == 1 ? 'top' : 'bottom');
                        vt || (style.valign = 'middle');
                        tb == 2 && (style.textwrap = true);
                        un && (style.underline = true);
                        if (bl || ff || fs || it) {
                            style.font = {};
                            bl && (style.font.bold = true);
                            ff && (style.font.name = ff);
                            fs && (style.font.size = fs);
                            it && (style.font.italic = true);
                        }
                        if (bd) {
                            style.border = {};
                            bd.l && (style.border.left = [borderStyle[bd.l.style], bd.l.color]);
                            bd.r && (style.border.right = [borderStyle[bd.r.style], bd.r.color]);
                            bd.t && (style.border.top = [borderStyle[bd.t.style], bd.t.color]);
                            bd.b && (style.border.bottom = [borderStyle[bd.b.style], bd.b.color]);
                        }
                        const currentStyleStr = JSON.stringify(style);
                        const styleIndex = styleStrArr.indexOf(currentStyleStr);
                        if (styleIndex === -1) {
                            item.rows[r].cells[c].style = item.styles.length;
                            styleStrArr.push(currentStyleStr);
                            item.styles.push(style);
                        } else {
                            item.rows[r].cells[c].style = styleIndex;
                        }
                    }
                }
                if (sheet.config.merge) {
                    for (const mergeKey of Object.keys(sheet.config.merge)) {
                        const { r, rs, c, cs } = sheet.config.merge[mergeKey];
                        const startCell = `${String.fromCharCode(65 + c)}${r + 1}`;
                        const endCell = `${String.fromCharCode(64 + c + cs)}${r + rs}`;
                        item.merges.push(`${startCell}:${endCell}`);
                        const mergeCell = item.rows[r].cells[c];
                        for (let i = r; i < r + rs; ++i) {
                            if (!item.rows[i]) {
                                continue;
                            }
                            for (let j = c; j < c + cs; ++j) {
                                if (!item.rows[i].cells[j]) {
                                    continue;
                                }
                                if ('style' in item.rows[i].cells[j]) {
                                    item.rows[i].cells[j] = { style: item.rows[i].cells[j].style };
                                } else {
                                    delete item.rows[i].cells[j];
                                }
                            }
                        }
                        item.rows[r].cells[c] = Object.assign(item.rows[r].cells[c] || {}, mergeCell, {
                            merge: [rs - 1, cs - 1]
                        });
                    }
                }
                data.push(item);
            }
            const dataLen = Math.max(95, ...data.map((item) => Object.keys(item.rows).length));
            spreadsheet.options.row = {
                ...(spreadsheet.options.row || { len: 100, height: 25 }),
                len: dataLen + 5
            };
            spreadsheet.loadData(data);
        });
        addInputElement.remove();
    });
    addInputElement.click();
}

/**
 * 导出excel
 *
 * @param {import('x-data-spreadsheet').default} spreadsheet
 */
export function export2Excel(spreadsheet) {
    const sdata = spreadsheet.getData();
    var out = xlsxUtils.book_new();
    sdata.forEach(function (xws) {
        var ws = {};
        var rowobj = xws.rows;
        var minCoord = { r: 0, c: 0 },
            maxCoord = { r: 0, c: 0 };
        for (var ri = 0; ri < rowobj.len; ++ri) {
            var row = rowobj[ri];
            if (!row) continue;
            Object.keys(row.cells).forEach(function (k) {
                var idx = +k;
                if (isNaN(idx)) return;
                var lastRef = xlsxUtils.encode_cell({ r: ri, c: idx });
                if (ri > maxCoord.r) maxCoord.r = ri;
                if (idx > maxCoord.c) maxCoord.c = idx;
                var cellText = row.cells[k].text,
                    type = 's',
                    styles = xws.styles[row.cells[k].style];
                // 转换样式数据格式
                var newStyles = transformStyles(styles);
                if (!cellText) {
                    cellText = '';
                    type = 'z';
                } else if (!isNaN(parseFloat(cellText))) {
                    cellText = parseFloat(cellText);
                    type = 'n';
                } else if (cellText.toLowerCase() === 'true' || cellText.toLowerCase() === 'false') {
                    cellText = Boolean(cellText);
                    type = 'b';
                }
                ws[lastRef] = { v: cellText, t: type, s: newStyles };
                if (type == 's' && cellText[0] == '=') {
                    ws[lastRef].f = cellText.slice(1);
                }
                if (row.cells[k].merge != null) {
                    if (ws['!merges'] == null) ws['!merges'] = [];
                    ws['!merges'].push({
                        s: { r: ri, c: idx },
                        e: {
                            r: ri + row.cells[k].merge[0],
                            c: idx + row.cells[k].merge[1]
                        }
                    });
                }
            });
        }
        ws['!ref'] = minCoord
            ? xlsxUtils.encode_range({
                  s: minCoord,
                  e: maxCoord
              })
            : 'A1';
        xlsxUtils.book_append_sheet(out, ws, xws.name);
    });
    writeFile(out, '导出.xlsx');
}
