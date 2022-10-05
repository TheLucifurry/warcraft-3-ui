var s=Object.defineProperty;var o=(e,r)=>s(e,"name",{value:r,configurable:!0});import{R as n,C as a}from"./ConfigProvider.2045ee74.js";import{_ as i}from"./Button.2754a6ba.js";import"./vue.esm-bundler.380ce9af.js";const h={parameters:{storySource:{source:`import { RACE_KEY } from '../../consts';
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
      <div style="width: 300px; height: 130px; display: flex; flex-direction: column; justify-content: space-between;">
        <Button v-bind="args" style="height: 24px; width: 100px"> Button </Button>
        <Button v-bind="args" size="s" style="width: 150px"> Button </Button>
        <Button v-bind="args" size="m"> Button </Button>
      </div>
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
`,locationsMap:{human:{startLoc:{col:17,line:16},endLoc:{col:2,line:29},startBody:{col:17,line:16},endBody:{col:2,line:29}},"night-elf":{startLoc:{col:17,line:16},endLoc:{col:2,line:29},startBody:{col:17,line:16},endBody:{col:2,line:29}},orc:{startLoc:{col:17,line:16},endLoc:{col:2,line:29},startBody:{col:17,line:16},endBody:{col:2,line:29}},undead:{startLoc:{col:17,line:16},endLoc:{col:2,line:29},startBody:{col:17,line:16},endBody:{col:2,line:29}}}}},title:"Basic/Button",component:i,argTypes:{size:{control:{type:"select"},options:["s","m"]}}},t=o(e=>({components:{Button:i,ConfigProvider:a},setup(){return{args:e}},template:`
    <ConfigProvider :theme="args.raceTheme">
      <div style="width: 300px; height: 130px; display: flex; flex-direction: column; justify-content: space-between;">
        <Button v-bind="args" style="height: 24px; width: 100px"> Button </Button>
        <Button v-bind="args" size="s" style="width: 150px"> Button </Button>
        <Button v-bind="args" size="m"> Button </Button>
      </div>
    </ConfigProvider>`}),"Template"),c=t.bind({});c.args={raceTheme:n.HUMAN};const l=t.bind({});l.args={raceTheme:n.NIGHT_ELF};const d=t.bind({});d.args={raceTheme:n.ORC};const m=t.bind({});m.args={raceTheme:n.UNDEAD};const f=["Human","NightElf","Orc","Undead"];export{c as Human,l as NightElf,d as Orc,m as Undead,f as __namedExportsOrder,h as default};
//# sourceMappingURL=Button.stories.d97961d3.js.map
