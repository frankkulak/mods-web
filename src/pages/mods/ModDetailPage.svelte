<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import {
    fetchModData,
    fetchModIndex,
    getModThumbnailSrc,
    setDefaultThumbnail,
  } from "src/lib/data/mods";
  import type { ModData } from "src/lib/data/mods";
  import SectionSeparator from "src/components/elements/SectionSeparator.svelte";
  import TranslationsView from "src/pages/mods/translations/TranslationsView.svelte";
  import DataFetchBlock from "src/components/layout/DataFetchBlock.svelte";
  import HtmlRenderer from "./HtmlRenderer.svelte";
  import ActionButton from "src/components/elements/ActionButton.svelte";
  import ModStatusIndicator from "./ModStatusIndicator.svelte";
  import DownloadSection from "./DownloadSection.svelte";
  import PacksList from "./PacksList.svelte";
  import VideosSection from "./VideosSection.svelte";
  import EarlyAccessDownloadSection from "./EarlyAccessDownloadSection.svelte";
  import { replace } from "svelte-spa-router";

  //#region Variables

  export let params: { modId: string };

  let modData: ModData;
  let fetchError = false;
  let currentPageIndex = 0;
  let downloadSection: HTMLDivElement;
  let downloadPosition = 0;
  let currentScrollPos = 0;

  $: thumbnailSrc = getModThumbnailSrc(params.modId);
  $: dataFetched = Boolean(modData);
  $: tabName = modData?.name ?? "Loading...";
  $: currentPage = modData?.pages[currentPageIndex];
  $: hasDownloads = Boolean(modData?.downloads?.length);
  $: isViewingDownload =
    currentScrollPos > 0 &&
    currentScrollPos + window.innerHeight > downloadPosition;
  $: needsDivider =
    !modData?.hideTranslations ||
    Boolean(modData?.downloads?.length) ||
    Boolean(modData?.requiredPacks) ||
    Boolean(modData?.recommendedPacks);

  //#endregion

  //#region Lifecycle

  onMount(() => {
    fetchData().then((_) => {
      document.addEventListener("scroll", updateScrollPos);
      document.addEventListener("resize", updateScrollPos);
      updateScrollPos();
    });
  });

  onDestroy(() => {
    document.removeEventListener("scroll", updateScrollPos);
    document.removeEventListener("resize", updateScrollPos);
  });

  //#endregion

  //#region Functions

  async function fetchData() {
    fetchError = false;

    const loadContent = () => {
      fetchModData(params.modId)
        .then((data) => {
          modData = data;
        })
        .catch((err) => {
          console.error(err);
          fetchError = true;
        });
    };

    const index = await fetchModIndex();
    if (index.redirects && params.modId in index.redirects) {
      replace(`#/mods/${index.redirects[params.modId]}`).then(loadContent);
    } else {
      loadContent();
    }
  }

  function scrollToDownload() {
    // FIXME: download pos not working very well, like when switching tabs,
    // resizing, and also it scrolls to top of download which is dumb
    const footerTop =
      document.getElementsByTagName("footer")?.[0]?.offsetTop ?? 0;
    window.scroll({
      top: footerTop - window.innerHeight,
      behavior: "smooth",
    });
  }

  function updateScrollPos() {
    downloadPosition = downloadSection?.offsetTop ?? 0;
    currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  }

  function handleTabChange(tabIndex: number) {
    currentPageIndex = tabIndex;
    updateScrollPos();
  }
  //#endregion
</script>

<svelte:head>
  <title>Frankk | {tabName}</title>
</svelte:head>

<section class="pt-16 flex-1 w-full flex justify-center">
  <div class="py-16 w-full xl:max-w-screen-xl px-4">
    <DataFetchBlock {dataFetched} {fetchError} retryFetch={fetchData}>
      <div
        class="flex flex-col md:flex-row gap-10 items-center justify-center md:justify-start"
      >
        <img
          class="thumbnail h-56 w-56 drop-shadow-md"
          title={modData.name}
          alt={params.modId}
          src={thumbnailSrc}
          on:error={setDefaultThumbnail}
        />
        <div class="mb-1 flex flex-col items-center md:items-start">
          <div
            class="flex flex-col-reverse md:flex-row flex-wrap gap-4 items-center"
          >
            <h1 class="text-gradient font-bold text-2xl drop-shadow">
              {modData.name}
            </h1>
            <ModStatusIndicator
              status={modData.status}
              earlyAccess={modData.earlyAccess}
            />
          </div>
          <p class="mb-1">{modData.tagline}</p>
          {#if Boolean(modData.version)}
            <p class="mb-1 text-subtle text-sm">
              v{modData.version} • {modData.lastUpdated}
            </p>
          {/if}
          <p class="mt-10 md:mt-6 text-center md:text-left">
            {modData.description}
          </p>
        </div>
      </div>

      <div class="mt-16 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
        {#if modData.pages.length > 1}
          <div class="mb-8 w-full flex flex-wrap justify-center gap-4">
            {#each modData.pages as page, key (key)}
              <ActionButton
                text={page.title}
                onClick={() => handleTabChange(key)}
                gradient={currentPageIndex === key}
                hoverBehavior="highlight"
                width="140px"
              />
            {/each}
          </div>
        {/if}

        <HtmlRenderer modId={params.modId} htmlContent={currentPage.html} />
      </div>

      {#if Boolean(modData?.videos?.length)}
        <div class="mt-8 w-full">
          <VideosSection modName={modData.name} videos={modData.videos} />
        </div>
      {/if}

      {#if needsDivider}
        <SectionSeparator />
      {/if}

      <div class="flex flex-col w-full gap-8">
        {#if !modData.hideTranslations}
          <TranslationsView {modData} />
        {/if}
        <PacksList
          icon="sparkles"
          title="Integrated Packs"
          subtitle="These packs are not required for this mod to work, but they enhance or enable certain features."
          packs={modData.recommendedPacks}
        />
        <PacksList
          icon="storefront"
          title="Required Packs"
          subtitle="These packs are required for this mod to work. If you do not have all of them, you cannot use it."
          packs={modData.requiredPacks}
        />
        {#if hasDownloads}
          {#if modData.earlyAccess}
            <EarlyAccessDownloadSection
              bind:element={downloadSection}
              {modData}
            />
          {:else}
            <DownloadSection bind:element={downloadSection} {modData} />
          {/if}
        {/if}
      </div>
    </DataFetchBlock>
  </div>
</section>

{#if hasDownloads}
  <button
    class="fixed bottom-8 right-8 z-10 flex items-center gap-2 px-4 py-2 bg-gradient-invert rounded-full shadow-md zoom-on-hover"
    class:hidden={isViewingDownload}
    on:click={scrollToDownload}
  >
    <img class="svg-light h-5" src="./assets/icons/arrow-down.svg" alt="v" />
    <p class="text-white">Jump to Download</p>
  </button>
{/if}

<style lang="scss">
  .thumbnail {
    border-radius: 8%;
  }
</style>
