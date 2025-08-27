<script lang="ts">
  import { ViewController } from "./views/view-controller.svelte";
  import { WidgetController } from "./widget-service.svelte";

  const widgetCtl = new WidgetController();

  const viewCtl = new ViewController();
</script>

<main>
  {#await widgetCtl.updateMonitor()}
    <div class="loader-container">
      <div class="loader"></div>
    </div>
  {:then}
    <viewCtl.currentView />
  {:catch error}
    <p>Error: {error.message}</p>
  {/await}
</main>

<style>
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--width);
    height: var(--height);

    .loader {
      --loader-width: 12px;
      --size: calc(var(--width) / 2);
      border: var(--loader-width) solid #f3f3f3;
      border-top: var(--loader-width) solid var(--light-blue);
      border-radius: 50%;
      width: var(--size);
      height: var(--size);
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
