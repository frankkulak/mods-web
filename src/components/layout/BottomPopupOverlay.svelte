<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<div
  class="fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-500 dark:bg-gray-950 bg-opacity-80 dark:bg-opacity-80"
>
  <div
    in:fly={{ y: 100, duration: 500 }}
    class="p-6 absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-screen-md bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg"
  >
    <slot />
  </div>
</div>
