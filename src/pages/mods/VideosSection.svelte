<script lang="ts">
  import type { ModVideo } from "src/lib/data/mods";

  export let modName: string;
  export let videos: ModVideo[];
</script>

<div class="p-6 w-full bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
  <div class="flex items-center gap-4">
    <img class="svg h-6 w-6" src="./assets/icons/videocam.svg" alt="videocam" />
    <h2 class="text-xl font-bold">Videos</h2>
  </div>
  <p class="my-4">
    Wanna see {modName} in action? Check out these videos!
  </p>
  <div class="videos-container w-full flex flex-wrap gap-2">
    {#each videos as video, key (key)}
      <a
        class="block no-underline p-2 bg-gray-200 dark:bg-gray-800 rounded-lg border-2 border-solid border-transparent hover:border-accent-secondary-light dark:hover:border-accent-secondary-dark"
        href={video.href}
        target="_blank"
        rel="noreferrer"
        title={video.name}
      >
        <h2 class="overflow-hidden whitespace-nowrap text-ellipsis">
          {video.name}
        </h2>
        <p class="text-sm text-subtle">
          by {video.creator} on {video.platform}
        </p>
      </a>
    {/each}
  </div>
  <p class="mt-4 text-sm text-subtle">
    These videos do not belong to me and may contain outdated information.
  </p>
</div>

<style lang="scss">
  .videos-container {
    $cell-width: 300px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($cell-width, 1fr));

    & > a {
      min-width: $cell-width;
      max-width: 100%;
    }
  }
</style>
