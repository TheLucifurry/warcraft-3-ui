<script setup lang="ts">
import { computed, PropType, ref } from 'vue';
import { useConfig } from '../ConfigProvider';

function resolvedPath(path: string) {
  return new URL(path, import.meta.url).href
}

type Size =
  | 's'
  | 'm'

const props = defineProps({
  size: {
    type: String as PropType<Size>,
    default: () => '',
  }
});

const {theme} = useConfig();

const texList = computed(()=>({
  default: `url(${resolvedPath(`../../assets/${theme}/btn_default.png`)})`,
  hoverBg: `url(${resolvedPath(`../../assets/${theme}/btn_hover_bg.png`)})`,
  pressed: `url(${resolvedPath(`../../assets/${theme}/btn_pressed.png`)})`,
  disabled: `url(${resolvedPath(`../../assets/${theme}/btn_disabled.png`)})`,
}))

const isDisabled = ref(false);
</script>

<template>
  <button :class="`btn btn--${props.size}`"  :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<style lang="scss">
$clip-pad: 6px;

.btn {
  position: relative;
  // width: 320px;
  // padding: 16px 64px;
  background: v-bind('texList.default') no-repeat;
  background-size: 100% 100%;
  border: 0;
  color: gold;
  -webkit-mask-image: v-bind('texList.default');
  -webkit-mask-size: 100% 100%;

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

  &:hover::before {
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
  &:active {
    background-image: v-bind('texList.pressed');
  }
  &[disabled] {
    background-image: v-bind('texList.disabled');
  }
}
</style>
