import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import MyAirVue from "@/views/MyAir.vue";
import ErrorVue from "@/views/Error.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/error",
  },
  {
    path: "/:monitorId",
    name: "MyAir",
    component: MyAirVue,
    props: true,
  },
  {
    path: "/error",
    name: "ErrorVue",
    component: ErrorVue,
  },
  {
    path: "/*",
    redirect: "/error",
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
