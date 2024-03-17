<script lang="ts">
  import { fetchGameData } from "src/lib/data/game";
  import type { ModStatus } from "src/lib/data/mods";

  export let status: ModStatus;
  export let earlyAccess: boolean;

  let colorClasses: string;
  let text: string = "Loading...";

  let patchDate = "last";
  fetchGameData()
    .then((data) => {
      patchDate = data.versionInfo?.releaseDate ?? "last";
    })
    .finally(() => {
      if (earlyAccess) {
        colorClasses = "bg-pink-600 text-pink-100 ";
        text = "Early Access";
      } else {
        switch (status) {
          case "working":
            colorClasses = "bg-green-600 text-green-100 ";
            text = `Working with ${patchDate} patch`;
            break;
          case "untested":
            colorClasses = "bg-yellow-400 text-yellow-900 ";
            text = `Untested with ${patchDate} patch`;
            break;
          case "broken":
            colorClasses = "bg-red-600 text-red-100 ";
            text = `Broken with ${patchDate} patch`;
            break;
          case "unreleased":
            colorClasses = "bg-blue-600 text-blue-100 ";
            text = "Work in progress";
            break;
          default:
            colorClasses = "bg-gray-600 text-gray-100 ";
            text = status;
        }
      }
    });
</script>

<p
  class="px-3 py-1 max-w-min max-h-min flex gap-2 items-center whitespace-nowrap rounded-full shadow text-xs {colorClasses}"
>
  {text}
</p>
