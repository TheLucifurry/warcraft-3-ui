<script setup lang="ts">
import HudHeader from './HudHeader.vue';
import HudFooter from './HudFooter.vue';
import Cursor from './base/Cursor.vue';
import { useTime } from '../composables/useTime';

const time = useTime();

// TODO: Change this Dev-only feature
setInterval(()=>{
  time.add(1);
}, 1000/6)
</script>

<template>
  <div class="hud">
    <Cursor/>
    <HudHeader :time="time"/>
    <HudFooter/>
  </div>
</template>

<style lang="scss">
.hud {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
</style>
