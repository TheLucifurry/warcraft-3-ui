var f=Object.defineProperty;var c=(o,t)=>f(o,"name",{value:t,configurable:!0});import{d as m,b as p,a as l,g as h,e as v,l as n,f as e,n as y,u as g,o as x}from"./vue.esm-bundler.e58e51d9.js";import{u as k}from"./ConfigProvider.3e3a8037.js";import{u as B}from"./index.76c5a735.js";const b={class:"hud-footer"},C=["src"],E=["src"],F=m({__name:"HudFooter",props:{inventory:{type:Boolean,default:()=>!0}},setup(o){const t=o;g(s=>({"27e1616d":e(i)}));function r(s){return new URL(s,import.meta.url).href}c(r,"resolvedPath");const a=p(null),{height:_}=B(a),{theme:u}=k(),d=l(()=>t.inventory),i=l(()=>`${_.value}px`);return h(()=>{}),(s,H)=>(x(),v("div",b,[n("img",{ref_key:"texEl",ref:a,class:"hud-footer__tex",src:r(`../assets/${e(u)}/hud_footer.png`)},null,8,C),n("div",{class:y(["hud-footer__inventory",{"hud-footer--disabled":!e(d)}])},[n("img",{class:"hud-footer__inventory-mock-tex",src:r(`../assets/${e(u)}/hud_inventory_mock.png`)},null,8,E)],2)]))}});F.__docgenInfo={exportName:"default",displayName:"HudFooter",description:"",tags:{},props:[{name:"inventory",type:{name:"boolean"},defaultValue:{func:!0,value:"()=>true"}}]};export{F as _};
//# sourceMappingURL=HudFooter.d3c041b0.js.map