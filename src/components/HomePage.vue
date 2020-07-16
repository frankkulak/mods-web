<template>
    <b-container id="home-page" fluid>
        <b-row id="welcome" align-h="center">
            <b-col cols="12" md="10" lg="8">
                <h1>welcome</h1>
                <p>My name is Frank, and I make mods for The Sims 4. I share them on this website - you can browse
                    through them below, and click their cards to learn more.</p>
            </b-col>
        </b-row>

        <b-row id="mods" align-h="center">
            <b-col cols="12" sm="8" md="5" lg="4" v-for="(mod, index) in mods" :key="index">
                <mod-preview :mod="mod"></mod-preview>
            </b-col>
        </b-row>

        <b-row id="contact" align-h="center">
            <b-col cols="12" md="10" lg="8">
                <h1>contact</h1>
                <p>email: <a href="mailto:mods@frankkulak.com">mods@frankkulak.com</a></p>
                <p>Feel free to report issues, ask questions, or provide feedback about my current mods, but please
                    refrain from sending mod requests.</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {ModData} from '../modules/Data.js'
    import ModPreview from "./ModPreview";

    export default {
        name: "HomePage",
        components: {ModPreview},
        computed: {
            mods: function () {
                return Object.values(ModData.ts4).sort((mod1, mod2) => {
                    const modName1 = mod1.name.toUpperCase();
                    const modName2 = mod2.name.toUpperCase();
                    if (modName1 < modName2) {
                        return -1;
                    } else if (modName1 > modName2) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
    #home-page {
        h1, p {
            margin-bottom: $padding-md;

            &:last-child {
                margin-bottom: 0;
            }
        }

        #welcome {
            padding-top: $padding-lg;
            padding-bottom: 0;
        }

        #mods {
            padding-top: $padding-lg - $padding-sm;
            padding-bottom: $padding-lg - $padding-sm;

            [class^="col"] {
                margin: {
                    top: $padding-sm;
                    bottom: $padding-sm;
                }
            }
        }

        #contact {
            background-color: var(--bg-band-overlay);
            padding-top: $padding-lg;
            padding-bottom: $padding-lg;
        }
    }
</style>