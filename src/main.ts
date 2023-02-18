import App from "src/App.svelte";
import DocumentUtils from "src/lib/document-utils";
import Settings from "src/lib/settings";
import { cleanUpLegacyStorage } from "src/lib/legacy";

const app = new App({
	target: document.body,
});

window.addEventListener("load", () => {
	cleanUpLegacyStorage();
	DocumentUtils.toggleLightTheme(Settings.isLightTheme, false);
});

export default app;
