<script lang="ts">
  export let title: string;
  export let text: string;
  export let icon: string;
  export let href: string;
  export let bgClass: string;
  export let target: "_blank" | "_self" = "_blank";
</script>

<a
  class="zoom-on-hover no-underline hover:cursor-pointer w-full sm:w-60"
  {href}
  {target}
>
  <div class="py-6 {bgClass} rounded-md shadow-md w-full">
    <div class="flex gap-4 items-center justify-center">
      <img
        class="svg-light w-8 h-8"
        src="./assets/icons/{icon}.svg"
        alt="icon"
      />
      <h4 class="text-xl text-white">{title}</h4>
    </div>
    <p class="mt-4 text-sm text-white opacity-70">{text}</p>
  </div>
</a>
