<script setup lang="ts">
import { useElementBounding } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { getAssetPath } from '../utils';
import Button from './base/Button.vue';
import { useConfig } from './ConfigProvider';

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
    <img ref="texEl" class="hud-header__tex" :src="getAssetPath('hud_header.png', theme)">
    <div class="hud-header__container">
      <div class="hud-header__actions">
        <Button class="hud-header__btn-action">Задания</Button>
        <Button class="hud-header__btn-action">Меню</Button>
        <Button class="hud-header__btn-action" disabled>Союзники</Button>
        <Button class="hud-header__btn-action">Журнал</Button>
      </div>
      <div class="hud-header__res">
        <div class="hud-header__res-item">
          <img :src="getAssetPath('resource_icons/gold.png')">
        </div>
        <div class="hud-header__res-item">
          <img :src="getAssetPath('resource_icons/lumber.png')">
        </div>
        <div class="hud-header__res-item">
          <img :src="getAssetPath('resource_icons/supply.png')">
        </div>
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
    display: flex;
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
  &__res{
    width: 50%;
    display: flex;
    padding: 0.3% 0 0.5% 7.6%;
    box-sizing: border-box;

    & img {
      height: 100%;
    }
  }
  &__res-item {
    height: 100%;
    width: 25.6%;
  }
}
</style>
