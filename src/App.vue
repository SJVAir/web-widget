<script setup lang="ts">
import { ViewController } from "./views/view-controller";

const viewCtl = new ViewController();

</script>

<template>
  <Suspense>
    <component :is="viewCtl.currentView.value"></component>
    <template #fallback>
      <div></div>
    </template>
  </Suspense>
</template>
