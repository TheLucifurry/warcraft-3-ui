var c=Object.defineProperty;var i=(e,a)=>c(e,"name",{value:a,configurable:!0});import{d,e as s,m as t,o as m}from"./vue.esm-bundler.e58e51d9.js";import{_ as l}from"./HudHeader.0ca572cc.js";import{_ as p}from"./HudFooter.d3c041b0.js";import{_}from"./Cursor.676686b3.js";import{R as n,C as u}from"./ConfigProvider.3e3a8037.js";import"./index.76c5a735.js";import"./Button.826a2380.js";const f={class:"hud"},r=d({__name:"Hud",setup(e){return(a,C)=>(m(),s("div",f,[t(_),t(l),t(p)]))}});r.__docgenInfo={exportName:"default",displayName:"Hud",description:"",tags:{}};const L={parameters:{storySource:{source:`import Hud from './Hud.vue';
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
`,locationsMap:{human:{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}},"night-elf":{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}},orc:{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}},undead:{startLoc:{col:17,line:10},endLoc:{col:2,line:22},startBody:{col:17,line:10},endBody:{col:2,line:22}}}}},title:"Combined/Hud",component:r},o=i(e=>({components:{Hud:r,ConfigProvider:u},setup(){return{args:e}},template:`
    <ConfigProvider :theme="args.raceTheme">
      <div style="height: 600px">
        <Hud/>
      </div>
    </ConfigProvider>
  `}),"Template"),g=o.bind({});g.args={raceTheme:n.HUMAN};const h=o.bind({});h.args={raceTheme:n.NIGHT_ELF};const E=o.bind({});E.args={raceTheme:n.ORC};const H=o.bind({});H.args={raceTheme:n.UNDEAD};const R=["Human","NightElf","Orc","Undead"];export{g as Human,h as NightElf,E as Orc,H as Undead,R as __namedExportsOrder,L as default};
//# sourceMappingURL=Hud.stories.646025ae.js.map
