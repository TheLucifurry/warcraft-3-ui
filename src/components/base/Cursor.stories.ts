import { ref } from 'vue';
import Cursor from './Cursor.vue';
import ConfigProvider from '../ConfigProvider';
import { RACE_KEY } from '../../consts';

export default {
  title: 'Basic/Cursor',
  component: Cursor,
};

const Template = (args: any) => ({
  components: { Cursor, ConfigProvider },
  setup() {
    const state = ref('default');
    return { args, state };
  },
  template: `
      <ConfigProvider :theme="args.raceTheme">
        <div style="display: flex; text-align: center; flex-wrap: wrap; width: 760px">
          <Cursor :state="state" :color="args.color"/>
          ${[
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
    ]
      .map((s) => `
                    <div @mouseenter="state = '${s}'" style="height: 150px; width: 150px; border: 1px solid gray">
                      ${s}
                    </div>
                  `)
      .join('')
    }
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
