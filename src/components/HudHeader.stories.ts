import HudHeader from './HudHeader.vue';
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
  template: `
    <ConfigProvider :theme="args.raceTheme">
      <HudHeader/>
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
