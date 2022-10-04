var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{R as n,C as i}from"./ConfigProvider.9d9bb7e8.js";import{_ as r}from"./Button.4779f67f.js";import"./vue.esm-bundler.bca99565.js";const f={parameters:{storySource:{source:`import { RACE_KEY } from '../../consts';
import Button from './Button.vue';
import ConfigProvider from '../ConfigProvider';

export default {
  title: 'Basic/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['s', 'm'],
    },
  }
};

const Template = (args) => ({
  components: { Button, ConfigProvider },
  setup() {
    return { args };
  },
  template: \`
    <ConfigProvider :theme="args.raceTheme">
      <Button v-bind="args"> Button </Button>
    </ConfigProvider>\`,
});

export const Human = Template.bind({});
Human.args = { raceTheme: RACE_KEY.HUMAN };

export const NightElf = Template.bind({});
NightElf.args = { raceTheme: RACE_KEY.NIGHT_ELF };

export const Orc = Template.bind({});
Orc.args = { raceTheme: RACE_KEY.ORC };

export const Undead = Template.bind({});
Undead.args = { raceTheme: RACE_KEY.UNDEAD };
`,locationsMap:{human:{startLoc:{col:17,line:16},endLoc:{col:2,line:25},startBody:{col:17,line:16},endBody:{col:2,line:25}},"night-elf":{startLoc:{col:17,line:16},endLoc:{col:2,line:25},startBody:{col:17,line:16},endBody:{col:2,line:25}},orc:{startLoc:{col:17,line:16},endLoc:{col:2,line:25},startBody:{col:17,line:16},endBody:{col:2,line:25}},undead:{startLoc:{col:17,line:16},endLoc:{col:2,line:25},startBody:{col:17,line:16},endBody:{col:2,line:25}}}}},title:"Basic/Button",component:r,argTypes:{size:{control:{type:"select"},options:["s","m"]}}},e=t(o=>({components:{Button:r,ConfigProvider:i},setup(){return{args:o}},template:`
    <ConfigProvider :theme="args.raceTheme">
      <Button v-bind="args"> Button </Button>
    </ConfigProvider>`}),"Template"),s=e.bind({});s.args={raceTheme:n.HUMAN};const l=e.bind({});l.args={raceTheme:n.NIGHT_ELF};const d=e.bind({});d.args={raceTheme:n.ORC};const m=e.bind({});m.args={raceTheme:n.UNDEAD};const E=["Human","NightElf","Orc","Undead"];export{s as Human,l as NightElf,d as Orc,m as Undead,E as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories.41888c8e.js.map
