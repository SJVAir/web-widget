import { Singleton } from "@tstk/decorators";
import MyAirVue from "./MyAir.svelte";
import ErrorVue from "./Error.svelte";

type Views = typeof MyAirVue | typeof ErrorVue;

@Singleton
export class ViewController {
  currentView: Views = $state(MyAirVue);

  gotoMyAir(): void {
    this.currentView = MyAirVue;
  }

  gotoError(): void {
    this.currentView = ErrorVue;
  }
}
