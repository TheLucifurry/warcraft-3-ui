import { ref } from 'vue';
import Cursor from './Cursor.vue';

export default {
  title: 'Basic/Cursor',
  component: Cursor,
  // argTypes: {
  //   type: { type: 'select' }
  // },
};

const Template = (args) => ({
  components: { Cursor },
  setup() {
    const state = ref('default');
    return { args, state };
  },
  template: `
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
  `,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
// Primary.args = {
//   // type: 'number',
// };