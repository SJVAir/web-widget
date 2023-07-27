<script setup lang="ts">
  import { onBeforeUnmount } from "vue";
  import PMGaugeVue from "@/components/PMGauge.vue";
  import { useWidgetService } from "@/WidgetService";

  const { monitorId } = defineProps<{ monitorId: string }>();
  const { monitor, stopAutoRefresh } = await useWidgetService(monitorId);

  onBeforeUnmount(stopAutoRefresh);
</script>

<template>
  <div v-if="monitor" class="page-content">

    <div class="pmgauge-component">
      <PMGaugeVue :monitor="monitor"/>
    </div>

  </div>
</template>

<style scoped lang="scss">
  .page-content {
    user-select: none;

    .pmgauge-component {
      
      strong {
        font-size: 20px;
        line-height: 26px;
      }
    }

    .forecast-component,
    .guidelines-component {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
