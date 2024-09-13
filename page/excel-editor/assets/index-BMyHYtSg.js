import{S as M}from"./x-data-spreadsheet-BW7fFVkJ.js";import{u as _,w as k}from"./xlsx-Buqb08EH.js";import{L as q}from"./luckyexcel-Cn1Gi2xj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();(function(s){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=s,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&typeof e!="string")for(var d in e)r.d(n,d,(function(u){return e[u]}).bind(null,d));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)})({3:function(s,o,r){r.r(o);const e={toolbar:{undo:"撤销",redo:"恢复",print:"打印",paintformat:"格式刷",clearformat:"清除格式",format:"数据格式",fontName:"字体",fontSize:"字号",fontBold:"加粗",fontItalic:"倾斜",underline:"下划线",strike:"删除线",color:"字体颜色",bgcolor:"填充颜色",border:"边框",merge:"合并单元格",align:"水平对齐",valign:"垂直对齐",textwrap:"自动换行",freeze:"冻结",autofilter:"自动筛选",formula:"函数",more:"更多"},contextmenu:{copy:"复制",cut:"剪切",paste:"粘贴",pasteValue:"粘贴数据",pasteFormat:"粘贴格式",hide:"隐藏",insertRow:"插入行",insertColumn:"插入列",deleteSheet:"删除",deleteRow:"删除行",deleteColumn:"删除列",deleteCell:"删除",deleteCellText:"删除数据",validation:"数据验证",cellprintable:"可打印",cellnonprintable:"不可打印",celleditable:"可编辑",cellnoneditable:"不可编辑"},print:{size:"纸张大小",orientation:"方向",orientations:["横向","纵向"]},format:{normal:"正常",text:"文本",number:"数值",percent:"百分比",rmb:"人民币",usd:"美元",eur:"欧元",date:"短日期",time:"时间",datetime:"长日期",duration:"持续时间"},formula:{sum:"求和",average:"求平均值",max:"求最大值",min:"求最小值",concat:"字符拼接",_if:"条件判断",and:"和",or:"或"},validation:{required:"此值必填",notMatch:"此值不匹配验证规则",between:"此值应在 {} 和 {} 之间",notBetween:"此值不应在 {} 和 {} 之间",notIn:"此值不在列表中",equal:"此值应该等于 {}",notEqual:"此值不应该等于 {}",lessThan:"此值应该小于 {}",lessThanEqual:"此值应该小于等于 {}",greaterThan:"此值应该大于 {}",greaterThanEqual:"此值应该大于等于 {}"},error:{pasteForMergedCell:"无法对合并的单元格执行此操作"},calendar:{weeks:["日","一","二","三","四","五","六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},button:{next:"下一步",cancel:"取消",remove:"删除",save:"保存",ok:"确认"},sort:{desc:"降序",asc:"升序"},filter:{empty:"空白"},dataValidation:{mode:"模式",range:"单元区间",criteria:"条件",modeType:{cell:"单元格",column:"列模式",row:"行模式"},type:{list:"列表",number:"数字",date:"日期",phone:"手机号",email:"电子邮件"},operator:{be:"在区间",nbe:"不在区间",lt:"小于",lte:"小于等于",gt:"大于",gte:"大于等于",eq:"等于",neq:"不等于"}}};window&&window.x_spreadsheet&&(window.x_spreadsheet.$messages=window.x_spreadsheet.$messages||{},window.x_spreadsheet.$messages["zh-cn"]=e),o.default=e}});let x;function z(){const s=x.children[5];x.appendChild(s.cloneNode(!0))}function B(s){const e=x.children[2].cloneNode(!0);e.dataset.tooltip=s.tip,e.addEventListener("mouseenter",()=>F(e)),e.addEventListener("click",s.onClick);let t=e.firstChild;t=t.firstChild;const n=t;n.classList.remove("print"),n.classList.add(s.icon),x.appendChild(e)}function F(s){const{left:o,top:r,width:e,height:t}=s.getBoundingClientRect(),n=document.createElement("div");n.classList.add("x-spreadsheet-tooltip"),n.innerHTML=s.dataset.tooltip||"",document.body.appendChild(n),n.style.left=`${o+e/2-n.clientWidth/2}px`,n.style.top=`${r+t+2}px`,s.addEventListener("mouseleave",()=>{document.body.contains(n)&&document.body.removeChild(n)}),s.addEventListener("click",()=>{document.body.contains(n)&&document.body.removeChild(n)})}async function A(s,o={}){let r;const{extendToolbar:e,...t}=o;if(M.locale("zh-cn"),r=new M(s,t),e){const n=()=>{const d=document.querySelector(".x-spreadsheet-toolbar-btns");if(d){x=d,z();for(const u of e)B(u)}};setTimeout(()=>{if(n(),!x){const d=setInterval(()=>{n(),x&&clearInterval(d)},100)}})}return r}const T={0:"none",1:"thin",2:"hair",3:"dotted",4:"dashed",5:"dashDot",6:"dashDotDot",7:"double",8:"medium",9:"mediumDashed",10:"mediumDashDot",11:"mediumDashDotDot",12:"slantDashDot",13:"thick"};function H(s){if(!s)return;const o={alignment:{vertical:"center"}},{border:r,color:e,bgcolor:t,font:n,underline:d,strike:u,valign:i,align:l}=s;return r&&(o.border||(o.border={}),["bottom","top","left","right"].forEach(function(p){r[p]&&(o.border[p]={style:r[p][0],color:r[p][1]})})),e&&(o.font||(o.font={}),o.font.color={rgb:e.replace("#","")}),t&&(o.fill||(o.fill={}),o.fill.fgColor={rgb:t.replace("#","")}),n&&(o.font||(o.font={}),o.font={...o.font,...n,sz:n.size}),d&&(o.font||(o.font={}),o.font.underline=d),u&&(o.font||(o.font={}),o.font.strike=u),i&&(i==="middle"?o.alignment.vertical="center":o.alignment.vertical=i),l&&(o.alignment.horizontal=l),o}function R(s){const o=document.createElement("input");o.setAttribute("type","file"),o.setAttribute("accept",".xlsx"),o.addEventListener("change",()=>{var e;const r=(e=o.files)==null?void 0:e[0];r&&(q.transformExcelToLucky(r,function(t){var u;const n=[];for(const i of t.sheets){const l={name:i.name,merges:[],rows:{},styles:[]},v=new Map;if(i.config.customHeight)for(const c of Object.keys(i.config.customHeight))i.config.customHeight[c]&&v.set(Number(c),i.config.rowlen[c]);if(i.config.customWidth)for(const c of Object.keys(i.config.customWidth))i.config.customWidth[c]&&(l.cols??(l.cols={}),l.cols[c]={width:i.config.columnlen[c]});const p=new Map;if(i.config.borderInfo&&i.config.borderInfo.length){for(const{rangeType:c,value:a}of i.config.borderInfo)if(c==="cell"){const{row_index:h,col_index:m,...w}=a;p.set(`${h}_${m}`,w)}}const S=[];for(const c of i.celldata){const{r:a,c:h,v:{bg:m,bl:w,cl:O,fc:E,ff:C,fs:g,ht:y,it:j,tb:D,un:N,vt:L,v:P}}=c;(u=l.rows)[a]??(u[a]=v.has(a)?{cells:{},height:v.get(a)}:{cells:{}}),l.rows[a].cells[h]={text:P};const b=p.get(`${a}_${h}`);if(m||w||O||E||C||g||y||j||D||N||L){const f={};m&&(f.bgcolor=m),O&&(f.strike=!0),E&&(f.color=E),y!=null&&(f.align=y==0?"center":y==1?"left":"right"),L&&(f.valign=L==0?"middle":L==1?"top":"bottom"),L||(f.valign="middle"),D==2&&(f.textwrap=!0),N&&(f.underline=!0),(w||C||g||j)&&(f.font={},w&&(f.font.bold=!0),C&&(f.font.name=C),g&&(f.font.size=g),j&&(f.font.italic=!0)),b&&(f.border={},b.l&&(f.border.left=[T[b.l.style],b.l.color]),b.r&&(f.border.right=[T[b.r.style],b.r.color]),b.t&&(f.border.top=[T[b.t.style],b.t.color]),b.b&&(f.border.bottom=[T[b.b.style],b.b.color]));const $=JSON.stringify(f),I=S.indexOf($);I===-1?(l.rows[a].cells[h].style=l.styles.length,S.push($),l.styles.push(f)):l.rows[a].cells[h].style=I}}if(i.config.merge)for(const c of Object.keys(i.config.merge)){const{r:a,rs:h,c:m,cs:w}=i.config.merge[c],O=`${String.fromCharCode(65+m)}${a+1}`,E=`${String.fromCharCode(64+m+w)}${a+h}`;l.merges.push(`${O}:${E}`);const C=l.rows[a].cells[m];for(let g=a;g<a+h;++g)if(l.rows[g])for(let y=m;y<m+w;++y)l.rows[g].cells[y]&&("style"in l.rows[g].cells[y]?l.rows[g].cells[y]={style:l.rows[g].cells[y].style}:delete l.rows[g].cells[y]);l.rows[a].cells[m]=Object.assign(l.rows[a].cells[m]||{},C,{merge:[h-1,w-1]})}n.push(l)}const d=Math.max(95,...n.map(i=>Object.keys(i.rows).length));s.options.row={...s.options.row||{len:100,height:25},len:d+5},s.loadData(n)}),o.remove())}),o.click()}function W(s){const o=s.getData();var r=_.book_new();o.forEach(function(e){for(var t={},n=e.rows,d={r:0,c:0},u={r:0,c:0},i=0;i<n.len;++i){var l=n[i];l&&Object.keys(l.cells).forEach(function(v){var p=+v;if(!isNaN(p)){var S=_.encode_cell({r:i,c:p});i>u.r&&(u.r=i),p>u.c&&(u.c=p);var c=l.cells[v].text,a="s",h=e.styles[l.cells[v].style],m=H(h);c?isNaN(parseFloat(c))?(c.toLowerCase()==="true"||c.toLowerCase()==="false")&&(c=!!c,a="b"):(c=parseFloat(c),a="n"):(c="",a="z"),t[S]={v:c,t:a,s:m},a=="s"&&c[0]=="="&&(t[S].f=c.slice(1)),l.cells[v].merge!=null&&(t["!merges"]==null&&(t["!merges"]=[]),t["!merges"].push({s:{r:i,c:p},e:{r:i+l.cells[v].merge[0],c:p+l.cells[v].merge[1]}}))}})}t["!ref"]=d?_.encode_range({s:d,e:u}):"A1",_.book_append_sheet(r,t,e.name)}),k(r,"导出.xlsx")}(async()=>{const s=await A("#app",{extendToolbar:[{tip:"导入",icon:"align-top",onClick:()=>R(s)},{tip:"导出",icon:"align-bottom",onClick:()=>W(s)}]})})();