<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, onUnmounted, PropType, ref } from 'vue';
import { useConfig } from '../ConfigProvider';
import { RACE_KEY } from '../../consts';

RACE_KEY
type CursorState =
  | 'default'
  | 'default-active'
  | 'pointer'
  | 'pointer-active'
  | 'pointer-denied'
  | 'hold'
  | 'arrow-top'
  | 'arrow-right'
  | 'arrow-bottom'
  | 'arrow-left'

const props = defineProps({
  state: {
    type: String as PropType<CursorState>,
    default: () => 'default',
  },
  // color: { // TODO: Finish this feature (its hard to mix color and sprites with alpha via css)
  //   type: String,
  //   default: () => '#0000',
  // }
});

const {theme} = useConfig();
const cursorEl = ref<HTMLElement | null>(null);
const cursorPlaceEl = ref<HTMLElement | null>(null);
const spriteUrl = computed(() => `url(${resolvedPath(`../../assets/${theme || RACE_KEY.HUMAN}/cursor.png`)}`);

function resolvedPath(path: string) {
  return new URL(path, import.meta.url).href
}

function moveCursor(e: MouseEvent) {
  if(!cursorEl.value) return;
  cursorEl.value.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
}


onMounted(() => {
  cursorPlaceEl.value = getCurrentInstance()?.proxy?.$el.parentElement;
  if(!cursorPlaceEl?.value) {
    throw new Error('[warcraft-3-ui]: Cursor - element from "to" prop not found or something went wrong')
  }

  cursorPlaceEl.value.addEventListener('mousemove', moveCursor);
  cursorPlaceEl.value.style.cursor = 'none'
})

onUnmounted(()=>{
  if(cursorPlaceEl.value){
    cursorPlaceEl.value.removeEventListener('mousemove', moveCursor);
  }
})
</script>

<template>
  <div ref="cursorEl" class="cursor__container">
    <div :class="`cursor cursor--${props.state}`" />
  </div>
</template>

<style lang="scss">
$tile-size: 32px;

.cursor {
  position: relative;
  width: $tile-size;
  height: $tile-size;
  background: v-bind(spriteUrl) no-repeat;
  // mix-blend-mode: color;
  // border: 1px solid orange;

  &__container {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    pointer-events: none;
    // background-color: v-bind('props.color');
  }

  &--default-active {
    animation: cursor-active 500ms steps(8) infinite;
  }
  &--pointer {
    background-position: (-$tile-size * 1) (-$tile-size * 3);
  }
  &--pointer-active {
    animation: cursor-pointer 500ms steps(8) infinite;
  }
  &--pointer-denied {
    background-position: (-$tile-size * 2) (-$tile-size * 3);
  }
  &--hold {
    background-position: (-$tile-size * 4) (-$tile-size * 3);
  }
  &--arrow-top {
    animation: cursor-arrow 100ms steps(3) infinite;
    transform: rotate(-90deg)
  }
  &--arrow-right {
    animation: cursor-arrow 100ms steps(3) infinite;
  }
  &--arrow-bottom {
    animation: cursor-arrow 100ms steps(3) infinite;
    transform: rotate(90deg)
  }
  &--arrow-left {
    animation: cursor-arrow 100ms steps(3) infinite;
    transform: rotate(-180deg)
  }
}

@keyframes cursor-active {
   from { background-position: 0 0; }
   to { background-position: (-$tile-size * 8) 0; }
}
@keyframes cursor-pointer {
   from { background-position: 0 (-$tile-size * 2); }
   to { background-position: (-$tile-size * 8) (-$tile-size * 2); }
}
@keyframes cursor-arrow {
   from { background-position: (-$tile-size * 5) (-$tile-size * 3); }
   to { background-position: (-$tile-size * 8) (-$tile-size * 3); }
}
</style>
