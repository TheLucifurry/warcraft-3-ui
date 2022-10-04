import HudFooter from './HudFooter.vue';
import { unflatten } from 'flat';
import ConfigProvider from './ConfigProvider';
import { RACE_KEY } from '../consts';

export default {
  title: 'Combined/HudFooter',
  component: HudFooter,
  argTypes: {
    'inventory.slots': {
      control: { type: 'range', min: 0, max: 6 },
    },
  }
};

const Template = (args: any) => ({
  components: { HudFooter, ConfigProvider },
  setup() {
    return {
      args: unflatten(args, '.')
    };
  },
  template: `
    <ConfigProvider :theme="args.raceTheme">
      <HudFooter v-bind="args"/>
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
