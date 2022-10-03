import Hud from './Hud.vue';
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
  template: `
    <ConfigProvider :theme="args.raceTheme">
      <div style="height: 600px">
        <Hud/>
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
