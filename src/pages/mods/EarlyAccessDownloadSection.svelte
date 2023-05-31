<script lang="ts">
  import type { ModData } from "src/lib/data/mods";
  import LinkButton from "src/components/elements/LinkButton.svelte";

  export let element: HTMLDivElement;
  export let modData: ModData;
</script>

<div
  bind:this={element}
  class="w-full bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md"
>
  <div class="w-full p-6 flex flex-col gap-6">
    <div
      class="w-full flex flex-col md:justify-between items-center md:flex-row gap-6"
    >
      <div class="w-full">
        <div class="flex items-center gap-4">
          <img
            class="h-8 w-8"
            src="./assets/icons/logo-patreon.svg"
            alt="patreon"
          />
          <h2 class="text-xl font-bold">Early Access</h2>
        </div>
        <p class="mt-4">
          {modData.name} is in {modData.stage}, and is only available to "The {modData.stage ===
          "alpha"
            ? "Goths"
            : "Pancakes"}" and higher.
        </p>
        {#if Boolean(modData.publicRelease)}
          <p class="mt-1 text-subtle">
            Public release is on {modData.publicRelease}
          </p>
        {/if}
      </div>
      <div class="flex justify-center gap-4">
        {#each modData.downloads as download, key (key)}
          <LinkButton
            text="Get on {download.host}"
            href={download.href}
            gradient={key === 0}
            target="_blank"
          />
        {/each}
        <LinkButton text="More Info" href="#/donate" />
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
  </div>
</div>
