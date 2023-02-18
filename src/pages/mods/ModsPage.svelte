<script lang="ts">
  import { onMount } from "svelte";
  import { fetchModIndex } from "src/lib/data/mods";
  import type { ModIndex, ModIndexDisplayData } from "src/lib/data/mods";
  import DataFetchBlock from "src/components/layout/DataFetchBlock.svelte";
  import ModIndexView from "src/pages/mods/ModIndexView.svelte";
  import ActionButton from "src/components/elements/ActionButton.svelte";

  //#region Types

  interface WrappedModData {
    id: string;
    data: ModIndexDisplayData;
  }

  //#endregion

  //#region Variables

  const buttonWidth = "160px";

  let modIndex: ModIndex;
  let fetchError = false;
  let chosenCategoryIndex = 0;
  let allMods: WrappedModData[];
  let modsToDisplay: WrappedModData[];

  $: dataFetched = Boolean(modIndex);

  $: {
    chosenCategoryIndex;
    if (dataFetched) {
      allMods = getAllMods();
      modsToDisplay = getCurrentMods();
    }
  }

  //#endregion

  //#region Lifecycle

  onMount(() => {
    fetchData();
  });

  //#endregion

  //#region Functions

  function fetchData() {
    fetchError = false;

    fetchModIndex()
      .then((data) => {
        modIndex = data;
      })
      .catch((err) => {
        console.error(err);
        fetchError = true;
      });
  }

  function getAllMods(): WrappedModData[] {
    return modIndex.allMods.map(getWrappedModData).sort(modSorter);
  }

  function getCurrentMods(): WrappedModData[] {
    return chosenCategoryIndex === 0
      ? allMods
      : modIndex.categories[chosenCategoryIndex - 1].modIds
          .map(getWrappedModData)
          .sort(modSorter);
  }

  function getWrappedModData(modId: string): WrappedModData {
    return {
      id: modId,
      data: modIndex.displayData[modId],
    };
  }

  function modSorter(a: WrappedModData, b: WrappedModData): number {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    const aReleased = a.data.status !== "unreleased";
    const bReleased = b.data.status !== "unreleased";
    if (aReleased !== bReleased) return aReleased ? -1 : 1;
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  }

  //#endregion
</script>

<svelte:head>
  <title>Frankk | Mods</title>
</svelte:head>

<section class="pt-16 flex-1 w-full flex justify-center">
  <div class="py-16 w-full xl:max-w-screen-xl px-4">
    <DataFetchBlock {dataFetched} {fetchError} retryFetch={fetchData}>
      <div class="w-full">
        <div class="mb-8 flex flex-wrap justify-center gap-4">
          <ActionButton
            text="All"
            gradient={chosenCategoryIndex === 0}
            onClick={() => (chosenCategoryIndex = 0)}
            width={buttonWidth}
            hoverBehavior="highlight"
          />
          {#each modIndex.categories as category, key (key)}
            <ActionButton
              text={category.title}
              gradient={chosenCategoryIndex === key + 1}
              onClick={() => (chosenCategoryIndex = key + 1)}
              width={buttonWidth}
              hoverBehavior="highlight"
            />
          {/each}
        </div>
        <p class="mb-16 text-sm text-subtle text-center">
          Showing {modsToDisplay.length} of {allMods.length} mods
        </p>

        <ModIndexView mods={modsToDisplay} />
      </div>
    </DataFetchBlock>
  </div>
</section>
