<script lang="ts">
  import { location } from "svelte-spa-router";

  export let navItem: NavItem;

  $: atDestination = $location === navItem.href;
  $: iconSrc = atDestination ? navItem.icon : `${navItem.icon}-outline`;
</script>

<div class="navlink relative" class:at-destination={atDestination}>
  <a
    href="#{navItem.href}"
    title={navItem.label}
    class="flex gap-2 items-center no-underline"
    class:pointer-events-none={atDestination}
  >
    <img
      src="./assets/icons/{iconSrc}.svg"
      alt={navItem.icon}
      class="svg h-5"
    />
    <p class="text-lg hidden sm:inline-block">{navItem.label}</p>
  </a>
  <hr
    class="invisible opacity-0 absolute left-0 -bottom-1 right-full rounded border border-solid border-accent-primary-light dark:border-accent-primary-dark"
  />
</div>

<style lang="scss">
  .navlink.at-destination,
  .navlink:hover {
    hr {
      visibility: visible;
      opacity: 1;
      right: 0;
      transition: visibility 0s, right 300ms ease-out, opacity 300ms ease-out;
    }
  }
</style>
