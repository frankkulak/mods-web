<script lang="ts">
  export let expanded = false;

  $: icon = expanded ? "close" : "menu";

  const toggleExpanded = () => (expanded = !expanded);
</script>

<div class="flex items-center">
  <div class="hidden md:block">
    <slot />
  </div>
  <button class="block md:hidden" on:click={toggleExpanded}>
    <img class="h-8 svg" src="./assets/icons/{icon}.svg" alt={icon} />
  </button>
</div>
