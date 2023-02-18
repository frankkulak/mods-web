<script lang="ts">
  import { onMount } from "svelte";
  import Router, { replace } from "svelte-spa-router";
  import config from "src/lib/config";
  import { fetchModIndex, ModIndexDisplayData } from "src/lib/data/mods";
  import Navbar from "src/components/Navbar.svelte";
  import Footer from "src/components/Footer.svelte";
  import HomePage from "src/pages/home/HomePage.svelte";
  import NotFoundPage from "src/pages/NotFoundPage.svelte";
  import ToolsPage from "src/pages/tools/ToolsPage.svelte";
  import LearnPage from "src/pages/learn/LearnPage.svelte";
  import ContactPage from "src/pages/contact/ContactPage.svelte";
  import StblEditorLegacyPage from "src/pages/tools/StblEditorLegacyPage.svelte";
  import StblMergerLegacyPage from "src/pages/tools/StblMergerLegacyPage.svelte";
  import ModsPage from "src/pages/mods/ModsPage.svelte";
  import ModDetailPage from "src/pages/mods/ModDetailPage.svelte";
  import DonatePage from "src/pages/donate/DonatePage.svelte";

  const routes = {
    "/": HomePage,
    "/mods": ModsPage,
    "/mods/:modId": ModDetailPage,
    "/tools": ToolsPage,
    "/tools/stbl-editor": StblEditorLegacyPage,
    "/tools/stbl-merger": StblMergerLegacyPage,
    "/learn": LearnPage,
    "/contact": ContactPage,
    "/donate": DonatePage,
    "*": NotFoundPage,
  };

  let seoMods: ModIndexDisplayData[];

  onMount(() => {
    fetchModIndex()
      .then((data) => {
        seoMods = data.allMods
          .map((id) => data.displayData[id])
          .filter((d) => Boolean(d));
      })
      .catch((err) => {
        console.error(err);
      });
  });

  function routeLoaded(event: any) {
    const { location } = event.detail;

    if (location in config.redirects) {
      replace(config.redirects[location]);
    } else if (config.rickRolls.endpoints.includes(location)) {
      window.open(config.rickRolls.url, "_self");
    }
  }
</script>

<Navbar />
<main class="min-h-screen flex flex-col">
  <Router {routes} restoreScrollState={true} on:routeLoaded={routeLoaded} />
</main>
<Footer />

<!-- Just something hacky for SEO since site uses hash paths -->
{#if Boolean(seoMods)}
  <div class="hidden">
    {#each seoMods as data, key (key)}
      <div>
        <h2>{data.name}</h2>
        <p>{data.tagline}</p>
        <p>{data.description}</p>
        {#if Boolean(data.seoTags?.length)}
          <p>{data.seoTags.join(", ")}</p>
        {/if}
      </div>
    {/each}
    <p>frank, frankk, sims, sims 4, ts4, mod, mods</p>
  </div>
{/if}
