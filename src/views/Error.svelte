<script lang="ts">
  import { appErrors } from "../error-service.svelte";
</script>

<div class="errors">
  <h1>Error:</h1>
  <ul>
    {#each appErrors as error, idx (idx)}
      <li>{error}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .errors {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 1.2rem;
      line-height: 1;
    }

    ul {
      list-style: none;
      text-align: left;
    }
  }
</style>
