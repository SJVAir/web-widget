import { getMonitorDetails, setOrigin, type MonitorDetails } from "@sjvair/sdk";

const origin = (import.meta.env.PROD)
  ? window.location.origin
  : import.meta.env.VITE_DEV_URL;

setOrigin(origin);

export async function getMonitor(monitorId: string): Promise<MonitorDetails> {
  return await getMonitorDetails(monitorId);
}
