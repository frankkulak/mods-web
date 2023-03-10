<script lang="ts">
  import ActionButton from "src/components/elements/ActionButton.svelte";

  export let alerts: string[];
  export let onClose: () => void;
</script>

<div>
  <div class="flex gap-4 items-center">
    <img class="h-10 svg" src="./assets/icons/warning-outline.svg" alt="!" />
    <h2 class="text-3xl font-bold">Attention</h2>
  </div>
  <div class="my-8">
    {#if alerts.length === 1}
      <p>{alerts[0]}</p>
    {:else}
      <ul class="pl-6 list-disc">
        {#each alerts as alert, key (key)}
          <li>{alert}</li>
        {/each}
      </ul>
    {/if}
  </div>
  <ActionButton text="Got It" gradient={true} onClick={onClose} />
</div>
