<script lang="ts">
  import { fly } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import Settings from "src/lib/settings";
  import config from "src/config.json";
  import NavbarLink from "src/components/NavbarLink.svelte";
  import BrandMarker from "src/components/views/BrandMarker.svelte";
  import Collapsable from "src/components/layout/Collapsable.svelte";
  import NavTrayLink from "src/components/NavTrayLink.svelte";

  const navItems = config.navItems;

  let trayVisible = false;
  let isLightTheme = Settings.isLightTheme;
  $: themeIcon = isLightTheme ? "sunny" : "moon";

  function toggleTheme() {
    Settings.isLightTheme = !Settings.isLightTheme;
    isLightTheme = Settings.isLightTheme;
  }

  function closeTray() {
    trayVisible = false;
  }
</script>

<nav
  class="fixed top-0 left-0 right-0 h-16 z-40 px-4 flex justify-between items-center gap-4 bottom-shadow blurred-bg"
>
  <a
    class="flex gap-3 items-center no-underline whitespace-nowrap"
    href="/"
    use:link
    on:click={closeTray}
  >
    <BrandMarker />
  </a>
  <Collapsable bind:expanded={trayVisible}>
    <div class="flex gap-4 sm:gap-6 items-center">
      {#each navItems as navItem, key (key)}
        <NavbarLink {navItem} />
      {/each}
      <button on:click={toggleTheme} title="Theme">
        <img
          src="./assets/icons/{themeIcon}-outline.svg"
          alt={isLightTheme ? "Sun" : "Moon"}
          class="svg tint-on-hover h-5"
        />
      </button>
    </div>
  </Collapsable>
</nav>

{#if trayVisible}
  <div
    transition:fly={{ x: 500, duration: 150 }}
    class="fixed top-0 left-0 w-screen h-screen pt-16 flex flex-col justify-center items-center gap-8 z-30 blurred-bg"
  >
    {#each navItems as navItem, key (key)}
      <NavTrayLink {navItem} onClick={closeTray} />
    {/each}
    <button
      on:click={toggleTheme}
      class="flex items-center gap-4 zoom-on-hover absolute bottom-8"
    >
      <img
        src="./assets/icons/{themeIcon}-outline.svg"
        alt={isLightTheme ? "Sun" : "Moon"}
        class="svg tint-on-hover h-5"
      />
      <p class="text-subtle">{isLightTheme ? "Light" : "Dark"} Theme</p>
    </button>
  </div>
{/if}

<style lang="scss">
  nav {
    overflow: visible !important;
  }
</style>
