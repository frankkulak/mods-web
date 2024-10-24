<script lang="ts">
  import { onMount } from "svelte";
  import type { ModData, ModTranslation } from "src/lib/data/mods";
  import TranslationsContent from "./TranslationsContent.svelte";
  import TranslationsList from "./TranslationsList.svelte";

  export let modData: ModData;

  let included: ModTranslation[] = [];
  let linked: ModTranslation[] = [];

  $: someOutdated = modData.translations?.some((t) => t.outdated) ?? false;

  onMount(() => {
    modData.translations?.forEach((t) => {
      if (t.href) {
        linked.push(t);
      } else {
        included.push(t);
      }
    });

    // for refreshing
    linked = linked;
    included = included;
  });
</script>

{#if modData.hasNoCustomStrings}
  <TranslationsContent title="No Language Barriers Here">
    <p class="mt-4">
      This mod doesn't contain any custom text, so it's able to be used by all
      players.
    </p>
  </TranslationsContent>
{:else if modData.notTranslatable}
  <TranslationsContent title="English Only">
    <p class="mt-4">
      Sorry, but this mod cannot be translated. The only supported language is
      English (US).
    </p>
  </TranslationsContent>
{:else}
  <TranslationsContent title="Supported Languages">
    <div>
      {#if included.length > 0}
        <p class="my-4">
          These languages are included. No additional download is necessary.
        </p>
        <TranslationsList translations={included} />
      {/if}

      {#if linked.length > 0}
        <p class="my-4">
          These languages must be downloaded separately. Click on a language to
          visit its webpage.
        </p>
        <TranslationsList translations={linked} />
      {/if}

      <div class="flex flex-col gap-2 mt-4">
        {#if someOutdated}
          <p class="text-xs text-subtle">
            * = This translation may be outdated, and some strings may appear in
            English.
          </p>
        {/if}
        {#if !modData.notTranslatable}
          <p class="text-xs text-subtle">
            Want to submit or update a translation? Send it to me
            <a href="#/contact" class="text-secondary">on Discord</a>. I can
            either include it or link to it on your webpage. You must be fluent
            in both English and the translated language. If I find that you are
            using an online translator, you will be blacklisted from submitting
            translations in the future.
          </p>
        {/if}
      </div>
    </div>
  </TranslationsContent>
{/if}
