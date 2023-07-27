type PromiseExecutor<T> = (resolve: (value: T | PromiseLike<T>) => void, ...args: Array<any>) => Promise<void>;

export function asyncInitializer<T>(cb: PromiseExecutor<T>): (...args: Array<any>) => Promise<T> {
  let loaded: Promise<T>;

  return async function(...args: Array<any>) {
    if (loaded === undefined) {
      loaded = new Promise<T>((resolve, reject) => {
        (async () => {
          try {
            await cb(resolve, ...args);
          } catch(error) {
            reject(error);
          }
        })();
      });
    }
    return loaded;
  }
}
