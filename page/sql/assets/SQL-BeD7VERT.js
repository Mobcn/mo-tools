import{r,a as p,b as o,o as s,c as u,w as c,d as _,e as v,u as k,f as C,g as S,h as I,F as U,i as g,j as q}from"./index-D71KyxAy.js";import{_ as O,M as R}from"./MonacoEditor-Dz0ofpP7.js";const B={class:"mo-sql__exec"},F={class:"mo-sql__result"},w=`-- CREATE TABLE table1 (
--     field1 VARCHAR NOTNULL DEFAULT '',
--     field2 INT DEFAULT 0
-- );

-- INSERT INTO table1 (field1) VALUE ('string1');
-- INSERT INTO table1 (field2) VALUE (2);
-- INSERT INTO table1 (field1, field2) VALUE ('string2', 3);

-- SELECT * FROM table1;`,D={__name:"SQL",setup(M){const f=r(),d=r(w),E=p({language:"sql"}),i=p([]),m=p([]),a=r(""),n=r(!1),N=()=>{n.value=!0,i.splice(0),m.splice(0),a.value="";const t=(f.value.getSelection()||d.value).split(";").filter(e=>e.trim()!==""&&!e.trim().startsWith("--"));t.length>0?alasql(t).then(e=>{e=e.pop(),e instanceof Array&&e.length>0?(i.push(...Object.keys(e[0])),m.push(...e)):a.value=`执行结果：
${JSON.stringify(e)}`,n.value=!1}).catch(e=>{a.value=`执行错误：
${e}`,n.value=!1}):n.value=!1};return(T,t)=>{const e=o("el-aside"),L=o("el-button"),h=o("el-table-column"),y=o("el-table"),V=o("el-input"),x=o("el-main"),A=o("el-container");return s(),u(A,{class:"mo-sql"},{default:c(()=>[_(e,{class:"mo-sql__aside"},{default:c(()=>[_(R,{ref_key:"moEditor",ref:f,code:d.value,"onUpdate:code":t[0]||(t[0]=l=>d.value=l),options:E},null,8,["code","options"])]),_:1}),_(x,{class:"mo-sql__main"},{default:c(()=>[v("div",B,[_(L,{type:"primary",icon:k(q),loading:n.value,onClick:N},{default:c(()=>[C("执行")]),_:1},8,["icon","loading"])]),v("div",F,[i.length>0?(s(),u(y,{key:0,data:m,height:"100%",border:""},{default:c(()=>[(s(!0),S(U,null,I(i,l=>(s(),u(h,{key:l,prop:l,label:l,formatter:(Q,j,b)=>b??"null"},null,8,["prop","label","formatter"]))),128))]),_:1},8,["data"])):g("",!0),a.value!==""?(s(),u(V,{key:1,modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value=l),autosize:"",type:"textarea",readonly:"",resize:"none"},null,8,["modelValue"])):g("",!0)])]),_:1})]),_:1})}}},$=O(D,[["__scopeId","data-v-53b693de"]]);export{$ as default};
