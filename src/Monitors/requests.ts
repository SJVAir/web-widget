import { getMonitorDetails, type MonitorDetails } from "@sjvair/sdk";
import { setOrigin } from "@sjvair/sdk/http";

const origin = (import.meta.env.PROD)
  ? window.location.origin
  : import.meta.env.VITE_DEV_URL;

setOrigin(origin);

export async function getMonitor(monitorId: string): Promise<MonitorDetails> {
  return await getMonitorDetails(monitorId);
}
