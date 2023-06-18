<script lang="ts">
  import type { ModTranslation } from "src/lib/data/mods";
  import TranslationInfo from "./TranslationInfo.svelte";

  export let translations: ModTranslation[];
</script>

<div class="translations-container gap-4">
  {#each translations as translation, key (key)}
    {#if Boolean(translation.href)}
      <a
        href={translation.href}
        target="_blank"
        rel="noreferrer"
        class="translation no-underline flex items-center justify-between gap-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-lg border-2 border-solid border-transparent hover:border-accent-secondary-light dark:hover:border-accent-secondary-dark"
        class:french={translation.code === "FRE_FR"}
      >
        <TranslationInfo {translation} />
      </a>
    {:else}
      <div
        class="translation flex items-center justify-between gap-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-lg"
        class:french={translation.code === "FRE_FR"}
      >
        <TranslationInfo {translation} />
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  .translations-container {
    $cell-width: 300px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($cell-width, 1fr));

    .translation {
      min-width: $cell-width;
      max-width: 100%;

      &.french {
        cursor: url("../assets/cursors/baguette.png"), auto;
      }
    }
  }
</style>
