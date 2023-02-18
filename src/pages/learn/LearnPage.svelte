<script lang="ts">
  import { onMount } from "svelte";
  import { TutorialsData, fetchTutorialsData } from "src/lib/data/tutorials";
  import TutorialView from "src/pages/learn/TutorialView.svelte";
  import SectionSeparator from "src/components/elements/SectionSeparator.svelte";
  import DataFetchBlock from "src/components/layout/DataFetchBlock.svelte";

  const sectionClasses = [
    "bg-emerald-500 dark:bg-emerald-400",
    "bg-sky-500 dark:bg-sky-400",
    "bg-purple-500 dark:bg-purple-400",
    "bg-amber-500 dark:bg-amber-400",
  ];

  let tutorialData: TutorialsData;
  let fetchError = false;

  onMount(() => {
    fetchData();
  });

  function fetchData() {
    fetchError = false;

    fetchTutorialsData()
      .then((data) => {
        tutorialData = data;
      })
      .catch((err) => {
        console.error(err);
        fetchError = true;
      });
  }
</script>

<svelte:head>
  <title>Frankk | Learn</title>
</svelte:head>

<section class="pt-16 flex-1 w-full flex justify-center">
  <div class="py-16 px-4 w-full xl:max-w-screen-xl">
    <DataFetchBlock
      dataFetched={Boolean(tutorialData)}
      {fetchError}
      retryFetch={fetchData}
    >
      <div class="w-full">
        {#each tutorialData.categories as category, cKey (cKey)}
          {#if cKey !== 0}
            <SectionSeparator />
          {/if}
          <div class="flex flex-col sm:flex-row items-center gap-2">
            <h1 class="font-bold text-2xl text-center sm:text-left">
              {category.title}
            </h1>
            <p class="text-subtle text-lg hidden sm:inline-block">•</p>
            <p class="text-subtle text-lg text-center sm:text-left">
              {category.text}
            </p>
          </div>
          <div class="mt-10 tutorials-wrapper">
            {#each category.tutorials as tutorialInfo, tKey (tKey)}
              <TutorialView
                {tutorialInfo}
                colorClass={sectionClasses[cKey % sectionClasses.length]}
              />
            {/each}
          </div>
        {/each}
      </div>
    </DataFetchBlock>
  </div>
</section>

<style lang="scss">
  .tutorials-wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
</style>
