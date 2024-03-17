<script lang="ts">
  import LinkButton from "src/components/elements/LinkButton.svelte";
</script>

<div class="w-full">
  <div class="mb-8 flex items-center gap-4">
    <img
      class="svg-gold h-8 w-8"
      src="./assets/icons/sparkles.svg"
      alt="Star"
    />
    <h2 class="text-2xl font-bold">Featured</h2>
  </div>
  <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-8">
    <div class="flex-1 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
      <div class="flex items-center gap-4">
        <img
          class="h-10 w-10 object-contain"
          src="./assets/lb-icon.png"
          alt="LB"
        />
        <h2 class="text-2xl font-bold">Language Barriers</h2>
      </div>
      <p class="mt-4 mb-6">Mod that adds languages to the game</p>
      <div class="flex gap-4">
        <LinkButton
          href="#/mods/language-barriers"
          text="Details & Download"
          gradient={true}
        />
      </div>
    </div>
    <div class="flex-1 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
      <div class="flex items-center gap-4">
        <img
          class="h-10 w-10 object-contain"
          src="./assets/s4tk-transparent.png"
          alt="S4TK"
        />
        <h2 class="text-2xl font-bold s4tk-text-gradient">Sims 4 Toolkit</h2>
      </div>
      <p class="mt-4 mb-6">Suite of modern modding tools</p>
      <div class="flex gap-4">
        <LinkButton href="#/tools" text="S4TK Tools" gradient={true} />
        <LinkButton
          href="https://sims4toolkit.com"
          text="Library Docs"
          target="_blank"
        />
      </div>
    </div>
  </div>
</div>
