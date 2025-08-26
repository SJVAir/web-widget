<script lang="ts">
  import { readableColor, transparentize } from "color2k";
  import { pmValueColors } from "../../colors";
  import { altAirQualityGuidelines as airQualityGuidelines } from "./guidelines";
  import type { MonitorDetails } from "@sjvair/sdk";

  const { monitor }: { monitor: MonitorDetails } = $props();
  let modalOpen = $state(false);

  const template = $derived.by(() => {
    const pmValue = parseInt(monitor.latest.pm25!.value, 10);
    const level = [...pmValueColors]
      .reverse()
      .find((level) => pmValue >= level.min)!;
    const guidelines = airQualityGuidelines[pmValueColors.indexOf(level)];
    const style = `
    backgroundColor: ${transparentize(level.color, 0.05)},
    color: ${readableColor(level.color)},
    border: 4px solid ${level.color}
  `;

    return { level, guidelines, style };
  });

  function openModal() {
    modalOpen = true;
  }
  function closeModal() {
    modalOpen = false;
  }
</script>

<template>
  <div class="air-quality-guidelines">
    <button class="modal-trigger" onclick={openModal}
      >Activity Guidelines</button
    >
    <div
      class="modal-container {modalOpen ? 'hidden' : ''}"
      style={template.style}
    >
      <span
        class="close-btn material-symbols-outlined"
        role="button"
        onclick={closeModal}
      >
        cancel
      </span>
      <div class="guidelines">
        {#each template.guidelines as group, index (index)}
          <p>
            <b>{group.title}:</b>
            {#each group.labels as label}
              <span>{label}</span>
            {/each}
          </p>
        {/each}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use "sass:color";

  .air-quality-guidelines {
    top: 0;
    left: 0;

    .modal-trigger {
      background-color: var(--light-blue);
      color: white;
      text-shadow: 1px 2px 4px black;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 4px;

      &:hover {
        background-color: color.adjust(#1fb9ef, $lightness: -5%);
      }
    }

    .modal-container {
      position: absolute;
      top: 0;
      left: 0;
      width: var(--width);
      height: var(--height);
      margin: 0;
      border-radius: var(--border-radius);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      overflow: auto;
      transition: 300ms;
      -webkit-backdrop-filter: blur(9.9px);
      backdrop-filter: blur(9.9px);

      &.hidden {
        opacity: 0;
        top: 350px;
      }

      .close-btn {
        text-align: center;
        position: absolute;
        top: 4px;
        left: 87%;
        cursor: pointer;

        .material-symbols-outlined {
          font-variation-settings:
            "FILL" 0,
            "wght" 200,
            "GRAD" 0,
            "opsz" 48;
        }
      }

      .guidelines {
        padding: 0 0.1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 2rem;
      }
    }
  }
</style>
