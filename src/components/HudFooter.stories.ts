import HudFooter from './HudFooter.vue';
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
