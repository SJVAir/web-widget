<script lang="ts">
  import { onDestroy } from "svelte";
  import PMGauge from "../lib/PMGauge.svelte";
  import { WidgetController } from "../widget-service.svelte";

  const widgetCtl = new WidgetController();

  widgetCtl.refreshInterval.start();

  onDestroy(() => widgetCtl.refreshInterval.stop());
</script>

{#if widgetCtl.monitor}
  <div class="page-content">
    <div class="pmgauge-component">
      <PMGauge monitor={widgetCtl.monitor} />
    </div>
  </div>
{/if}

<style lang="scss">
  .page-content {
    user-select: none;
  }
</style>
