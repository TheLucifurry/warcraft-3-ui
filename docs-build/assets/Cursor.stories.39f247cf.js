var i=Object.defineProperty;var t=(o,e)=>i(o,"name",{value:e,configurable:!0});import{b as s}from"./vue.esm-bundler.e58e51d9.js";import{_ as a}from"./Cursor.676686b3.js";import{R as n,C as c}from"./ConfigProvider.3e3a8037.js";const v={parameters:{storySource:{source:`import { ref } from 'vue';
import Cursor from './Cursor.vue';
import ConfigProvider from '../ConfigProvider';
import { RACE_KEY } from '../../consts';

export default {
  title: 'Basic/Cursor',
  component: Cursor,
};

const states = [
  'default',
  'default-active',
  'pointer',
  'pointer-active',
  'pointer-denied',
  'hold',
  'arrow-top',
  'arrow-right',
  'arrow-bottom',
  'arrow-left',
];

const Template = (args: any) => ({
  components: { Cursor, ConfigProvider },
  setup() {
    const state = ref('default');
    return { args, state };
  },
  template: \`
    <ConfigProvider :theme="args.raceTheme">
      <div style="display: flex; text-align: center; color: cyan; font-family: arial; flex-wrap: wrap; width: 100%;height: 100%">
        <Cursor :state="state" :color="args.color"/>
        \${states
      .map((s) => \`
            <div
              @mouseenter="state = '\${s}'"
              style="margin: 4px; padding:32px; border-radius: 8px; background: #00ffff11"
            >
              \${s}
            </div>
          \`)
      .join('')}
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
`,locationsMap:{human:{startLoc:{col:17,line:24},endLoc:{col:2,line:47},startBody:{col:17,line:24},endBody:{col:2,line:47}},"night-elf":{startLoc:{col:17,line:24},endLoc:{col:2,line:47},startBody:{col:17,line:24},endBody:{col:2,line:47}},orc:{startLoc:{col:17,line:24},endLoc:{col:2,line:47},startBody:{col:17,line:24},endBody:{col:2,line:47}},undead:{startLoc:{col:17,line:24},endLoc:{col:2,line:47},startBody:{col:17,line:24},endBody:{col:2,line:47}}}}},title:"Basic/Cursor",component:a},l=["default","default-active","pointer","pointer-active","pointer-denied","hold","arrow-top","arrow-right","arrow-bottom","arrow-left"],r=t(o=>({components:{Cursor:a,ConfigProvider:c},setup(){const e=s("default");return{args:o,state:e}},template:`
    <ConfigProvider :theme="args.raceTheme">
      <div style="display: flex; text-align: center; color: cyan; font-family: arial; flex-wrap: wrap; width: 100%;height: 100%">
        <Cursor :state="state" :color="args.color"/>
        ${l.map(e=>`
            <div
              @mouseenter="state = '${e}'"
              style="margin: 4px; padding:32px; border-radius: 8px; background: #00ffff11"
            >
              ${e}
            </div>
          `).join("")}
      </div>
    </ConfigProvider>
  `}),"Template"),d=r.bind({});d.args={raceTheme:n.HUMAN};const m=r.bind({});m.args={raceTheme:n.NIGHT_ELF};const p=r.bind({});p.args={raceTheme:n.ORC};const f=r.bind({});f.args={raceTheme:n.UNDEAD};const E=["Human","NightElf","Orc","Undead"];export{d as Human,m as NightElf,p as Orc,f as Undead,E as __namedExportsOrder,v as default};
//# sourceMappingURL=Cursor.stories.39f247cf.js.map
