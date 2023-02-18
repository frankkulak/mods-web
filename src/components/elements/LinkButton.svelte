<script lang="ts">
  export let href: string;
  export let text: string;
  export let gradient = false;
  export let target: "_blank" | "_self" = "_self";
</script>

<a
  class="inline-block zoom-on-hover hover:cursor-pointer shadow rounded-full px-4 py-2 no-underline max-w-min whitespace-nowrap border-accent-secondary-light dark:border-accent-secondary-dark border-solid"
  class:border={!gradient}
  class:bg-gradient-invert={gradient}
  class:text-white={gradient}
  {href}
  {target}>{text}</a
>
