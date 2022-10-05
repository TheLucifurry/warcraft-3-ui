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
      <div style="width: 300px; height: 130px; display: flex; flex-direction: column; justify-content: space-between;">
        <Button v-bind="args" style="height: 24px; width: 100px"> Button </Button>
        <Button v-bind="args" size="s" style="width: 150px"> Button </Button>
        <Button v-bind="args" size="m"> Button </Button>
      </div>
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
