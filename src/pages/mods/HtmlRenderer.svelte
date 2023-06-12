<script lang="ts">
  import { fade } from "svelte/transition";
  import { getModImageSrc, ModId } from "src/lib/data/mods";

  export let modId: ModId;
  export let htmlContent: string;

  let wrapper: HTMLDivElement;
  let previewingImageSrc: string;

  $: {
    if (htmlContent && wrapper) setHtmlContent();
  }

  function setHtmlContent() {
    // using innerHTML rather than {@html} because imgs need to be updated every
    // time htmlContent changes, and reactive blocks run before the HTML content
    // is actually generated
    wrapper.innerHTML = htmlContent;

    const imgs = wrapper.getElementsByTagName("img");
    if (!imgs) return;

    for (let i = 0; i < imgs.length; ++i) {
      const img = imgs[i];

      // set source
      const relSrc = img.attributes.getNamedItem("data-src");
      if (!relSrc?.value) return;
      img.src = getModImageSrc(modId, relSrc.value);

      // make clickable
      img.classList.add("hover:cursor-pointer");
      img.onclick = displayImage;
    }
  }

  function displayImage() {
    previewingImageSrc = this.src;
  }
</script>

<div bind:this={wrapper} class="html-renderer" />

{#if Boolean(previewingImageSrc)}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    in:fade
    class="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-gray-950 bg-opacity-90 dark:bg-opacity-90"
    on:click={() => (previewingImageSrc = undefined)}
  >
    <img
      class="h-3/4 w-11/12 object-contain drop-shadow-md"
      src={previewingImageSrc}
      alt="preview"
    />
    <p
      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-subtle drop-shadow-md text-center"
    >
      Click anywhere to close image preview
    </p>
  </div>
{/if}

<style lang="scss" global>
  // this must be global or else the class names get mangled, which does not
  // work with dynamically loaded HTML
  .html-renderer {
    h2 {
      color: var(--color-accent-secondary);
      font-size: 1.2rem;
      margin: {
        top: 1.5rem;
        bottom: 0.5rem;
      }
    }

    h4 {
      color: var(--color-text-subtle);
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    hr {
      margin-top: 1.5rem;
      border-color: var(--color-text-subtle);
    }

    a {
      color: var(--color-accent-secondary);
    }

    code {
      color: var(--color-accent);
    }

    ol {
      list-style-type: decimal;
      padding-left: 1.6rem;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.2rem;
    }

    li:not(:first-child) {
      margin-top: 0.3rem;
    }

    img.inline-svg {
      filter: var(--filter-svg);
      height: 1.1rem;
      margin: 0 2px;
      display: inline-block;
    }

    .paragraphs {
      p,
      ul {
        & + ul,
        & + p:not(.footnote) {
          margin-top: 0.5rem;
        }
      }
    }

    .collapse-split-view {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;
    }

    @media (max-width: 768px) {
      .collapse-split-view {
        flex-direction: column;
      }
    }

    .images-sm,
    .images-md,
    .images-lg {
      display: flex;
      align-items: center;
      gap: 1rem;
      overflow-x: auto;

      img {
        margin: auto;
        border-radius: 0.5rem;
        -webkit-box-shadow: 2px 2px 4px var(--color-shadow);
        box-shadow: 2px 2px 8px var(--color-shadow);
      }
    }

    img.feature {
      border-radius: 0.5rem;
      -webkit-box-shadow: 2px 2px 4px var(--color-shadow);
      box-shadow: 2px 2px 8px var(--color-shadow);
    }

    .images-sm img {
      height: 6rem;
    }

    .images-md img {
      height: 12rem;
    }

    .images-lg img {
      height: 24rem;
    }

    .footnote {
      color: var(--color-text-subtle);
      font-size: 0.85rem;
    }

    .danger {
      color: var(--color-danger);
    }
  }
</style>
