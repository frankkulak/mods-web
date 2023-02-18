<script lang="ts">
  import { saveAs } from "file-saver";
  import LinkButton from "src/components/elements/LinkButton.svelte";
  import SectionHeader from "src/components/elements/SectionHeader.svelte";

  const legacyTgiKey = "fkStblTool_FileTGI";
  const legacyContentsKey = "fkStblTool_FileContents";

  let legacyData = localStorage.getItem(legacyContentsKey);

  function downloadData() {
    const { t, g, i } = JSON.parse(localStorage.getItem(legacyTgiKey));
    saveAs(new Blob([legacyData]), `${t}!${g}!${i}.json`);
  }

  function deleteData() {
    if (
      confirm(
        "You are about to delete your existing STBL data. This cannot be undone. Are you sure you want to continue?"
      )
    ) {
      localStorage.removeItem(legacyTgiKey);
      localStorage.removeItem(legacyContentsKey);
      legacyData = null;
    }
  }
</script>

<svelte:head>
  <title>Frankk | STBL Editor</title>
</svelte:head>

<section class="pt-16 flex-1 w-full flex justify-center">
  <div class="w-full xl:max-w-screen-xl px-4 flex flex-col justify-center">
    <div class="mb-4">
      <SectionHeader title="Here lies ye olde string table editor" />
    </div>
    <p>
      The string table editor had a good run, but it has been replaced by <a
        href="https://stbl.sims4toolkit.com"
        class="text-secondary">String Table Studio</a
      >.
    </p>
    <p class="mt-2">
      If you wish to use the old editor, a copy is preserved at the link below.
    </p>
    <div class="my-8">
      {#if Boolean(legacyData)}
        <p class="text-subtle text-sm">
          It looks like there's a string table you were working on. You can <button
            class="text-secondary underline hover:no-underline"
            on:click={downloadData}>download it as a JSON</button
          > and upload it to STBL Studio.
        </p>
        <p class="mt-1 text-subtle text-sm">
          Done with your data? You can <button
            class="underline hover:no-underline text-red-500 dark:text-red-400"
            on:click={deleteData}>delete it</button
          >.
        </p>
      {:else}
        <p class="text-subtle text-sm">
          You do not have any data saved in the old editor.
        </p>
      {/if}
    </div>

    <div class="flex flex-wrap gap-4">
      <LinkButton text="Back to Tools" href="#/tools" gradient={true} />
      <LinkButton
        text="Legacy Editor"
        href="https://legacy.frankkmods.com/#/ts4-tools/stbl-editor"
      />
    </div>
  </div>
</section>
