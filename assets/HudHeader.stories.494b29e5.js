var d=Object.defineProperty;var r=(o,a)=>d(o,"name",{value:a,configurable:!0});import{_ as t}from"./HudHeader.607d7352.js";import{R as e,C as c}from"./ConfigProvider.b038389b.js";import"./vue.esm-bundler.bca99565.js";import"./index.641a68fa.js";import"./Button.5f405192.js";const C={parameters:{storySource:{source:`import HudHeader from './HudHeader.vue';
import ConfigProvider from './ConfigProvider';
import { RACE_KEY } from '../consts';

export default {
  title: 'Combined/HudHeader',
  component: HudHeader,
};

const Template = (args: any) => ({
  components: { HudHeader, ConfigProvider },
  setup() {
    return { args };
  },
  template: \`
    <ConfigProvider :theme="args.raceTheme">
      <HudHeader/>
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
`,locationsMap:{human:{startLoc:{col:17,line:10},endLoc:{col:2,line:20},startBody:{col:17,line:10},endBody:{col:2,line:20}},"night-elf":{startLoc:{col:17,line:10},endLoc:{col:2,line:20},startBody:{col:17,line:10},endBody:{col:2,line:20}},orc:{startLoc:{col:17,line:10},endLoc:{col:2,line:20},startBody:{col:17,line:10},endBody:{col:2,line:20}},undead:{startLoc:{col:17,line:10},endLoc:{col:2,line:20},startBody:{col:17,line:10},endBody:{col:2,line:20}}}}},title:"Combined/HudHeader",component:t},n=r(o=>({components:{HudHeader:t,ConfigProvider:c},setup(){return{args:o}},template:`
    <ConfigProvider :theme="args.raceTheme">
      <HudHeader/>
    </ConfigProvider>
  `}),"Template"),i=n.bind({});i.args={raceTheme:e.HUMAN};const l=n.bind({});l.args={raceTheme:e.NIGHT_ELF};const s=n.bind({});s.args={raceTheme:e.ORC};const m=n.bind({});m.args={raceTheme:e.UNDEAD};const h=["Human","NightElf","Orc","Undead"];export{i as Human,l as NightElf,s as Orc,m as Undead,h as __namedExportsOrder,C as default};
//# sourceMappingURL=HudHeader.stories.494b29e5.js.map
