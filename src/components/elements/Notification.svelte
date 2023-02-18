<script lang="ts">
  import { fade, fly } from "svelte/transition";

  export let text: string;
  export let buttonText: string;
  export let onButtonClick: () => void;
  export let buttonColorClass: string;
</script>

<div
  in:fly={{ y: 40, duration: 600 }}
  out:fade={{ duration: 180 }}
  class="fixed bottom-2 left-4 right-4 flex justify-center z-10"
>
  <div
    class="px-4 py-1 flex flex-wrap gap-2 justify-center items-center rounded-full bg-gray-100 dark:bg-gray-900 border border-solid border-gray-300 dark:border-gray-600 shadow"
  >
    <p class="text-sm text-center">{text}</p>
    <button
      class="zoom-on-hover text-xs font-bold uppercase {buttonColorClass}"
      on:click={onButtonClick}>{buttonText}</button
    >
  </div>
</div>
