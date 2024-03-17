import config from "src/lib/config";
import DataFetcher from "src/lib/data/data-fetcher";

export interface GameData {
  alerts?: {
    index: number;
    persistant: boolean;
    text: string;
  }[];
  currentAlertIndex: number;
  versionInfo: GameVersionInfo;
}

export interface GameVersionInfo {
  winVersion: string;
  macVersion: string;
  releaseDate: string;
}

export async function fetchGameData(): Promise<GameData> {
  return DataFetcher.fetchJson<GameData>(config.dataEndpoints.game);
}
