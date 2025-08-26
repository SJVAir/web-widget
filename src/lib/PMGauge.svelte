<script lang="ts">
  import { onMount } from "svelte";
  import { Gauge } from "gaugeJS";
  import type { GaugeOptions } from "gaugeJS";
  import type { MonitorDetails } from "@sjvair/sdk";
  import sjvairLogo from "../assets/sjvair.svg";
  import AirQualityGuidelines from "./air-quality-guidelines/AirQualityGuidelines.svelte";
  import { Colors } from "../colors";

  const { monitor }: { monitor: MonitorDetails } = $props();

  const monitorLink = `https://www.sjvair.com/monitor/${monitor.id}`;

  let gauge: any;
  let canvasTarget: HTMLCanvasElement;

  const name = $derived(monitor.name || "");
  const pmValue = $derived.by(() => {
    if (monitor) {
      const raw = parseInt(monitor.latest.pm25!.value, 10);
      const percent = convert(raw);

      return {
        percent,
        raw,
      };
    } else {
      return {
        percent: 0,
        raw: 0,
      };
    }
  });

  const pmLevels = [
    {
      min: 0.0,
      max: 12.09,
    },
    {
      min: 12.1,
      max: 35.49,
    },
    {
      min: 35.5,
      max: 55.49,
    },
    {
      min: 55.5,
      max: 150.49,
    },
    {
      min: 150.5,
      max: 250.49,
    },
    {
      min: 250.5,
      max: Infinity,
    },
  ];

  const opts: Partial<GaugeOptions> = {
    highDpiSupport: true,
    generateGradient: true,
    radiusScale: 1,
    limitMax: true,
    limitMin: true,
    angle: -0.239, /// The span of the gauge arc
    lineWidth: 0.1, // The line thickness
    strokeColor: "rgba(130, 130, 130, .5)",
    pointer: {
      length: 0.4, // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: "#000",
    },
    staticZones: [
      { min: 0, max: 16.66, strokeStyle: Colors.green },
      { min: 16.67, max: 33.33, strokeStyle: Colors.yellow },
      { min: 33.34, max: 50, strokeStyle: Colors.orange },
      { min: 50.01, max: 66.66, strokeStyle: Colors.red },
      { min: 66.67, max: 83.33, strokeStyle: Colors.purple },
      { min: 83.34, max: 100, strokeStyle: Colors.maroon },
    ],
  };

  function convert(pmValue: number) {
    const lvl = pmLevels.find(
      (lvl) => pmValue >= lvl.min && pmValue <= lvl.max,
    )!;
    const max = lvl.max > 300 ? 300 : lvl.max;
    const percentOfLevel = (pmValue - lvl.min) / (max - lvl.min);
    const modifier = (100 / pmLevels.length) * pmLevels.indexOf(lvl);

    return modifier + percentOfLevel * (100 / pmLevels.length);
  }

  $effect(() => {
    if (monitor && gauge && canvasTarget) {
      window.requestAnimationFrame(() => gauge.set(pmValue.percent));
    }
  });

  onMount(async () => {
    window.requestAnimationFrame(() => {
      gauge = new Gauge(canvasTarget).setOptions(opts as GaugeOptions); // create sexy gauge!
      gauge.maxValue = 100; // set max gauge value
      gauge.setMinValue(0); // set min value
      gauge.set(pmValue.percent);
    });
  });
</script>

<template>
  <div class="backdrop">
    <h1 class="monitor-name">
      {{ name }}
    </h1>
    <div class="pmgauge-container">
      <canvas
        class="pmgauge"
        bind:this={canvasTarget}
        width="100%"
        height="100%"
      ></canvas>
      <div class="pmvalue-box">
        <p class="pm-value">
          <span>{pmValue.raw}<span>μg/m<sup>3</sup></span></span>
          <span>PM 2.5</span>
        </p>
      </div>
    </div>
    <div class="guidelines-container">
      <AirQualityGuidelines {monitor} />
    </div>
    <div class="powered-by">
      Powered by
      <a href={monitorLink} target="_blank">
        <img src={sjvairLogo} alt="SJVAir.com" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .backdrop {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: var(--width);
    margin: 0 auto;
    position: relative;
    -webkit-backdrop-filter: blur(9.9px);
    backdrop-filter: blur(9.9px);
    background: rgba(255, 255, 255, 0.09);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    overflow: hidden;

    * {
      flex-shrink: 0;
      flex-grow: 0;
    }

    .monitor-name {
      padding: 0.5rem 0.5rem 0 0.5rem;
      font-size: 1rem;
      color: #fff;
      text-shadow: 1px 2px 4px #333;
    }

    .pmgauge-container {
      --size: calc(var(--width) / 1.15);

      width: var(--size);
      height: var(--size);
      position: relative;

      .pmgauge {
        height: var(--size);
        width: var(--size);
      }

      .pmvalue-box {
        --top: calc(var(--height) / 2.58);
        --left: calc(var(--width) / 4.7);
        --area-modifier: -2px;
        --radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(28, 68, 130);
        border-radius: 95% 0 var(--radius) 0;
        width: calc(var(--size) / 2 + 2px);
        height: calc(var(--size) / 2 + 2px);
        transform-origin: center;
        position: absolute;
        left: var(--left);
        top: var(--top);
        transform: rotate(45deg);

        .pm-value {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-bottom: 0.2rem;
          color: #fff;
          position: absolute;
          transform-origin: center;
          transform: rotate(-45deg);

          span {
            display: block;
            line-height: 1.2;

            &:first-of-type {
              font-size: 1.5rem;
              text-align: center;

              span {
                font-size: 0.7rem;
                display: inline;
              }
            }

            &:last-of-type {
              font-size: 0.8rem;
            }
          }
        }
      }
    }

    .guidelines-container {
      margin: 1.5rem 0 0.5rem 0;
    }

    .powered-by {
      --font-size: 0.7rem;
      font-size: var(--font-size);
      margin-bottom: 0.5rem;

      img {
        vertical-align: middle;
        height: var(--font-size);
      }
    }
  }
</style>
