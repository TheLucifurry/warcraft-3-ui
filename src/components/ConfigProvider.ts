import {
  defineComponent, inject, PropType, provide, renderSlot, Component,
} from 'vue';
import { RACE_KEY } from '../consts';

const injectKey = 'wc3ui-config';

type InternalAPI = {
  readonly theme: Readonly<RACE_KEY>
}

type IConfigAPI = {
  theme: RACE_KEY
}

export type WidgetsList = Record<string, Component>;

export default defineComponent({
  props: {
    theme: {
      type: String as PropType<RACE_KEY>,
      default: RACE_KEY.HUMAN,
    },
  },
  setup(props, ctx) {
    const { theme } = props;

    const api: InternalAPI = { theme };
    provide(injectKey, api);

    return () => renderSlot(ctx.slots, 'default');
  },
});

export function useConfig(): IConfigAPI {
  const { theme } = inject(injectKey) as InternalAPI;

  return {
    theme,
  };
}
