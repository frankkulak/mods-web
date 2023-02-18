import config from "src/lib/config";
import DataFetcher from "src/lib/data/data-fetcher";

export interface ToolsData {
  tools: ToolInfo[];
}

export interface ToolInfo {
  pinned?: boolean;
  title: string;
  text: string;
  links: {
    label: string;
    href: string;
  }[];
}

export async function fetchToolsData(): Promise<ToolsData> {
  return DataFetcher.fetchJson<ToolsData>(
    config.dataEndpoints.tools,
    toolsDataProcessor
  );
}

function toolsDataProcessor(data: ToolsData) {
  data.tools.sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
}
