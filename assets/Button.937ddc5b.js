import{d as r,a as u,b as p,e as i,r as _,n as c,u as f,o as b,f as t}from"./vue.esm-bundler.bca99565.js";import{u as m,g as a}from"./ConfigProvider.acdda12b.js";const g=["disabled"],v=r({__name:"Button",props:{size:{type:String,default:()=>""}},setup(o){const d=o;f(n=>({"6ddba0ec":t(s).default,"53683d4c":t(s).hoverBg,"02611266":t(s).pressed,"3757c531":t(s).disabled}));const{theme:e}=m(),s=u(()=>({default:a(e,"btn_default.png"),hoverBg:a(e,"btn_hover_bg.png"),pressed:a(e,"btn_pressed.png"),disabled:a(e,"btn_disabled.png")})),l=p(!1);return(n,B)=>(b(),i("button",{class:c(`btn btn--${d.size}`),disabled:l.value},[_(n.$slots,"default")],10,g))}});v.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"size",type:{name:"Size"},defaultValue:{func:!0,value:"() => ''"}}],slots:[{name:"default"}]};export{v as _};
//# sourceMappingURL=Button.937ddc5b.js.map
