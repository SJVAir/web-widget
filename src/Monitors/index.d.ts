export type MonitorsRecord = Record<MonitorId, Monitor>;
export type MonitorDevice = "AirNow" | "BAM1022" | "PurpleAir";
export type MonitorDataFieldName = "pm10" | "pm25" | "pm25_avg_15" | "pm25_avg_60" | "pm100";

export interface MonitorData {
  id: string;
  name: string;
  device: MonitorDevice;
  is_active: boolean;
  is_sjvair: boolean;
  position: MonitorPosition;
  last_active_limit: number;
  location: string;
  latest: MonitorSensorData;
  county: string;
  purple_id: number | null;
  distance?: string;
}

export interface MonitorEntry {
  timestamp: string;
  sensor: string;
  [field: string]: string;
}

export interface MonitorPosition {
  type: string;
  coordinates: [number, number];
}

export interface MonitorSensorData {
  fahrenheit: string;
  id: string;
  celcius: string;
  humidity: string;
  pm10: string;
  pm25: string;
  pm100: string;
  pm25_avg_15: string;
  pm25_avg_60: string;
  pm10_standard: string;
  pm25_standard: string;
  pm100_standard: string;
  particles_03um: string;
  particles_05um: string;
  particles_10um: string;
  particles_25um: string;
  particles_50um: string;
  particles_100um: string;
  pressure: string | null;
  sensor: string;
  timestamp: string;
}

export interface MonitorsService {
  closestMonitor: Ref<MonitorData>;
  getClosestMonitor(location: UserLocation): Promise<MonitorData | void>;
  updateClosestMonitor(location?: UserLocation): Promise<void>;
}

export interface MonitorSubscription {
  level: "unhealthy_sensitive" | "unhealthy" | "very_unhealthy" | "hazardous";
  monitor: IMonitorSensorData["id"];
}
