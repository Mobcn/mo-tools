import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";const c={class:"mo-button"},_={__name:"MoButton",props:{type:{type:String,default:""}},emits:["click"],setup(o,{emit:n}){const s=o,u=Vue.computed(()=>{const e=s.type.trim();return e?`mo-button__inner--${e}`:""});return(e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",c,[Vue.createElementVNode("button",{class:Vue.normalizeClass(`mo-button__inner ${Vue.unref(u)}`),onClick:t[0]||(t[0]=l=>n("click"))},[Vue.renderSlot(e.$slots,"default",{},()=>[Vue.createTextVNode("\u6309\u94AE")],!0)],2)]))}},a=r(_,[["__scopeId","data-v-c1e5e225"]]);export{a as default};
