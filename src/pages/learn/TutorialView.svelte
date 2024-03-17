<script lang="ts">
  import type { TutorialInfo } from "src/lib/data/tutorials";

  export let tutorialInfo: TutorialInfo;
  export let colorClass: string;
</script>

<a
  class="no-underline zoom-on-hover-sm"
  href={tutorialInfo.href}
  target="_blank"
  rel="noreferrer"
>
  <div
    class="h-full flex flex-col rounded-lg shadow-md bg-gray-100 dark:bg-gray-900"
  >
    <div class="px-6 py-1 rounded-t-lg {colorClass}">
      <h2 class="text-lg font-bold text-gray-100 dark:text-gray-900">
        {tutorialInfo.title}
      </h2>
    </div>
    <div class="h-full px-6 py-4 flex flex-col justify-between">
      <p class="mb-4">{tutorialInfo.text}</p>
      <p class="text-sm text-subtle">
        Available on {tutorialInfo.platform}
      </p>
    </div>
  </div>
</a>

<style lang="scss">
  a {
    min-width: 320px;
    max-width: 100%;
  }
</style>
