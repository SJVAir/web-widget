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
    const viewCtl = new ViewController();
    if (!this.monitorId) {
      return viewCtl.gotoError("No Monitor ID was Provided");
    }


    // FIXME: this should call catch on error, but it currently does not
    await getMonitor(this.monitorId)
      .then(monitor => {
        if (!monitor) {
          viewCtl.gotoError(`Unable to load monitor with ID: ${this.monitorId}`);
        }
        this.monitor = monitor;
      })
      .catch(_ => {
        viewCtl.gotoError(`Unable to load monitor with ID: ${this.monitorId}`);
      });
  }
}

