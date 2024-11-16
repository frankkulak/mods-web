import _config from "src/config.json";

const DEV = window.location.hostname === "localhost";
if (DEV) console.log("Running in dev mode.");

export interface Config {
  dataBaseUrl: string;

  dataFolders: {
    jsons: string;
    mods: string;
    thumbnails: string;
    images: string;
  };

  dataEndpoints: {
    game: string;
    patreon: string;
    tools: string;
    tutorials: string;
  };

  navItems: NavItem[];

  redirects: { [key: string]: string; };

  rickRolls: {
    url: string;
    endpoints: string[];
  };
}

const config: Config = _config;
if (DEV) config.dataBaseUrl = "http://127.0.0.1:5500/";
export default config;
