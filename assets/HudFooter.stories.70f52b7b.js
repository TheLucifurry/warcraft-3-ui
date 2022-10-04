var i=Object.defineProperty;var r=(n,a)=>i(n,"name",{value:a,configurable:!0});import{_ as t}from"./HudFooter.6198fabc.js";import{R as e,C as c}from"./ConfigProvider.acdda12b.js";import"./vue.esm-bundler.bca99565.js";import"./index.641a68fa.js";const C={parameters:{storySource:{source:`import HudFooter from './HudFooter.vue';
import ConfigProvider from './ConfigProvider';
import { RACE_KEY } from '../consts';

export default {
  title: 'Combined/HudFooter',
  component: HudFooter,
};

const Template = (args: any) => ({
  components: { HudFooter, ConfigProvider },
  setup() {
    return { args };
  },
  template: \`
    <ConfigProvider :theme="args.raceTheme">
      <HudFooter v-bind="args"/>
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
`,locationsMap:{human:{startLoc:{col:17,line:10},endLoc:{col:2,line:20},startBody:{col:17,line:10},endBody:{col:2,line:20}},"night-elf":{startLoc:{col:17,line:10},endLoc:{col:2,line:20},startBody:{col:17,line:10},endBody:{col:2,line:20}},orc:{startLoc:{col:17,line:10},endLoc:{col:2,line:20},startBody:{col:17,line:10},endBody:{col:2,line:20}},undead:{startLoc:{col:17,line:10},endLoc:{col:2,line:20},startBody:{col:17,line:10},endBody:{col:2,line:20}}}}},title:"Combined/HudFooter",component:t},o=r(n=>({components:{HudFooter:t,ConfigProvider:c},setup(){return{args:n}},template:`
    <ConfigProvider :theme="args.raceTheme">
      <HudFooter v-bind="args"/>
    </ConfigProvider>
  `}),"Template"),d=o.bind({});d.args={raceTheme:e.HUMAN};const s=o.bind({});s.args={raceTheme:e.NIGHT_ELF};const l=o.bind({});l.args={raceTheme:e.ORC};const m=o.bind({});m.args={raceTheme:e.UNDEAD};const h=["Human","NightElf","Orc","Undead"];export{d as Human,s as NightElf,l as Orc,m as Undead,h as __namedExportsOrder,C as default};
//# sourceMappingURL=HudFooter.stories.70f52b7b.js.map
