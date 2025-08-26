import { ShallowRef, shallowRef } from "vue";
import MyAirVue from "@/views/MyAir.vue";
import ErrorVue from "@/views/Error.vue";
import { Singleton } from "@tstk/decorators";

type Views = typeof MyAirVue | typeof ErrorVue;

@Singleton
export class ViewController {
  currentView: ShallowRef<Views> = shallowRef<Views>(MyAirVue);

  gotoMyAir(): void {
    this.currentView.value = MyAirVue;
  }

  gotoError(): void {
    this.currentView.value = ErrorVue;
  }
}
