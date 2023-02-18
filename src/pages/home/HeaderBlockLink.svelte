<script lang="ts">
  import { scale } from "svelte/transition";

  export let text: string;
  export let icon: string;
  export let href: string;
</script>

<a in:scale class="zoom-on-hover no-underline hover:cursor-pointer" {href}>
  <div class="px-8 py-4 bg-gray-100 dark:bg-gray-900 rounded-md shadow-md w-56">
    <div class="flex gap-4 items-center justify-center">
      <img class="svg w-8 h-8" src="./assets/icons/{icon}.svg" alt="icon" />
      <h4 class="text-xl whitespace-nowrap">{text}</h4>
    </div>
  </div>
</a>
