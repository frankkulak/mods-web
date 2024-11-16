<script lang="ts">
  import type { PatreonTier } from "src/lib/data/patreon";

  export let tierInfo: PatreonTier;
</script>

<div
  class="w-full sm:w-72 tier-view rounded-lg shadow-md p-6 bg-gray-50 dark:bg-gray-900"
>
  <div class="text-center mb-6">
    <h4 class="text-xl text-brand-patreon">{tierInfo.name}</h4>
    <p class="mt-2 text-sm text-subtle">{tierInfo.price} / month</p>
  </div>
  <ul class="list-disc pl-4">
    {#each tierInfo.benefits as benefit, key (key)}
      <li>{benefit}</li>
    {/each}
  </ul>
</div>
