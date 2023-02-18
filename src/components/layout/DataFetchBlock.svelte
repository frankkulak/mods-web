<script lang="ts">
  import SectionHeader from "src/components/elements/SectionHeader.svelte";
  import ActionButton from "src/components/elements/ActionButton.svelte";

  export let dataFetched: boolean;
  export let fetchError: boolean;
  export let retryFetch: () => void;
</script>

<div class="w-full">
  {#if dataFetched}
    <slot />
  {:else if fetchError}
    <div class="w-full">
      <SectionHeader title="Well, this is awkward" />
      <p class="mt-4">
        Something went wrong while loading this content. Click the button below
        or refresh the page to try again.
      </p>
      <p class="mt-2 mb-8">
        If this errors persists, please <a
          class="text-secondary"
          href="#/contact">let me know</a
        >.
      </p>
      <ActionButton
        text="Reload Content"
        gradient={true}
        onClick={retryFetch}
      />
    </div>
  {:else}
    <p class="text-2xl font-bold text-subtle text-center">Loading...</p>
  {/if}
</div>
