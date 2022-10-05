var d=Object.defineProperty;var i=(e,n)=>d(e,"name",{value:n,configurable:!0});import{d as s,b as c,m as r,f as m,o as l}from"./vue.esm-bundler.380ce9af.js";import{u as p,_ as u}from"./HudHeader.0b52b6da.js";import{_}from"./HudFooter.798aae2e.js";import{_ as f}from"./Cursor.d486725d.js";import{R as o,C as g}from"./ConfigProvider.2045ee74.js";import"./index.45241772.js";import"./Button.2754a6ba.js";const h={class:"hud"},a=s({__name:"Hud",setup(e){const n=p();return setInterval(()=>{n.add(1/60)},1e3/60),(v,y)=>(l(),c("div",h,[r(f),r(u,{time:m(n)},null,8,["time"]),r(_)]))}});a.__docgenInfo={exportName:"default",displayName:"Hud",description:"",tags:{}};const U={parameters:{storySource:{source:`import Hud from './Hud.vue';
import ConfigProvider from './ConfigProvider';
import { RACE_KEY } from '../consts';

export default {
  title: 'Combined/Hud',
  component: Hud,
};

const Template = (args: any) => ({
  components: { Hud, ConfigProvider },
  setup() {
    return { args };
  },
  template: \`
    <ConfigProvider :theme="args.raceTheme">
      <div style="height: 600px">
        <Hud/>
      </div>
    </ConfigProvider>
  \`,
});

export const Human = Template.bind({});
Human.args = { raceTheme: RACE_KEY.HUMAN };

export const NightElf = Template.bind({});
NightElf.args = { raceTheme: RACE_KEY.NIGHT_ELF };

export const Orc = Template.bind({});
Orc.args = { raceTheme: RACE_KEY.ORC };

export const Undead = Template.bind({});
Undead.args = { raceTheme: RACE_KEY.UNDEAD };
`,locationsMap:{human:{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}},"night-elf":{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}},orc:{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}},undead:{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}}}}},title:"Combined/Hud",component:a},t=i(e=>({components:{Hud:a,ConfigProvider:g},setup(){return{args:e}},template:`
    <ConfigProvider :theme="args.raceTheme">
      <div style="height: 600px">
        <Hud/>
      </div>
    </ConfigProvider>
  `}),"Template"),E=t.bind({});E.args={raceTheme:o.HUMAN};const H=t.bind({});H.args={raceTheme:o.NIGHT_ELF};const C=t.bind({});C.args={raceTheme:o.ORC};const T=t.bind({});T.args={raceTheme:o.UNDEAD};const O=["Human","NightElf","Orc","Undead"];export{E as Human,H as NightElf,C as Orc,T as Undead,O as __namedExportsOrder,U as default};
//# sourceMappingURL=Hud.stories.d61f91f7.js.map
