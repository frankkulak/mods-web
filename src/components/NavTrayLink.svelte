<script lang="ts">
  import { link } from "svelte-spa-router";

  export let navItem: NavItem;
  export let onClick: () => void;
</script>

<a
  href={navItem.href}
  use:link
  title={navItem.label}
  class="flex gap-4 items-center no-underline zoom-on-hover"
  on:click={onClick}
>
  <img
    class="svg h-6"
    src="./assets/icons/{navItem.icon}.svg"
    alt={navItem.icon}
  />
  <p class="text-2xl">{navItem.label}</p>
</a>
