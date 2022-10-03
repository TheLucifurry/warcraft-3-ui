<script setup lang="ts">
import HudHeader from './HudHeader.vue';
import HudFooter from './HudFooter.vue';
import Cursor from './base/Cursor.vue';

</script>

<template>
  <div class="hud">
    <Cursor/>
    <HudHeader/>
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
