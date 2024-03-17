<script lang="ts">
  import { onMount } from "svelte";
  import { fetchPatreonData, PatreonData } from "src/lib/data/patreon";
  import PatreonTierView from "src/pages/donate/PatreonTierView.svelte";
  import Notification from "src/components/elements/Notification.svelte";
  import DataFetchBlock from "src/components/layout/DataFetchBlock.svelte";

  let patreonData: PatreonData;
  let fetchError = false;
  let dismissNotif = false;
  $: dataFetched = Boolean(patreonData);
  $: showNotif = dataFetched && !patreonData.earlyAccess && !dismissNotif;

  onMount(() => {
    fetchData();
  });

  function fetchData() {
    fetchError = false;

    fetchPatreonData()
      .then((data) => {
        patreonData = data;
      })
      .catch((err) => {
        console.error(err);
        fetchError = true;
      });
  }
</script>

<div class="mb-16 w-full flex flex-col items-center text-center">
  <img
    class="h-20 drop-shadow-md"
    src="./assets/patreon-wordmark.png"
    alt="Patreon"
  />
  <p class="mt-2 text-subtle">Monthly pledge in exchange for benefits</p>
</div>

<DataFetchBlock {dataFetched} {fetchError} retryFetch={fetchData}>
  <div class="w-full">
    <div class="mb-6 w-full flex flex-wrap gap-4 justify-center">
      {#each patreonData.tiers as tierInfo, key (key)}
        <PatreonTierView {tierInfo} />
      {/each}
    </div>
    {#each patreonData.billingDisclaimers as billingDisclaimer, key (key)}
      <p class="mt-2 text-center text-xs text-subtle">
        {billingDisclaimer}
      </p>
    {/each}
  </div>
</DataFetchBlock>

<div class="mt-16 w-full flex justify-center">
  <a
    class="py-2 px-4 zoom-on-hover hover:cursor-pointer drop-shadow-md no-underline whitespace-nowrap bg-brand-patreon rounded-md flex items-center gap-4"
    href="https://www.patreon.com/bePatron?u=40823163"
    target="_blank"
    rel="noreferrer"
  >
    <img class="h-6" src="./assets/patreon-logo.png" alt="Patreon" />
    <p class="text-gray-100">Become a Patron</p>
  </a>
</div>

{#if showNotif}
  <Notification
    text="No mods are currently in early access"
    buttonText="GOT IT"
    buttonColorClass="text-brand-patreon"
    onButtonClick={() => (dismissNotif = true)}
  />
{/if}
