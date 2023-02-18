//#region Types

export type LocaleCode =
  "ENG_US" |
  "CHS_CN" |
  "CHT_CN" |
  "CZE_CZ" |
  "DAN_DK" |
  "DUT_NL" |
  "FIN_FI" |
  "FRE_FR" |
  "GER_DE" |
  "ITA_IT" |
  "JPN_JP" |
  "KOR_KR" |
  "NOR_NO" |
  "POL_PL" |
  "POR_BR" |
  "RUS_RU" |
  "SPA_EA" |
  "SWE_SE";

export interface LocaleData {
  code: LocaleCode;
  displayName: string;
  englishName: string;
  flag: string;
}

//#endregion

//#region Constants

export const localeDatas: LocaleData[] = [
  {
    code: "POR_BR",
    englishName: "Portuguese (BR)",
    displayName: "Português (BR)",
    flag: "brazil",
  },
  {
    code: "CHT_CN",
    englishName: "Chinese (T)",
    displayName: "繁體中文",
    flag: "china",
  },
  {
    code: "CHS_CN",
    englishName: "Chinese (S)",
    displayName: "简体中文",
    flag: "china",
  },
  {
    code: "CZE_CZ",
    englishName: "Czech",
    displayName: "Čeština",
    flag: "czechia",
  },
  {
    code: "DAN_DK",
    englishName: "Danish",
    displayName: "Dansk",
    flag: "denmark",
  },
  {
    code: "FIN_FI",
    englishName: "Finnish",
    displayName: "Suomi",
    flag: "finland",
  },
  {
    code: "FRE_FR",
    englishName: "French",
    displayName: "Français",
    flag: "france",
  },
  {
    code: "GER_DE",
    englishName: "German",
    displayName: "Deutsch",
    flag: "germany",
  },
  {
    code: "ITA_IT",
    englishName: "Italian",
    displayName: "Italiano",
    flag: "italy",
  },
  {
    code: "JPN_JP",
    englishName: "Japanese",
    displayName: "日本語",
    flag: "japan",
  },
  {
    code: "DUT_NL",
    englishName: "Dutch",
    displayName: "Nederlands",
    flag: "netherlands",
  },
  {
    code: "NOR_NO",
    englishName: "Norwegian",
    displayName: "Norsk",
    flag: "norway",
  },
  {
    code: "POL_PL",
    englishName: "Polish",
    displayName: "Polski",
    flag: "poland",
  },
  {
    code: "RUS_RU",
    englishName: "Russian",
    displayName: "Русский",
    flag: "russia",
  },
  {
    code: "KOR_KR",
    englishName: "Korean",
    displayName: "한국어",
    flag: "south-korea",
  },
  {
    code: "SPA_EA",
    englishName: "Spanish",
    displayName: "Español",
    flag: "spain",
  },
  {
    code: "SWE_SE",
    englishName: "Swedish",
    displayName: "Svenska",
    flag: "sweden",
  },
  {
    code: "ENG_US",
    englishName: "English (US)",
    displayName: "English (US)",
    flag: "united-states",
  },
];

localeDatas.sort(localeSorter);

const localeMap = new Map<string, LocaleData>();
localeDatas.forEach(data => localeMap.set(data.code, data));

//#endregion 

//#region Functions

export function getLocaleData(code: LocaleCode): LocaleData {
  return localeMap.get(code);
}

export function localeSorter(a: { code: LocaleCode; }, b: { code: LocaleCode; }): number {
  if (a.code === "ENG_US") return -1;
  if (b.code === "ENG_US") return 1;
  if (a.code < b.code) return -1;
  if (a.code > b.code) return 1;
  return 0;
}

//#endregion 
