<template>
    <b-container id="about-page" class="py-5 px-4" fluid>
        <b-row align-v="center" align-h="center">
            <b-col cols="12" md="4" lg="3" class="text-center my-3">
                <img src="../../assets/ts4/profilepic.png" alt="Frankk Simself" class="simself"/>
            </b-col>
            <b-col cols="12" md="8" lg="9" class="my-3">
                <section-header text="Hey, I'm Frankk!" class="mb-3"/>
                <p>I'm a programmer and linguist who makes gameplay mods for The Sims 4. My experience with software
                    development and lifelong interest in The Sims is what got me into modding, and my most popular mod
                    <em>
                        <router-link to="/ts4/languagebarriers">Language Barriers</router-link>
                    </em> was inspired by my
                    background in linguistics.
                </p>
            </b-col>
        </b-row>

        <b-row class="mt-5">
            <b-col cols="12" class="contact-card p-4">
                <h3>Be in the know</h3>
                <p>See what I'm up to on Twitter and join my Discord server to be notified whenever I have an update to
                    share.</p>

                <h3 class="mt-4">Get in touch</h3>
                <p>Reach out to me on Discord to ask questions, make suggestions, report issues, or just to chat - I'd
                    love to get to know you!</p>

                <h3 class="mt-4">Support me, if you want</h3>
                <p>I make mods because it's something I enjoy doing, and I'm more than happy to share them with you for
                    free. However, they take a <em>lot</em> of work, and a <em>lot</em> of time - so, if you're willing
                    and able to support me on Patreon, it would be greatly appreciated (plus, you'll get some
                    <a href="#/patreon">nice benefits</a> as well!). If you want to make a one-time donation, you can do
                    so on Ko-fi. Thank you!</p>

                <b-row align-v="center" align-h="center">
                    <b-col cols="auto" class="p-1">
                        <b-button href="https://twitter.com/frankkulakmods" target="_blank" variant="outline-primary"
                                  size="md" class="m-1 twitter">Twitter
                        </b-button>
                    </b-col>
                    <b-col cols="auto" class="p-1">
                        <b-button href="https://discord.gg/qNhD3Jh" target="_blank" variant="outline-primary"
                                  size="md" class="m-1 discord">Discord
                        </b-button>
                    </b-col>
                    <b-col cols="auto" class="p-1">
                        <b-button href="https://www.patreon.com/frankkulakmods" target="_blank"
                                  variant="outline-primary" size="md" class="m-1 patreon">Patreon
                        </b-button>
                    </b-col>
                    <b-col cols="auto" class="p-1">
                        <b-button href="https://ko-fi.com/frankkulak" target="_blank"
                                  variant="outline-primary" size="md" class="m-1 ko-fi">Ko-fi
                        </b-button>
                    </b-col>
                </b-row>

                <hr class="my-4">

                <p>Business inquiry? Email me at <a href="mailto:contact@frankkmods.com">contact@frankkmods.com</a>
                    with any questions or opportunities you have. Please do not use my email for mod support - that is
                    what Discord is for.</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import SectionHeader from "../Common/SectionHeader";

    export default {
        name: "AboutPage",
        components: {SectionHeader}
    }
</script>

<style lang="scss">
    #about-page {
        img.simself {
            border-radius: 50%;
            height: 160px;
            width: auto;
        }

        .contact-card {
            @extend %floating-card;
            background-color: var(--card-bg-color);
        }

        a.btn, a.btn-outline-primary {
            text-decoration: none;
            border-color: var(--link-color);
            color: var(--link-color);

            &:hover {
                @extend %default-gradient;
                color: white;
            }
        }
    }
</style>