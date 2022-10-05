<script setup lang="ts">
import { computed, PropType } from 'vue';
import { getAssetUrl } from '../../utils';
import { useConfig } from '../ConfigProvider';

type Size =
  | 'd'
  | 's'
  | 'm'

const props = defineProps({
  size: {
    type: String as PropType<Size>,
    default: () => 'd',
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
  captionColor: {
    type: String,
    default: () => '#f8f8f7',
  }
});

const {theme} = useConfig();

const texList = computed(()=>({
  default: getAssetUrl('btn_default.png', theme),
  hoverBg: getAssetUrl('btn_hover_bg.png', theme),
  pressed: getAssetUrl('btn_pressed.png', theme),
  disabled: getAssetUrl('btn_disabled.png', theme),
}))
</script>

<template>
  <label>
    <input type="button" hidden :disabled="props.disabled">
    <div :class="`btn btn--${props.size}`">
      <span class="btn__capt">
        <slot></slot>
      </span>
    </div>
  </label>
</template>

<style lang="scss">
.btn {
  width: 100%;
  height: 100%;
  position: relative;
  background: v-bind('texList.default') no-repeat;
  background-size: 100% 100%;
  color: v-bind('props.captionColor');
  user-select: none;
  -webkit-mask-image: v-bind('texList.default');
  -webkit-mask-size: 100% 100%;

  &__capt {
    width: 100%;
    position: absolute;
    text-align: center;
    bottom: 0px;
  }

  // Sizes
  &--d {
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 180%;
  }
  &--s {
    height: 32px;
    line-height: 32px;
    min-width: 100px;
  }
  &--m {
    height: 48px;
    line-height: 48px;
    min-width: 200px;
  }

  *:not([disabled]) + &:hover::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: v-bind('texList.hoverBg') no-repeat;
    background-size: 100% 100%;
    left: 0;
    top: 0;
    mix-blend-mode: screen;
  }
  *:not([disabled]) + &:active {
    background-image: v-bind('texList.pressed');

    & .btn__capt {
      left: 3px;
      bottom: -2px;
    }
  }
  [disabled] + & {
    background-image: v-bind('texList.disabled');
    pointer-events: all !important;
    color: #646464;
  }
}
</style>
