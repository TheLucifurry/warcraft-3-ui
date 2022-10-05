<script setup lang="ts">
import { useElementBounding } from '@vueuse/core';
import { computed, PropType, ref } from 'vue';
import { IUseTime, useTime } from '../composables/useTime';
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
const time = props.time ?? useTime()

const heightPx = computed(()=>`${height.value}px`);
const timeIndTex = computed(() => getAssetUrl('hud_time_indicator.png'));
const timeIndTexPosition = computed(() => `${time.getProgress() * 2 * 100}%`);
const timeIndDotsCount = computed(() => Math.trunc(time.getProgress(true) * 8) + 1);
</script>

<template>
  <div class="hud-header">
    <div class="hud-header__under-tex-container">
      <div class="hud-header__time"></div>
      <div class="hud-header__time-dots" :class="{'hud-header--day': time.isDay.value}">
        <div v-for="(i, ix) in timeIndDotsCount" :key="ix" />
      </div>
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

  &__under-tex-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & .hud-header__time {
      height: calc(v-bind(heightPx) * 0.6);
      width: calc(v-bind(heightPx) * 0.6);
      background: v-bind(timeIndTex);
      background-size: cover;
      background-position-x: v-bind(timeIndTexPosition);
      border-radius: 50%;
    }
    & .hud-header__time-dots {
      position: absolute;
      transform: translateY(-3%) scaleY(0.95);

      &.hud-header--day > * {
        background: yellow;
      }
      & > * {
        --dot-size: calc(v-bind(heightPx) * 0.15);

        position: absolute;
        top: calc(50% - (var(--dot-size) / 2));
        left: calc(50% - (var(--dot-size) / 2));
        width: var(--dot-size);
        height: var(--dot-size);
        background: cyan;
        border-radius: 50%;

        @for $i from 0 through 7 {
          &:nth-child(#{$i + 1}) {
            transform: rotate($i * 45deg - 90deg) translate(calc(v-bind(heightPx) * 0.4)) rotate($i * -45deg - 90deg);
          }
        }
      }
    }
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
