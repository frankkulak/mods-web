<script lang="ts">
  import {
    getModThumbnailSrc,
    ModIndexDisplayData,
    setDefaultThumbnail,
  } from "src/lib/data/mods";
  import ModStatusIndicator from "./ModStatusIndicator.svelte";

  export let mods: {
    id: string;
    data: ModIndexDisplayData;
  }[];
</script>

<div class="w-full mods-wrapper grid gap-16">
  {#each mods as mod (mod.id)}
    <a class="mod-info no-underline zoom-on-hover-sm" href="#/mods/{mod.id}">
      <div class="w-full relative">
        <img
          class="thumbnail w-full drop-shadow-md"
          class:opacity-30={mod.data.status === "unreleased"}
          title={mod.data.name}
          alt={mod.id}
          src={getModThumbnailSrc(mod.id)}
          on:error={setDefaultThumbnail}
        />
        <div class="absolute top-5 left-1/2 -translate-x-1/2">
          <ModStatusIndicator status={mod.data.status} />
        </div>
        {#if Boolean(mod.data.version)}
          <div
            class="absolute bottom-5 right-5 px-2 py-1 rounded-full shadow bg-gray-100"
          >
            <p
              class="text-xs text-gray-900"
              title="Last update: {mod.data.lastUpdated}"
            >
              v{mod.data.version}
            </p>
          </div>
        {/if}
      </div>
      <div
        class="px-4 relative"
        class:opacity-50={mod.data.status === "unreleased"}
      >
        {#if mod.data.featured}
          <img
            class="h-6 w-6 svg-gold absolute top-0 right-4"
            src="./assets/icons/sparkles.svg"
            title="Featured"
            alt="Star"
          />
        {/if}
        <h2 class="mt-4 text-lg font-bold">{mod.data?.name}</h2>
        <p class="text-sm text-subtle">{mod.data?.tagline}</p>
      </div>
    </a>
  {/each}
</div>

<style lang="scss">
  .mods-wrapper {
    $max-width: 250px;

    grid-template-columns: repeat(auto-fill, minmax($max-width, 1fr));

    .mod-info {
      min-width: $max-width;
      max-width: 100%;
    }
  }

  .thumbnail {
    border-radius: 8%;
  }
</style>
