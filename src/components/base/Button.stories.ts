import { RACE_KEY } from '../../consts';
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
  template: `
    <ConfigProvider :theme="args.raceTheme">
      <Button v-bind="args"> Button </Button>
    </ConfigProvider>`,
});

export const Human = Template.bind({});
Human.args = { raceTheme: RACE_KEY.HUMAN };

export const NightElf = Template.bind({});
NightElf.args = { raceTheme: RACE_KEY.NIGHT_ELF };

export const Orc = Template.bind({});
Orc.args = { raceTheme: RACE_KEY.ORC };

export const Undead = Template.bind({});
Undead.args = { raceTheme: RACE_KEY.UNDEAD };
