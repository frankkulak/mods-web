<script lang="ts">
  import ActionButton from "src/components/elements/ActionButton.svelte";
  import SectionHeader from "src/components/elements/SectionHeader.svelte";

  export let dismiss: () => void;
</script>

<div>
  <SectionHeader title="Terms of Use" />

  <div class="mt-6 flex items-center gap-2">
    <img
      class="svg-green h-6 w-6"
      src="./assets/icons/checkmark-circle.svg"
      alt="check"
    />
    <h2 class="text-xl font-bold text-green-600 dark:text-green-500">
      You may
    </h2>
  </div>
  <ul class="mt-2 list-disc pl-5">
    <li>Create and/or share content related to this mod</li>
    <p class="text-sm text-subtle">
      This includes articles and videos - just include a link to this website
    </p>
    <li class="mt-2">Reference the source code for use in your own mod</li>
    <p class="text-sm text-subtle">
      You do not need permission, but you must credit me
    </p>
  </ul>

  <div class="mt-6 flex items-center gap-2">
    <img
      class="svg-red h-6 w-6"
      src="./assets/icons/close-circle.svg"
      alt="cross"
    />
    <h2 class="text-xl font-bold text-red-500">You may NOT</h2>
  </div>
  <ul class="mt-2 mb-6 list-disc pl-5">
    <li>Re-upload this mod or any customized variations of it</li>
    <p class="text-sm text-subtle">
      If you want to share this mod, just post a link to this website
    </p>
    <li class="mt-2">Include this mod in public download folders</li>
    <p class="text-sm text-subtle">
      This counts as re-uploading, so just don't do it
    </p>
  </ul>

  <ActionButton text="Close" gradient={true} onClick={dismiss} width="120px" />
</div>
