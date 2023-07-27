<script setup lang="ts">
  import { useWidgetService } from "@/WidgetService";

  const { error } = await useWidgetService();
</script>

<template>
  <h1>{{ error }}</h1>
</template>

<style scoped lang="scss">
</style>
