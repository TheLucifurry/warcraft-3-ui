<script setup lang="ts">
import { useElementBounding } from '@vueuse/core';
import { computed, onMounted, PropType, ref } from 'vue';
import { IUseTime } from '../composables/useTime';
import { getAssetPath, getAssetUrl } from '../utils';
import Button from './base/Button.vue';
import { useConfig } from './ConfigProvider';

const props = defineProps({
  time: {
    type: Object as PropType<IUseTime>,
  }
});

const texEl = ref(null)

const {theme} = useConfig();
const {height} = useElementBounding(texEl);

const heightPx = computed(()=>`${height.value}px`);
const timeIndTex = computed(() => getAssetUrl('hud_time_indicator.png'));
const timeIndTexPosition = computed(() => {
  if (!props.time) return '0%';
  return `${props.time.getProgress() * 2 * 100}%`
})

onMounted(() => {

})
</script>

<template>
  <div class="hud-header">
    <div class="hud-header__under-text-container">
      <div class="hud-header__time"></div>
    </div>
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
        <div class="hud-header__res-item hud-header__res-item-supply-info">
          <span>
            Нет расходов
          </span>
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
  height: v-bind(heightPx);

  & > * {
    position: absolute;
  }

  &__under-text-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__time {
    height: calc(v-bind(heightPx) * 0.6);
    width: calc(v-bind(heightPx) * 0.6);
    background: v-bind(timeIndTex);
    background-size: cover;
    background-position-x: v-bind(timeIndTexPosition);
  }
  &__tex {
    width: 100%;
  }
  &__container {
    width: 100%;
    height: 50%;
    display: flex;
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
    padding: 0.3% 0.3% 0.5% 7.5%;
    box-sizing: border-box;
    justify-content: space-between;

    & img {
      height: 100%;
    }
  }
  &__res-item {
    height: 100%;
    width: 23%;
  }
  &__res-item-supply-info {
    color: #00f000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
