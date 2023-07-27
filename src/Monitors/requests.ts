import type { MonitorData } from "./index.d";

export const getUrl = (endpoint: string): string => {
  const rootURL = (import.meta.env.PROD)
    ? import.meta.env.VITE_PROD_URL
    : import.meta.env.VITE_DEV_URL;

    return `${ rootURL }/api/1.0/${ endpoint }`;
}

const errmsg = (msg: string) => `Unable to fetch monitor: ${ msg }`;

export async function fetchMonitorById(id?: string): Promise<MonitorData> {
  if (!id) {
    return Promise.reject(errmsg("No monitor ID provided"));
  }

  const url = getUrl(`monitors/${ id }/`);

  try {
    const response = await fetch(url);

    switch(response.status) {
      case 404:
        return Promise.reject(errmsg(`No monitor found with ID ${ id }`));

      case 500:
        return Promise.reject(errmsg(`${ id } is not a valid monitor ID`));

      default:
        const { data } = await (response.json() as Promise<{ data: MonitorData }>);
        return data;
    }


  } catch (err) {
    return Promise.reject(err);
  }
}
