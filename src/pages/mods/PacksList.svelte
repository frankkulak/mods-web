<script lang="ts">
  import type { ModPacks } from "src/lib/data/mods";

  export let icon: string;
  export let title: string;
  export let subtitle: string;
  export let packs: ModPacks;
</script>

{#if Boolean(packs)}
  <div class="p-6 w-full bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
    <div class="flex items-center gap-4">
      <img class="svg h-6 w-6" src="./assets/icons/{icon}.svg" alt={icon} />
      <h2 class="text-xl font-bold">{title}</h2>
    </div>
    <p class="my-4">{subtitle}</p>
    <div class="w-full flex flex-wrap gap-2">
      {#if Boolean(packs.eps?.length)}
        {#each packs.eps as ep, key (key)}
          <p
            class="text-sm px-3 py-1 whitespace-nowrap rounded-full bg-cyan-700 text-cyan-200 shadow"
          >
            {ep}
          </p>
        {/each}
      {/if}
      {#if Boolean(packs.gps?.length)}
        {#each packs.gps as gp, key (key)}
          <p
            class="text-sm px-3 py-1 whitespace-nowrap rounded-full bg-blue-700 text-blue-200 shadow"
          >
            {gp}
          </p>
        {/each}
      {/if}
      {#if Boolean(packs.sps?.length)}
        {#each packs.sps as sp, key (key)}
          <p
            class="text-sm px-3 py-1 whitespace-nowrap rounded-full bg-emerald-700 text-emerald-200 shadow"
          >
            {sp}
          </p>
        {/each}
      {/if}
      {#if Boolean(packs.kits?.length)}
        {#each packs.kits as kit, key (key)}
          <p
            class="text-sm px-3 py-1 whitespace-nowrap rounded-full bg-violet-700 text-violet-200 shadow"
          >
            {kit}
          </p>
        {/each}
      {/if}
    </div>
  </div>
{/if}
