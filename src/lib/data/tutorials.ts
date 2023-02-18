import config from "src/lib/config";
import DataFetcher from "src/lib/data/data-fetcher";

export interface TutorialsData {
  categories: TutorialCategory[];
}

export interface TutorialCategory {
  title: string;
  text: string;
  tutorials: TutorialInfo[];
}

export interface TutorialInfo {
  title: string;
  text: string;
  platform: string;
  href: string;
}

export async function fetchTutorialsData(): Promise<TutorialsData> {
  return DataFetcher.fetchJson<TutorialsData>(config.dataEndpoints.tutorials);
}
