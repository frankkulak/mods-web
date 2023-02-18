<script lang="ts">
  import LinkButton from "src/components/elements/LinkButton.svelte";
  import SectionHeader from "src/components/elements/SectionHeader.svelte";
</script>

<svelte:head>
  <title>Frankk | STBL Merger</title>
</svelte:head>

<section class="pt-16 flex-1 w-full flex justify-center">
  <div class="w-full xl:max-w-screen-xl px-4 flex flex-col justify-center">
    <div class="mb-4">
      <SectionHeader title="Here lies ye olde string table merger" />
    </div>
    <p>
      The string table merger had a good run, but it has been replaced by <a
        href="https://stbl.sims4toolkit.com"
        class="text-secondary">String Table Studio</a
      >.
    </p>
    <p class="mt-2 mb-8">
      If you wish to use the old merger, a copy is preserved at the link below.
    </p>
    <div class="flex flex-wrap gap-4">
      <LinkButton text="Back to Tools" href="#/tools" gradient={true} />
      <LinkButton
        text="Legacy Merger"
        href="https://legacy.frankkmods.com/#/ts4-tools/stbl-merger"
      />
    </div>
  </div>
</section>
