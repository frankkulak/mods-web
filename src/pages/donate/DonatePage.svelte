<script lang="ts">
  import SectionSeparator from "src/components/elements/SectionSeparator.svelte";
  import PatreonView from "src/pages/donate/PatreonView.svelte";
</script>

<svelte:head>
  <title>Frankk | Donate</title>
</svelte:head>

<section class="pt-16 flex-1 w-full flex justify-center">
  <div class="py-16 w-full xl:max-w-screen-xl px-4">
    <PatreonView />
    <SectionSeparator />
    <div class="w-full flex flex-col items-center text-center">
      <h2 class="text-3xl drop-shadow font-bold text-sky-500 dark:text-sky-400">
        Support without commitment
      </h2>
      <p class="mt-2 text-subtle">Make a one-time donation on Ko-fi</p>
      <div class="mt-16 w-full text-center">
        <a
          class="inline-block zoom-on-hover hover:cursor-pointer drop-shadow-md"
          href="https://ko-fi.com/frankkulak"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="h-10"
            src="./assets/kofi-button-blue.png"
            alt="Support me on Ko-fi"
          />
        </a>
      </div>
    </div>
  </div>
</section>
