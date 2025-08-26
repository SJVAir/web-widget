import { ref } from "vue";
import { useRouter } from "vue-router";
import { type MonitorDetails } from "@sjvair/sdk";
import { asyncInitializer } from "@/Utils"
import type { Ref } from "vue";
import { getMonitor } from "./Monitors";

interface WidgetService {
  monitorId: Ref<string | undefined>;
  monitor: Ref<MonitorDetails | undefined>;
  error: Ref<string | undefined>;

  stopAutoRefresh(): void;
}

const monitorId = ref<string>();
const monitor = ref<MonitorDetails | undefined>();
const error = ref<string>();

export const useWidgetService = asyncInitializer<WidgetService>(async (resolve, id: string) => {
  monitorId.value = id;

  await updateMonitor(id);

  const interval = setInterval(async () => await updateMonitor(id), (1000 * 60 * 2));

  resolve({
    monitorId,
    monitor,
    error,
    stopAutoRefresh: () => clearInterval(interval)
  });
});

async function updateMonitor(id: string) {
  const router = useRouter();

  monitor.value = await getMonitor(id)
    .then(_monitor => {
      monitor.value = _monitor;
    })
    .catch(err => {
      error.value = err;
      router.push({ name: "ErrorVue" });
    });
}
