<script setup lang="ts">
import { computed, PropType, ref } from 'vue';
import { useConfig } from './ConfigProvider';
import { useElementBounding } from '@vueuse/core'
import { getAssetPath } from '../utils';
import { vVisible } from './directives';

export type IPropInventory = {
  slots?: number
}

const props = defineProps({
  inventory: {
    type: Object as PropType<IPropInventory>,
    default: () => ({}),
  },
});

const texEl = ref(null)

const { height } = useElementBounding(texEl);
const { theme } = useConfig();

const heightPx = computed(()=>`${height.value}px`);
const inv = computed((): Required<IPropInventory> =>{
  return {
    slots: 0,
    ...props.inventory,
  }
})
</script>

<template>
  <div class="hud-footer">
    <img ref="texEl" class="hud-footer__tex" :src="getAssetPath('hud_footer.png', theme)">
    <div class="hud-footer__inv">
      <img
        v-visible="!inv.slots"
        class="hud-footer__inv-mock-tex" :src="getAssetPath('hud_inv_mock.png', theme)"
      >
      <div
        v-if="!!inv.slots"
        class="hud-footer__inv-slots"
      >
        <div
          v-for="(i, ix) in 6"
          :key="ix"
          class="hud-footer__inv-slot"
        >
          <img
            v-show="ix >= inv.slots"
            :src="getAssetPath('hud_inv_mock_slot.png', theme)"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hud-footer {
  display: flex;
  position: relative;
  background: linear-gradient(#0000 25%, black 25%);
  width: 100%;
  height: v-bind(heightPx);

  & > * {
    position: absolute;
  }

  &__tex {
    width: 100%;
  }
  &__inv {
    position: relative;
    height: 100%;
    left: 59%;
  }
  &__inv-mock-tex {
    height: 100%;
  }
  &__inv-slots {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    left: 32%;
    bottom: 0.5%;
    width: 59%;
  }
  &__inv-slot {
    & > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
