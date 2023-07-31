<script setup lang="ts">
  import { computed, ref } from "vue";
  import { readableColor, transparentize } from "color2k";
  import closeIcon from "@/assets/close-circle-svgrepo-com.svg";
  import { pmValueColors } from "@/Utils";
  import { altAirQualityGuidelines as airQualityGuidelines } from "./AirQualityGuidelines";
  import type { MonitorData } from "@/Monitors";

  const props = defineProps<{ monitor: MonitorData }>();
  const modalOpen = ref<boolean>(false);

  const template = computed(() => {
    const pmValue = parseInt(props.monitor.latest.pm25, 10);
    const level = [...pmValueColors].reverse().find(level => pmValue >= level.min)!;
    const guidelines = airQualityGuidelines[pmValueColors.indexOf(level)];
    const style = {
      backgroundColor: transparentize(level.color, .05),
      color: readableColor(level.color),
      border: `4px solid ${ level.color }`
    };
    return { level, guidelines, style };
  });

  function openModal() {
    modalOpen.value = true;
  }
  function closeModal() {
    modalOpen.value = false;
  }
</script>

<template>
  <div class="air-quality-guidelines">
    <button class="modal-trigger" @click="openModal()">Activity Guidelines</button>
    <div class="modal-container" :class="{ hidden: !modalOpen}" :style="template.style">
      <img :src="closeIcon" alt="close" @click="closeModal()">
      <div class="guidelines">
        <p v-for="(group, index) in template.guidelines" :key="index">
          <b>{{ group.title }}:</b> <span v-for="label in group.labels">{{ label }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .air-quality-guidelines {
    top: 0;
    left: 0;

    .modal-trigger {
      background-color: lightsteelblue;
      border: none;
      cursor: pointer;
    }
    .modal-container {
      position: absolute;
      top: 0;
      left: 0;
      width: var(--width);
      height: var(--height);
      margin: 0 ;
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

      img {
        width: 20px;
        position: absolute;
        top: 8px;
        left: 89%;
        cursor: pointer;
      }

      .guidelines {
        padding: 0 .1rem;
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
