<template>
    <div id="home-page" class="pb-5">
        <section id="welcome" class="dark-vars">
            <b-container fluid>
                <b-row align-h="center" align-v="center" class="py-4">
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
                                  size="sm" class="m-1" id="social-discord">Discord
                        </b-button>
                        <b-button href="https://twitter.com/frankkulakmods" target="_blank" variant="outline-primary"
                                  size="sm" class="m-1" id="social-twitter">Twitter
                        </b-button>
                        <b-button href="https://www.patreon.com/frankkulakmods" target="_blank"
                                  variant="outline-primary" size="sm" class="m-1" id="social-patreon">Patreon
                        </b-button>
                        <b-button href="https://ko-fi.com/frankkulak" target="_blank"
                                  variant="outline-primary" size="sm" class="m-1" id="social-kofi">Ko-fi
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <section id="home-content">
            <b-container fluid>
                <b-tabs pills fill align="center" class="pt-5">
                    <b-tab title="mods">
                        <mod-category header="available mods"
                                      description="These mods are currently available for download."
                                      :mods="activeMods"/>

                        <mod-category header="utility mods"
                                      description="These mods don't add anything on their own, but help other mods function properly."
                                      :mods="toolMods"/>

                        <mod-category header="work-in-progress mods"
                                      description="These mods are in development and are not yet available for download."
                                      :mods="wipMods"/>

                        <mod-category header="retired mods"
                                      description="These mods are no longer being maintained, and may be broken."
                                      :mods="retiredMods"/>
                    </b-tab>
                    <b-tab title="tutorials" lazy>
                        <b-container fluid>
                            <div class="py-5 text-center">
                                <h1>scripting tutorials</h1>
                                <p class="mx-0 mx-md-5">I've written some tutorials to help other modders with their
                                    scripts. Here's a list of them.</p>
                            </div>
                            <tutorial-preview :tutorial="tutorial" v-for="tutorial in tutorials" :key="tutorial.id"/>
                        </b-container>
                    </b-tab>
                </b-tabs>
            </b-container>
        </section>
    </div>
</template>

<script>
    import {DataEnums, ModData, TutorialData} from '../../modules/Data.js'
    import ModCategory from "./ModCategory";
    import TutorialPreview from "./TutorialPreview";

    const sortByName = (val1, val2) => {
        const val1Name = val1.name.toUpperCase();
        const val2Name = val2.name.toUpperCase();
        if (val1Name < val2Name) {
            return -1;
        } else if (val1Name > val2Name) {
            return 1;
        } else {
            return 0;
        }
    };

    const mods = Object.values(ModData.ts4).sort(sortByName);
    const tutorials = Object.values(TutorialData.ts4).sort(sortByName);

    export default {
        name: "HomePage",
        components: {TutorialPreview, ModCategory},
        data: function () {
            const {active, wip, retired, tool} = DataEnums.developmentStage;
            const isInDevStage = stage => (mod => mod.developmentStage === stage);
            return {
                activeMods: mods.filter(isInDevStage(active)),
                wipMods: mods.filter(isInDevStage(wip)),
                retiredMods: mods.filter(isInDevStage(retired)),
                toolMods: mods.filter(isInDevStage(tool)),
                tutorials: tutorials
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

                &#social-discord {
                    --brand-color: rgb(118, 139, 212);
                }

                &#social-twitter {
                    --brand-color: rgb(75, 161, 236);
                }

                &#social-patreon {
                    --brand-color: rgb(255, 66, 77);
                }

                &#social-kofi {
                    --brand-color: #FBAA19;
                }

                border-color: var(--brand-color);
                color: var(--brand-color);

                &:hover {
                    background-color: var(--brand-color);
                    color: white;
                }
            }
        }

        #home-content {
            li.nav-item {
                padding-right: 24px;

                &:last-child {
                    padding-right: 0;
                }

                a.nav-link, a.nav-link:hover, a.nav-link:focus {
                    text-decoration: none;
                    border-radius: 24px;
                    border-width: 1px;
                    border-style: solid;

                    &.active {
                        background-color: $dark-blue;
                        color: white;
                        border-color: white;
                    }
                }

                a.nav-link, a.nav-link:focus {
                    color: var(--link-color);
                    border-color: var(--link-color);
                }

                a.nav-link:hover {
                    color: $dark-blue;
                    border-color: $dark-blue;
                }
            }
        }
    }
</style>