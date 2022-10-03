<script setup lang="ts">
import { useElementBounding } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import Button from './base/Button.vue';
import { useConfig } from './ConfigProvider';

function resolvedPath(path: string) {
  return new URL(path, import.meta.url).href
}

// const props = defineProps({
// });

const texEl = ref(null)

const {theme} = useConfig();
const { height } = useElementBounding(texEl);


const heightPx = computed(()=>`${height.value}px`);

onMounted(() => {

})
</script>

<template>
  <div class="hud-header">
    <img ref="texEl" class="hud-header__tex" :src="resolvedPath(`../assets/${theme}/hud_header.png`)">
    <div class="hud-header__container">
      <div class="hud-header__actions">
        <Button class="hud-header__btn-action">Задания</Button>
        <Button class="hud-header__btn-action">Меню</Button>
        <Button class="hud-header__btn-action">Союзники</Button>
        <Button class="hud-header__btn-action">Журнал</Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hud-header {
  display: flex;
  position: relative;
  width: 100%;

  & > * {
    position: absolute;
  }

  &__container {
    width: 100%;
    height: calc(v-bind(heightPx) * 0.5);
  }
  &__tex {
    width: 100%;
  }
  &__actions {
    width: 50%;
    height: 100%;
    display: flex;
    padding: 0.3% 7.5% 0.5% 0.5%;
    box-sizing: border-box;
  }
  &__btn-action {
    width: 24%;
    height: 100%;
    & + & {
      margin-left: 1.2%;
    }
  }
}
</style>
