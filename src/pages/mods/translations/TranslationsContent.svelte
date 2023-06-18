<script lang="ts">
  export let title: string;
</script>

<div class="p-6 rounded-lg bg-gray-100 dark:bg-gray-900 shadow-md">
  <div class="flex items-center gap-4">
    <img class="svg h-6 w-6" src="./assets/icons/language.svg" alt="language" />
    <h2 class="text-xl font-bold">{title}</h2>
  </div>

  <slot />
</div>
