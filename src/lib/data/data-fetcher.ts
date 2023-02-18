import config from "src/lib/config";

namespace DataFetcher {
  const _fetchCache = new Map<string, unknown>();

  /**
   * Fetches and caches the JSON data at the given endpoint.
   * 
   * @param endpoint Endpoint from which to fetch data
   * @param processor Function to run on data the first time it is fetched
   * @returns Object containing data from JSON at endpoint
   */
  export async function fetchJson<T>(
    endpoint: string,
    processor?: (data: T) => void
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      if (_fetchCache.has(endpoint))
        return resolve(_fetchCache.get(endpoint) as T);

      fetch(config.dataBaseUrl + config.dataFolders.jsons + endpoint)
        .then(response => response.json())
        .then(json => {
          processor?.(json);
          _fetchCache.set(endpoint, json);
          resolve(json);
        })
        .catch(reject);
    });
  }

  /**
   * Uncaches the data for the given endpoint.
   * 
   * @param endpoint Endpoint of data to uncache
   */
  export function uncache(endpoint: string) {
    _fetchCache.delete(endpoint);
  }
}

export default DataFetcher;
