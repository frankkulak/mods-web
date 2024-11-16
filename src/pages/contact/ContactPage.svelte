<script lang="ts">
  import SectionSeparator from "src/components/elements/SectionSeparator.svelte";
  import ContactView from "src/components/views/ContactView.svelte";
</script>

<svelte:head>
  <title>Frankk | Contact</title>
</svelte:head>

<section class="pt-16 flex-1 w-full flex justify-center">
  <div class="py-16 w-full xl:max-w-screen-xl px-4 flex flex-col items-center">
    <div class="flex flex-col justify-center sm:flex-row items-center gap-10">
      <img
        class="rounded-full drop-shadow h-40 w-40"
        src="./assets/simself.png"
        alt="Simself"
      />
      <div class="text-center sm:text-left">
        <h1 class="text-3xl text-gradient font-bold drop-shadow-md">
          Hey, I'm Frank!
        </h1>
        <p class="mt-4 text-subtle">
          I make mods and modding tools for The Sims 4
        </p>
      </div>
    </div>
    <SectionSeparator />
    <ContactView />
  </div>
</section>
