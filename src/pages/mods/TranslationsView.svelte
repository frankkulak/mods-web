<script lang="ts">
  import type { ModData, ModTranslator } from "src/lib/data/mods";
  import { getLocaleData } from "src/lib/languages";

  export let modData: ModData;

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

<div class="p-6 rounded-lg bg-gray-100 dark:bg-gray-900 shadow-md">
  <div class="flex items-center gap-4">
    <img class="svg h-6 w-6" src="./assets/icons/language.svg" alt="language" />
    {#if modData.hasNoCustomStrings}
      <h2 class="text-xl font-bold">No Language Barriers Here</h2>
    {:else}
      <h2 class="text-xl font-bold">Supported Languages</h2>
    {/if}
  </div>

  {#if !modData.hasNoCustomStrings}
    {#if !modData.notTranslatable}
      <p class="my-4">
        All listed languages are included. No additional download is necessary.
      </p>
    {:else}
      <p class="my-4">
        Sorry, but this mod cannot be translated. The only supported language is
        English (US).
      </p>
    {/if}
    <div class="my-6 translations-container gap-4">
      {#each modData.translations as translation, key (key)}
        <div
          class="translation flex items-center justify-between gap-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-lg"
          class:french={translation.code === "FRE_FR"}
        >
          <div class="flex items-center gap-2">
            <img
              class="h-6 w-6 drop-shadow-sm"
              src="./assets/flags/{getLocaleData(translation.code).flag}.png"
              alt={translation.code}
            />
            <p class="whitespace-nowrap text-sm">
              {getLocaleData(translation.code).displayName}
            </p>
          </div>
          <p class="text-xs text-subtle">
            by {@html formatTranslators(translation.translators)}
          </p>
        </div>
      {/each}
    </div>
    {#if !modData.notTranslatable}
      <p class="mb-2 text-xs text-subtle">
        Want to submit a new translation? Send it to me
        <a href="#/contact" class="text-secondary">on Discord</a>.
      </p>
    {/if}

    <p class="text-xs text-subtle">
      All flag icons were created by <a
        class="text-secondary"
        href="https://www.flaticon.com/authors/freepik"
        target="_blank">Freepik</a
      >
      on
      <a class="text-secondary" href="https://www.flaticon.com/" target="_blank"
        >Flaticon</a
      >.
    </p>
  {:else}
    <p class="mt-4">
      This mod doesn't contain any custom text, so it's able to be used by all
      players.
    </p>
  {/if}
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
