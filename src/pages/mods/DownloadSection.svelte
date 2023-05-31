<script lang="ts">
  import type { ModData } from "src/lib/data/mods";
  import LinkButton from "src/components/elements/LinkButton.svelte";
  import BottomPopupOverlay from "src/components/layout/BottomPopupOverlay.svelte";
  import InstallInstructions from "./InstallInstructions.svelte";
  import TermsOfUse from "./TermsOfUse.svelte";

  export let element: HTMLDivElement;
  export let modData: ModData;

  let installInstructions = false;
  let termsOfUse = false;
</script>

<div
  bind:this={element}
  class="w-full bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md"
>
  <div class="w-full p-6 flex flex-col gap-6">
    <div
      class="w-full flex flex-col md:justify-between items-center md:flex-row gap-6"
    >
      <div class="flex items-center gap-4">
        <img
          class="svg h-6 w-6"
          src="./assets/icons/cloud-download.svg"
          alt="cloud"
        />
        <h2 class="text-xl font-bold">Download</h2>
      </div>
      <div class="flex flex-wrap justify-center gap-4">
        {#each modData.downloads as download, key (key)}
          <LinkButton
            text="Download from {download.host}"
            href={download.href}
            gradient={key === 0}
            target="_blank"
          />
        {/each}
      </div>
    </div>
    {#if Boolean(modData.downloadWarning)}
      <div class="w-full p-4 bg-yellow-300 dark:bg-yellow-200 rounded-lg">
        <p class="text-gray-800 dark:text-yellow-800">
          <strong class="text-gray-900 dark:text-yellow-900">Attention</strong>:
          {@html modData.downloadWarning}
        </p>
      </div>
    {/if}
    {#if Boolean(modData.documentation)}
      <hr
        class="flex-1 border border-solid border-gray-300 dark:border-gray-700"
      />
      <div
        class="w-full flex flex-col md:justify-between items-center md:flex-row gap-6"
      >
        <div class="flex items-center gap-4">
          <img
            class="svg h-6 w-6"
            src="./assets/icons/document-text.svg"
            alt="doc"
          />
          <h2 class="text-xl font-bold">Documentation</h2>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          {#each modData.documentation as download, key (key)}
            <LinkButton
              text="Get Docs from {download.host}"
              href={download.href}
              target="_blank"
            />
          {/each}
        </div>
      </div>
    {/if}
  </div>
  <div class="w-full px-6 py-2 bg-gray-50 dark:bg-gray-950 rounded-b-lg">
    {#if !Boolean(modData.requiredPacks)}
      <p class="mb-1 text-sm text-subtle">
        {modData.name} is Base Game compatible
      </p>
    {/if}
    <p class="text-sm text-subtle">
      <button
        class="text-secondary underline hover:no-underline"
        on:click={() => (installInstructions = true)}
        >Installation Instructions</button
      >
      •
      <button
        class="text-secondary underline hover:no-underline"
        on:click={() => (termsOfUse = true)}>Terms of Use</button
      >
    </p>
  </div>
</div>

{#if installInstructions}
  <BottomPopupOverlay>
    <InstallInstructions dismiss={() => (installInstructions = false)} />
  </BottomPopupOverlay>
{/if}

{#if termsOfUse}
  <BottomPopupOverlay>
    <TermsOfUse dismiss={() => (termsOfUse = false)} />
  </BottomPopupOverlay>
{/if}
