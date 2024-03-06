import type { MonitorData } from "./index.d";

export const getUrl = (endpoint: string): string => {
  const rootURL = (import.meta.env.PROD)
    ? window.location.origin
    : import.meta.env.VITE_DEV_URL;

    return `${ rootURL }/api/1.0/${ endpoint }`;
}

const errmsg = (msg: string) => `Unable to fetch monitor: ${ msg }`;

export async function fetchMonitorById(id?: string): Promise<MonitorData | undefined> {
  if (!id) {
    return Promise.reject(errmsg("No monitor ID provided"));
  }

  const url = getUrl(`monitors/${ id }/`);

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const { data } = await (response.json() as Promise<{ data: MonitorData }>);

      if (data.latest) {

        if ("pm25" in data.latest && parseInt(data.latest.pm25, 10) < 0) {
          data.latest.pm25 = "0";
        }

        if ("pm25_avg_60" in data.latest && parseInt(data.latest.pm25_avg_60, 10) < 0) {
          data.latest.pm25_avg_60 = "0";
        }

        return data;
      }
    } else {
      switch(response.status) {
        case 404:
          return Promise.reject(errmsg(`No monitor found with ID ${ id }`));

        case 500:
          return Promise.reject(errmsg(`${ id } is not a valid monitor ID`));

        default:
          return Promise.reject(errmsg(`Failed to fetch monitor with id ${ id }. Response status: ${ response.status }`))
      }

    }
  } catch (err) {
    return Promise.reject(err);
  }
}
