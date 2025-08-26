import { shallowRef, type ShallowRef } from "vue";
import type { MonitorDetails } from "@sjvair/sdk";
import { Singleton } from "@tstk/decorators";
import { Interval } from "@tstk/utils";
import { getMonitor } from "./Monitors";
import { ViewController } from "./views/view-controller";

@Singleton
export class WidgetController {
  readonly monitor: ShallowRef<MonitorDetails | undefined> = shallowRef();
  readonly refreshInterval: Interval = new Interval(() => this.updateMonitor(), 1000 * 60 * 2);

  private monitorId?: string = window.location.pathname.split("/").pop();

  async updateMonitor() {
    const viewCtl = new ViewController();
    if (!this.monitorId) {
      return viewCtl.gotoError();
    }

    await getMonitor(this.monitorId)
      .then(monitor => {
        this.monitor.value = monitor;
      })
      .catch(_ => {
        viewCtl.gotoError();
      });
  }
}

