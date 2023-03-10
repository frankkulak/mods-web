import config from "src/lib/config";
import DataFetcher from "src/lib/data/data-fetcher";

export interface GameData {
  alerts: {
    index: number;
    persistant: boolean;
    text: string;
  }[];
  currentAlertIndex: number;
  date: string;
  version: string;
}

export async function fetchGameData(): Promise<GameData> {
  return DataFetcher.fetchJson<GameData>(config.dataEndpoints.game);
}
