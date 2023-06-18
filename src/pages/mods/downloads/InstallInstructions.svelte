<script lang="ts">
  import ActionButton from "src/components/elements/ActionButton.svelte";
  import SectionHeader from "src/components/elements/SectionHeader.svelte";

  export let dismiss: () => void;
</script>

<div>
  <SectionHeader title="Installation Instructions" />

  <ul class="my-6 list-disc pl-5">
    <li>Download the mod from one of the listed links</li>
    <p class="text-sm text-subtle">
      If it is a ZIP file, you must <a
        class="text-secondary"
        href="https://support.microsoft.com/en-us/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc"
        target="_blank"
        rel="noreferrer">unzip it</a
      > before the next step
    </p>
    <li class="mt-2">
      Place the unzipped file(s) in your "The Sims 4 > Mods" folder
    </li>
    <p class="text-sm text-subtle">
      If the mod has a <code class="text-primary">.ts4script</code> file, do not
      place it more than one subfolder deep
    </p>
    <li class="mt-2">Ensure that custom content and script mods are enabled</li>
    <p class="text-sm text-subtle">
      Go to "Game Options > Other" in your game settings
    </p>
  </ul>

  <ActionButton text="Close" gradient={true} onClick={dismiss} width="120px" />
</div>
