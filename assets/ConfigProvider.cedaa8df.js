var i=Object.defineProperty;var n=(e,t)=>i(e,"name",{value:t,configurable:!0});import{d as u,r as a,p as c,i as p}from"./vue.esm-bundler.bca99565.js";var r=(e=>(e.HUMAN="hum",e.NIGHT_ELF="nel",e.ORC="orc",e.UNDEAD="und",e))(r||{});function f(e,t){return`./${e}/${t}`}n(f,"getAssetPath");function l(e,t){return`url(${f(e,t)})`}n(l,"getAssetUrl");const s="wc3ui-config",h=u({props:{theme:{type:String,default:r.HUMAN}},setup(e,t){const{theme:o}=e;return c(s,{theme:o}),()=>a(t.slots,"default")}});function N(){const{theme:e}=p(s)||{theme:r.HUMAN};return{theme:e}}n(N,"useConfig");export{h as C,r as R,f as a,l as g,N as u};
//# sourceMappingURL=ConfigProvider.cedaa8df.js.map
