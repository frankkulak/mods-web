<script lang="ts">
  import ColoredLinkBlock from "src/components/views/ColoredLinkBlock.svelte";
</script>

<div>
  <div class="mb-16 text-center">
    <p class="text-lg text-subtle mb-4">Need help? Just wanna chat?</p>
    <h2 class="text-3xl font-bold">Let's get in touch!</h2>
  </div>

  <div class="flex flex-wrap justify-center gap-8 text-center">
    <ColoredLinkBlock
      title="Bluesky"
      text="Read my latest updates"
      icon="logo-bluesky"
      href="https://bsky.app/profile/frankkulak.bsky.social"
      bgClass="bg-brand-bluesky"
    />
    <ColoredLinkBlock
      title="Discord"
      text="Get help with mods/tools"
      icon="logo-discord"
      href="https://discord.gg/qNhD3Jh"
      bgClass="bg-brand-discord"
    />
    <ColoredLinkBlock
      title="Patreon"
      text="Support my work"
      icon="logo-patreon-black"
      href="https://patreon.frankkmods.com/"
      bgClass="bg-brand-patreon"
    />
    <ColoredLinkBlock
      title="Email"
      text="Business inquiries only"
      icon="mail"
      href="mailto:contact@frankkmods.com"
      bgClass="bg-pink-500"
    />
  </div>
</div>
