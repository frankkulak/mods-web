<script lang="ts">
  import { fade } from "svelte/transition";

  export let onClose: () => void = undefined;
</script>

<div
  class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-40 blurred-bg"
  transition:fade
>
  <div class="p-4 max-w-screen-md w-full">
    <div>
      <slot />
    </div>
  </div>
  {#if onClose != undefined}
    <button class="fixed top-6 right-6" on:click={onClose}>
      <img class="svg w-10 h-10" src="./assets/x.svg" alt="Close" />
    </button>
  {/if}
</div>
