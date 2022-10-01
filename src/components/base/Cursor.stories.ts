import { ref } from 'vue';
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
  template: `
      <ConfigProvider :theme="args.raceTheme">
        <div style="display: flex; text-align: center; color: cyan; font-family: arial; flex-wrap: wrap; width: 100%;height: 100%">
          <Cursor :state="state" :color="args.color"/>
          ${states
      .map((s) => `
        <div
          @mouseenter="state = '${s}'"
          style="margin: 4px; padding:32px; border-radius: 8px; background: #00ffff11"
        >
          ${s}
        </div>
      `)
      .join('')}
        </div>
      </ConfigProvider>
  `,
});

export const Human = Template.bind({});
Human.args = { raceTheme: RACE_KEY.HUMAN };

export const NightElf = Template.bind({});
NightElf.args = { raceTheme: RACE_KEY.NIGHT_ELF };

export const Orc = Template.bind({});
Orc.args = { raceTheme: RACE_KEY.ORC };

export const Undead = Template.bind({});
Undead.args = { raceTheme: RACE_KEY.UNDEAD };
