var m=Object.defineProperty;var u=(t,s)=>m(t,"name",{value:s,configurable:!0});import{d as f,b as l,a as d,g as i,j as v,k as _,e as g,l as C,n as x,u as y,o as E,f as w}from"./vue.esm-bundler.bca99565.js";import{u as h,g as k}from"./ConfigProvider.9d9bb7e8.js";const L=f({__name:"Cursor",props:{state:{type:String,default:()=>"default"}},setup(t){const s=t;y(r=>({"1e120088":w(p),d8522bfa:s.color}));const{theme:c}=h(),o=l(null),e=l(null),p=d(()=>k(c,"cursor.png"));function n(r){!o.value||(o.value.style.transform=`translate(${r.pageX}px, ${r.pageY}px)`)}return u(n,"moveCursor"),i(()=>{var r,a;if(e.value=(a=(r=v())==null?void 0:r.proxy)==null?void 0:a.$el.parentElement,!(e!=null&&e.value))throw new Error('[warcraft-3-ui]: Cursor - element from "to" prop not found or something went wrong');e.value.addEventListener("mousemove",n),e.value.classList.add("cursored")}),_(()=>{e.value&&(e.value.removeEventListener("mousemove",n),e.value.classList.remove("cursored"))}),(r,a)=>(E(),g("div",{ref_key:"cursorEl",ref:o,class:"cursor__container"},[C("div",{class:x(`cursor cursor--${s.state}`)},null,2)],512))}});L.__docgenInfo={exportName:"default",displayName:"Cursor",description:"",tags:{},props:[{name:"state",type:{name:"CursorState"},defaultValue:{func:!0,value:"() => 'default'"}}]};export{L as _};
//# sourceMappingURL=Cursor.e97ba420.js.map