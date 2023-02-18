export function cleanUpLegacyStorage() {
  [
    "fkmods_IsDarkTheme",
    "fkStblTool_ChunkSize",
    "fkStblTool_DownloadAs",
    "fkStblTool_CacheFileContents",
    "fkStblTool_HashPrefix",
    "fkStblTool_AutoHashFiles",
    "fkStblTool_ChainMode",
    "fkStblTool_OutputFormat",
    "fkStblTool_FileLanguageName",
    "fkStblTool_ShowAllStrings",
    "fkStblTool_LayoutType",
    "fkStblTool_PrevTextTooltip"
  ].forEach(key => {
    localStorage.removeItem(key);
  });
}