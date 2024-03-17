<script lang="ts">
  import { onMount } from "svelte";
  import { fetchToolsData, ToolInfo } from "src/lib/data/tools";
  import ToolInfoView from "src/pages/tools/ToolInfoView.svelte";
  import StblLegacyToolsView from "src/pages/tools/StblLegacyToolsView.svelte";
  import SectionSeparator from "src/components/elements/SectionSeparator.svelte";
  import DataFetchBlock from "src/components/layout/DataFetchBlock.svelte";

  let toolInfos: ToolInfo[];
  let fetchError = false;

  onMount(() => {
    fetchData();
  });

  function fetchData() {
    fetchError = false;

    fetchToolsData()
      .then((data) => {
        toolInfos = data.tools;
      })
      .catch((err) => {
        console.error(err);
        fetchError = true;
      });
  }
</script>

<svelte:head>
  <title>Frankk | Tools</title>
</svelte:head>

<section class="py-16 flex-1 w-full flex justify-center">
  <div class="only:w-full xl:max-w-screen-xl px-4 flex flex-col items-center">
    <div class="my-16 flex flex-col gap-6 items-center">
      <div class="flex gap-4 items-center">
        <img
          class="w-10 sm:w-14"
          src="./assets/s4tk-transparent.png"
          alt="S4TK"
        />
        <h1 class="s4tk-text-gradient text-3xl sm:text-5xl font-bold">
          Sims 4 Toolkit
        </h1>
      </div>
      <p class="text-subtle text-center">
        Modding tools powered by the <a
          class="text-secondary"
          href="https://sims4toolkit.com/"
          target="_blank"
          rel="noreferrer">@s4tk</a
        > Node library
      </p>
    </div>

    <DataFetchBlock
      dataFetched={Boolean(toolInfos)}
      {fetchError}
      retryFetch={fetchData}
    >
      <div class="w-full tool-infos-wrapper">
        {#each toolInfos as toolInfo, key (key)}
          <ToolInfoView {toolInfo} />
        {/each}
      </div>
    </DataFetchBlock>

    <SectionSeparator />

    <StblLegacyToolsView />
  </div>
</section>

<style lang="scss">
  .tool-infos-wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
</style>
