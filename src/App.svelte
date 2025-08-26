<script lang="ts">
  import { ViewController } from "./views/view-controller.svelte";
  import { WidgetController } from "./widget-service.svelte";

  const widgetCtl = new WidgetController();

  const viewCtl = new ViewController();
</script>

<main>
  <viewCtl.currentView />
  {#await widgetCtl.updateMonitor()}
    <p>Loading...</p>
  {:then value}
    <p>Data: {value}</p>
  {:catch error}
    <p>Error: {error.message}</p>
  {/await}
</main>

<style>
</style>
