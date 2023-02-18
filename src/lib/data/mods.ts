import config from "src/lib/config";
import DataFetcher from "src/lib/data/data-fetcher";
import type { LocaleCode } from "src/lib/languages";

//#region Types

export type ModId = string;
export type ModStatus = "broken" | "unreleased" | "untested" | "warnings" | "working";
export type ModStage = "alpha" | "beta" | "public" | "wip";
export type PackType = "ep" | "gp" | "sp" | "kit";

export interface ModIndex {
  allMods: ModId[];
  categories: ModIndexCategory[];
  displayData: { [key: string]: ModIndexDisplayData; };
}

export interface ModIndexCategory {
  modIds: ModId[];
  title: string;
}

export interface ModIndexDisplayData {
  description: string;
  featured?: boolean;
  lastUpdated?: string;
  name: string;
  seoTags?: string[];
  status: ModStatus;
  tagline: string;
  version?: string;
}

export interface ModData extends ModIndexDisplayData {
  documentation?: { host: string; href: string; }[];
  downloads?: ModDownload[];
  downloadWarning?: string;
  earlyAccess?: boolean;
  hasNoCustomStrings?: boolean;
  hideTranslations?: boolean;
  notTranslatable?: boolean;
  pages: ModPage[];
  recommendedPacks?: ModPacks;
  requiredPacks?: ModPacks;
  stage: ModStage;
  translations?: ModTranslation[];
  videos?: ModVideo[];
}

export interface ModDownload {
  host: string;
  href: string;
}

export interface ModPage {
  title: string;
  html: string;
}

export interface ModTranslation {
  code: LocaleCode;
  translators: ModTranslator[];
  outdated?: boolean;
}

export interface ModTranslator {
  name: string;
  href?: string;
}

export interface ModPacks {
  eps?: string[];
  gps?: string[];
  sps?: string[];
  kits?: string[];
}

export interface ModVideo {
  creator: string;
  href: string;
  name: string;
  platform: string;
}

//#endregion

//#region Functions

export async function fetchModIndex(): Promise<ModIndex> {
  const indexEndpoint = config.dataFolders.mods + "index.json";
  return DataFetcher.fetchJson<ModIndex>(indexEndpoint);
}

export async function fetchModData(modId: ModId): Promise<ModData> {
  const modEndpoint = config.dataFolders.mods + modId + ".json";
  return DataFetcher.fetchJson<ModData>(modEndpoint);
}

export function getModThumbnailSrc(modId: ModId): string {
  return config.dataBaseUrl + config.dataFolders.thumbnails + `${modId}.png`;
}

export function getModImageSrc(modId: ModId, relSrc: string): string {
  return config.dataBaseUrl + config.dataFolders.images + `${modId}/${relSrc}.png`;
}

export function setDefaultThumbnail() {
  const placeholder = getModThumbnailSrc("placeholder");
  if (this.src !== placeholder) this.src = placeholder;
}

//#endregion
