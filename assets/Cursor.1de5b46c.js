var f=Object.defineProperty;var n=(t,s)=>f(t,"name",{value:s,configurable:!0});import{d as i,b as l,a as d,g as v,j as _,k as g,e as C,l as x,n as y,u as h,o as w,f as E}from"./vue.esm-bundler.bca99565.js";import{u as $}from"./ConfigProvider.bcbefe91.js";const L=i({__name:"Cursor",props:{state:{type:String,default:()=>"default"}},setup(t){const s=t;h(r=>({"34f4819e":E(m),"4d55a26c":s.color}));const{theme:c}=$(),o=l(null),e=l(null),m=d(()=>`url(${p(`../../assets/${c}/cursor.png`)}`);function p(r){return new URL(r,import.meta.url).href}n(p,"resolvedPath");function u(r){!o.value||(o.value.style.transform=`translate(${r.pageX}px, ${r.pageY}px)`)}return n(u,"moveCursor"),v(()=>{var r,a;if(e.value=(a=(r=_())==null?void 0:r.proxy)==null?void 0:a.$el.parentElement,!(e!=null&&e.value))throw new Error('[warcraft-3-ui]: Cursor - element from "to" prop not found or something went wrong');e.value.addEventListener("mousemove",u),e.value.classList.add("cursored")}),g(()=>{e.value&&(e.value.removeEventListener("mousemove",u),e.value.classList.remove("cursored"))}),(r,a)=>(w(),C("div",{ref_key:"cursorEl",ref:o,class:"cursor__container"},[x("div",{class:y(`cursor cursor--${s.state}`)},null,2)],512))}});L.__docgenInfo={exportName:"default",displayName:"Cursor",description:"",tags:{},props:[{name:"state",type:{name:"CursorState"},defaultValue:{func:!0,value:"() => 'default'"}}]};export{L as _};
//# sourceMappingURL=Cursor.1de5b46c.js.map