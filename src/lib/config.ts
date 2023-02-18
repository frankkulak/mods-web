import _config from "src/config.json";

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
export default config;
