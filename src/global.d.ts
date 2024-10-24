/// <reference types="svelte" />

interface UserSettings {
  isLightTheme: boolean;
  lastViewedAlert: number;
  lastVotePromptYear: number;
}

interface NavItem {
  href: string;
  icon: string;
  label: string;
}
