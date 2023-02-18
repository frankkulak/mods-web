<script lang="ts">
  export let text: string;
  export let gradient = false;
  export let onClick: () => void;
  export let width: string = "auto";
  export let hoverBehavior: "zoom" | "highlight" = "zoom";
</script>

<button
  class="inline-block hover:cursor-pointer shadow rounded-full px-4 py-2 no-underline whitespace-nowrap border-accent-secondary-light dark:border-accent-secondary-dark border-solid"
  class:border={!gradient}
  class:bg-gradient-invert={gradient}
  class:text-white={gradient}
  class:zoom-on-hover={hoverBehavior === "zoom"}
  class:hover:bg-gray-300={!gradient && hoverBehavior === "highlight"}
  class:hover:dark:bg-gray-700={!gradient && hoverBehavior === "highlight"}
  style="width: {width};"
  on:click={onClick}>{text}</button
>
