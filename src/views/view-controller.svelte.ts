import { Singleton } from "@tstk/decorators";
import MyAirVue from "./MyAir.svelte";
import ErrorVue from "./Error.svelte";
import { appErrors } from "../error-service.svelte";

type Views = typeof MyAirVue | typeof ErrorVue;

@Singleton
export class ViewController {
  currentView: Views = $state(MyAirVue);

  gotoMyAir(): void {
    this.currentView = MyAirVue;
  }

  gotoError(error: string): void {
    appErrors.push(error);
    this.currentView = ErrorVue;
  }
}
