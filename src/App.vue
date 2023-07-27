<script setup lang="ts">
  import { RouterView } from "vue-router";
</script>

<template>
  <Suspense>
    <router-view></router-view>
    <template #fallback>
      <div></div>
    </template>
  </Suspense>
</template>

