<script lang="ts">
  import { onDestroy } from "svelte";
  import PMGauge from "../lib/PMGauge.svelte";
  import { WidgetController } from "../widget-service.svelte";

  const widgetCtl = new WidgetController();

  widgetCtl.refreshInterval.start();

  onDestroy(() => widgetCtl.refreshInterval.stop());
</script>

<template>
  <p>MYAir</p>
  {#if widgetCtl.monitor}
    <div class="page-content">
      <div class="pmgauge-component">
        <PMGauge monitor={widgetCtl.monitor} />
      </div>
    </div>
  {/if}
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
