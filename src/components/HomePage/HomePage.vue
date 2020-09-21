<template>
    <div id="home-page" class="pb-5">
        <section id="welcome" class="dark-vars">
            <b-container fluid>
                <b-row align-h="center" align-v="center" class="py-5">
                    <b-col cols="12" sm="3" md="2" class="text-center">
                        <img src="../../assets/ts4/profilepic.png" alt="Simself" class="my-auto"/>
                    </b-col>
                    <b-col cols="12" sm="9" md="8" class="py-4 py-sm-0 text-center text-sm-left">
                        <h1>Frank's TS4 Mods</h1>
                        <p>I'm Frank, and I make mods for The Sims 4 - you can browse and download them from below.
                            Please send bug reports, questions, and suggestions to my Discord server.</p>
                    </b-col>
                    <b-col cols="12" md="2" class="text-center mt-0 mt-sm-4 mt-md-0">
                        <b-button href="https://discord.gg/qNhD3Jh" target="_blank" variant="outline-primary"
                                  size="sm" class="discord m-1">Discord
                        </b-button>
                        <b-button href="https://twitter.com/frankkulakmods" target="_blank" variant="outline-primary"
                                  size="sm" class="twitter m-1">Twitter
                        </b-button>
                        <b-button href="https://www.patreon.com/frankkulakmods" target="_blank"
                                  variant="outline-primary" size="sm" class="patreon m-1">Patreon
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <section id="mods" class="px-4">
            <mod-category header="available mods"
                          description="These mods are ready to be downloaded."
                          :mods="activeMods"/>

            <mod-category header="work-in-progress mods"
                          description="These mods are currently in development."
                          :mods="wipMods"/>

            <mod-category header="retired mods"
                          description="These mods are no longer being maintained."
                          :mods="retiredMods"/>
        </section>
    </div>
</template>

<script>
    import {Constants, ModData} from '../../modules/Data.js'
    import ModCategory from "./ModCategory";

    const mods = Object.values(ModData.ts4).sort((mod1, mod2) => {
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

    export default {
        name: "HomePage",
        components: {ModCategory},
        data: function () {
            const {active, wip, retired} = Constants.developmentStage;
            const isInDevStage = stage => (mod => mod.developmentStage === stage);
            return {
                activeMods: mods.filter(isInDevStage(active)),
                wipMods: mods.filter(isInDevStage(wip)),
                retiredMods: mods.filter(isInDevStage(retired)),
            }
        }
    }
</script>

<style lang="scss">
    #home-page {
        #welcome {
            img {
                width: 100%;
                max-width: 100px;
                height: auto;
                border-radius: 50%;
            }

            a.btn-outline-primary {
                width: 100%;
                max-width: 128px;
                text-decoration: none;

                &.discord {
                    --brand-color: rgb(118, 139, 212);
                }

                &.twitter {
                    --brand-color: rgb(75, 161, 236);
                }

                &.patreon {
                    --brand-color: rgb(255, 66, 77);
                }

                border-color: var(--brand-color);
                color: var(--brand-color);

                &:hover {
                    background-color: var(--brand-color);
                    color: white;
                }
            }
        }
    }
</style>