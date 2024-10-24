<script lang="ts">
  import { fly } from "svelte/transition";
  import SectionHeader from "../elements/SectionHeader.svelte";

  export let onClose: () => void;
</script>

<div
  class="fixed bottom-4 left-4 right-4 z-50 p-4 bg-slate-50 dark:bg-slate-800 drop-shadow-lg border-dashed border-2 border-red-500 dark:border-red-400 rounded-lg"
  out:fly={{ y: 100, duration: 500 }}
>
  <button class="absolute top-2 right-2" on:click={onClose}
    ><img src="./assets/icons/close.svg" alt="X" class="svg h-8 w-8" /></button
  >
  <div>
    <div class="flex items-center gap-4 mb-4">
      <img
        src="./assets/flags/united-states.png"
        alt="🇺🇸"
        class="inline h-8 drop-shadow-lg rounded-full"
      />
      <SectionHeader title="Ready to vote?" />
    </div>
    <p>
      Election day is Tuesday, November 5th, 2024. Register to vote at <a
        href="https://vote.gov/"
        target="_blank"
        rel="noreferrer"
        class="text-secondary">vote.gov</a
      >.
    </p>
    <p class="text-subtle text-sm">
      You must be a U.S. citizen at least 18 years old to participate in U.S.
      elections.
    </p>
  </div>
</div>
