import config from "src/lib/config";
import DataFetcher from "src/lib/data/data-fetcher";

export interface PatreonData {
  billingDisclaimers: string[];
  earlyAccess?: boolean;
  tiers: PatreonTier[];
}

export interface PatreonTier {
  benefits: string[];
  name: string;
  price: string;
}

export async function fetchPatreonData(): Promise<PatreonData> {
  return DataFetcher.fetchJson<PatreonData>(config.dataEndpoints.patreon);
}
