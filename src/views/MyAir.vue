<script setup lang="ts">
import { onBeforeUnmount } from "vue";
import PMGaugeVue from "@/components/PMGauge.vue";
import { WidgetController } from "@/WidgetService";

const widgetCtl = new WidgetController();

widgetCtl.updateMonitor();
widgetCtl.refreshInterval.start();

onBeforeUnmount(() => widgetCtl.refreshInterval.stop());
</script>

<template>
  <div v-if="widgetCtl.monitor.value" class="page-content">

    <div class="pmgauge-component">
      <PMGaugeVue :monitor="widgetCtl.monitor.value" />
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
