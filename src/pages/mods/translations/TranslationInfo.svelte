<script lang="ts">
  import { getLocaleData } from "src/lib/languages";
  import type { ModTranslation, ModTranslator } from "src/lib/data/mods";

  export let translation: ModTranslation;

  function getDisplayName(translation: ModTranslation): string {
    return `${getLocaleData(translation.code).displayName}${
      translation.outdated ? "*" : ""
    }`;
  }

  function formatTranslators(translators: ModTranslator[]): string {
    return translators
      .map(({ name, href }) => {
        return href
          ? `<a class="text-secondary" href="${href}" target="_blank">${name}</a>`
          : name;
      })
      .join(", ");
  }
</script>

<div class="flex items-center gap-2">
  <img
    class="h-6 w-6 drop-shadow-sm"
    src="./assets/flags/{getLocaleData(translation.code).flag}.png"
    alt={translation.code}
  />
  <p class="whitespace-nowrap text-sm">
    {getDisplayName(translation)}
  </p>
</div>
<p class="text-xs text-subtle">
  by {@html formatTranslators(translation.translators)}
</p>
