<script lang="ts">
  import type { ToolInfo } from "src/lib/data/tools";
  import LinkButton from "src/components/elements/LinkButton.svelte";

  export let toolInfo: ToolInfo;
</script>

<div
  class="tool-info p-6 relative flex flex-col justify-between rounded-lg shadow-md bg-gray-100 dark:bg-gray-900"
>
  {#if toolInfo.pinned}
    <img
      class="h-6 w-6 svg-gold absolute top-5 right-5"
      src="./assets/icons/sparkles.svg"
      title="Featured"
      alt="Star"
    />
  {/if}
  <div>
    <h2 class="text-xl font-bold">{toolInfo.title}</h2>
    <p class="text-subtle mt-4 mb-6">{toolInfo.text}</p>
  </div>
  <div class="flex flex-wrap gap-4">
    {#each toolInfo.links as link, key (key)}
      <LinkButton
        text={link.label}
        href={link.href}
        gradient={key === 0}
        target="_blank"
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .tool-info {
    min-width: 320px;
    max-width: 100%;
  }
</style>
