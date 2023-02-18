<script lang="ts">
  import { scale } from "svelte/transition";
  import SectionSeparator from "src/components/elements/SectionSeparator.svelte";
  import HeaderBlockLink from "src/pages/home/HeaderBlockLink.svelte";
  import ContactView from "src/components/views/ContactView.svelte";
  import FeaturedSection from "./FeaturedSection.svelte";
</script>

<svelte:head>
  <title>Frankk's TS4 Mods</title>
</svelte:head>

<section class="flex-1 w-full flex flex-col items-center">
  <div class="pt-16 w-full flex justify-center bg-gradient-invert shadow-md">
    <div
      class="my-10 w-full xl:max-w-screen-xl px-4 flex flex-col justify-center items-center gap-10"
    >
      <div in:scale class="text-center">
        <h1 class="mb-4 text-4xl font-bold text-white drop-shadow-md">
          Hey, I'm Frankk!
        </h1>
        <p class="text-white drop-shadow text-opacity-70">
          I make mods and modding tools for The Sims 4
        </p>
      </div>
      <div class="flex-1 flex flex-wrap justify-center gap-8">
        <HeaderBlockLink
          text="Browse Mods"
          icon="game-controller"
          href="#/mods"
        />
        <HeaderBlockLink text="Browse Tools" icon="hammer" href="#/tools" />
      </div>
    </div>
  </div>
  <div class="w-full py-16 px-4 xl:max-w-screen-xl flex flex-col items-center">
    <FeaturedSection />
    <SectionSeparator />
    <ContactView />
  </div>
</section>
