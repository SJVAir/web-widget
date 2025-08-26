import type { MonitorDetails } from "@sjvair/sdk";
import { Singleton } from "@tstk/decorators";
import { Interval } from "@tstk/utils";
import { getMonitor } from "./Monitors";
import { ViewController } from "./views/view-controller.svelte";

@Singleton
export class WidgetController {
  monitor: MonitorDetails | undefined = $state();
  readonly refreshInterval: Interval = new Interval(() => this.updateMonitor(), 1000 * 60 * 2);

  private monitorId?: string = window.location.pathname.split("/").pop();

  async updateMonitor() {
    console.log("updating")
    const viewCtl = new ViewController();
    if (!this.monitorId) {
      console.log("no monitor id", window.location.pathname.split("/"))
      return viewCtl.gotoError();
    }


    await getMonitor(this.monitorId)
      .then(monitor => {
        this.monitor = monitor;
        console.log("monitor:", $state.snapshot(this.monitor))
      })
      .catch(_ => {
        console.log("fetch request error", _)
        viewCtl.gotoError();
      });
  }
}

