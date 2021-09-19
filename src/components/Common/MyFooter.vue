<template>
    <section id="footer" class="text-center py-5 px-2">
        <p class="socials">
            <a href="https://twitter.com/frankkulakmods" target="_blank" class="twitter">Twitter</a> |
            <a href="https://discord.gg/qNhD3Jh" target="_blank" class="discord">Discord</a> |
            <a href="https://www.patreon.com/frankkulakmods" target="_blank" class="patreon">Patreon</a> |
            <a href="https://ko-fi.com/frankkulak" target="_blank" class="ko-fi">Ko-fi</a>
        </p>
        <p>All content on this website is my own and is not affiliated with EA, Maxis, or The Sims franchise.</p>
    </section>
</template>

<script>
export default {
    name: "MyFooter"
}
</script>

<style lang="scss">
#footer {
    background-color: var(--footer-color);

    a {
        &.twitter {
            color: $twitter;
        }

        &.discord {
            color: $discord;
        }

        &.ko-fi {
            color: $ko-fi;
        }

        &.patreon {
            color: $patreon;
        }
    }

    p {
        color: white;
    }
}
</style>
