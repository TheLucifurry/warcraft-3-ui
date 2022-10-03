<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useConfig } from './ConfigProvider';
import { useElementBounding } from '@vueuse/core'

function resolvedPath(path: string) {
  return new URL(path, import.meta.url).href
}

const props = defineProps({
  inventory: {
    type: Boolean,
    default: ()=>true
  }
});

const texEl = ref(null)

const { height } = useElementBounding(texEl);
const {theme} = useConfig();
const isInventoryAvailable = computed(()=>props.inventory);

const heightPx = computed(()=>`${height.value}px`);
onMounted(() => {

})
</script>

<template>
  <div class="hud-footer">
    <img ref="texEl" class="hud-footer__tex" :src="resolvedPath(`../assets/${theme}/hud_footer.png`)">
    <div class="hud-footer__inventory" :class="{'hud-footer--disabled': !isInventoryAvailable}">
      <img class="hud-footer__inventory-mock-tex" :src="resolvedPath(`../assets/${theme}/hud_inventory_mock.png`)">
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
  &__inventory {
    height: 100%;
    left: 59%;

    &:not(.hud-footer--disabled) .hud-footer__inventory-mock-tex {
      display: none;
    }

  }
  &__inventory-mock-tex {
      height: 100%;
  }
}
</style>
