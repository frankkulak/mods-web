<script lang="ts">
  import SectionHeader from "src/components/elements/SectionHeader.svelte";
  import LinkButton from "src/components/elements/LinkButton.svelte";
</script>

<div class="p-6 rounded-lg shadow-md w-full bg-gray-100 dark:bg-gray-900">
  <SectionHeader title="Looking for the STBL tools?" />

  <p class="mt-4 mb-2">
    The string table editor and merger have been retired in favor of <a
      class="text-secondary"
      href="https://stbl.sims4toolkit.com"
      target="_blank">String Table Studio</a
    >, but they are still available on a legacy website.
  </p>
  <p class="mb-8">
    If you had data saved in the old editor, you can download that now.
  </p>

  <div class="flex flex-wrap gap-4">
    <LinkButton
      text="Download Old Data"
      href="#/tools/stbl-editor"
      gradient={true}
    />
    <LinkButton
      text="Legacy Editor"
      href="https://legacy.frankkmods.com/#/ts4-tools/stbl-editor"
      target="_blank"
    />
    <LinkButton
      text="Legacy Merger"
      href="https://legacy.frankkmods.com/#/ts4-tools/stbl-merger"
      target="_blank"
    />
  </div>
</div>
