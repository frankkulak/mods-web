<template>
    <div id="mod-page">
        <router-link id="home-button" class="px-3 py-2" to="/">&larr; more mods</router-link>

        <section id="mod-header">
            <b-container class="pt-5" fluid>
                <mod-status-alert :mod="mod"/>

                <b-row align-h="center" align-v="center" class="mt-5">
                    <b-col cols="12" sm="6" class="text-center">
                        <h1>{{ mod.name }}</h1>
                        <p class="version" v-html="versionText"></p>
                        <p class="description" v-html="mod.description"></p>
                    </b-col>

                    <b-col cols="12" sm="6" class="py-4">
                        <mod-image-carousel :mod="mod"/>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <section id="mod-detail-tabs">
            <b-container fluid>
                <b-tabs fill justified class="py-5">
                    <mod-details-tab v-for="tab in detailTabs" :key="tab.title" :title="tab.title" :items="tab.items"/>
                </b-tabs>
            </b-container>
        </section>

        <section id="mod-download" class="dark-vars py-5">
            <b-container fluid>
                <h1 class="w-100 text-center mb-5">download</h1>

                <div v-if="isWip" class="text-center">
                    <p>As this mod is a work-in-progress, it is not yet available for download.</p>
                    <p>If you would like updates on its development, feel free to join
                        <a href="https://discord.gg/qNhD3Jh" target="_blank">my Discord server</a>.</p>
                </div>
                <div v-else>
                    <h3>installation instructions</h3>
                    <ul class="mb-4">
                        <li>Download the .zip folder from the link below.</li>
                        <li>Unzip the folder and place it in your "The Sims 4 > Mods" directory.</li>
                        <li>In-game, ensure that "Game Options > Other > Enable Custom Content and Mods" is checked.
                        </li>
                    </ul>

                    <h3>terms of use</h3>
                    <ul class="mb-5">
                        <li>Do not share or distribute this mod without crediting me - a link to this website is
                            sufficient.
                        </li>
                        <li>If you would like to provide a translation for this mod, please let me know. I welcome and
                            encourage translations, but I do not appreciate re-posting of my work without permission.
                        </li>
                        <li>I am not responsible for the misuse of this mod (e.g. using it with conflicting mods or when
                            it is out-of-date).
                        </li>
                        <li>I am free to stop supporting this mod at any time for any reason.</li>
                    </ul>

                    <div class="w-100 text-center">
                        <div>
                            <a :href="mod.primaryDownload.url" target="_blank" class="btn btn-outline-primary">
                                Download from {{ mod.primaryDownload.title }}
                            </a>
                        </div>

                        <b-button size="sm" @click="showAltDownloads = true" class="mt-3"
                                  v-if="mod.alternativeDownloads.length > 0 && !showAltDownloads">
                            {{ mod.primaryDownload.title }} not working?
                        </b-button>

                        <div v-if="showAltDownloads">
                            <a v-for="download in mod.alternativeDownloads" :key="download.title" :href="download.url"
                               target="_blank" class="btn btn-outline-primar mt-3">
                                Download from {{ download.title }}
                            </a>
                        </div>
                    </div>
                </div>
            </b-container>
        </section>
    </div>
</template>

<script>
    import {DataEnums, ModData} from '../../modules/Data.js'
    import ModStatusAlert from "./ModStatusAlert";
    import ModImageCarousel from "./ModImageCarousel";
    import ModDetailsTab from "./ModDetailsTab";

    export default {
        name: "ModPage",
        components: {ModStatusAlert, ModImageCarousel, ModDetailsTab},
        data: function () {
            return {
                mod: ModData[this.$route.params.game][this.$route.params.mod],
                showAltDownloads: false,
            }
        },
        computed: {
            isWip: function () {
                return this.mod.developmentStage === DataEnums.developmentStage.wip;
            },
            versionText: function () {
                try {
                    if (!this.isWip) {
                        const {version, date} = this.mod.versionHistory[0];
                        return `v${version} • ${date}`;
                    } else if (this.mod.releaseDate !== null) {
                        return `expected by ${this.mod.releaseDate}`;
                    } else {
                        return `in development`;
                    }
                } catch (e) {
                    console.log(e);
                    return "version unknown";
                }

            },
            detailTabs: function () {
                let tabs = [];

                const {overview, details, versionHistory} = this.mod;
                if (overview !== null && overview.length > 0) tabs.push({title: "overview", items: overview});
                if (details !== null && details.length > 0) tabs.push({title: "details", items: details});
                if (versionHistory !== null && versionHistory.length > 0) {
                    tabs.push({
                        title: "history",
                        items: versionHistory.map(({version, date, bullets}) => {
                            return {
                                title: `${version} (${date})`,
                                bullets: bullets
                            }
                        })
                    });
                }

                return tabs;
            },
        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            $route(to, from) {
                this.mod = ModData[to.params.game][to.params.mod]
            },
        },
    }
</script>

<style lang="scss">
    #mod-page {
        #home-button {
            background-color: $dark-blue;
            color: var(--link-color);
            border: 1px solid white;
            border-radius: 20px;
            box-shadow: 0 4px 8px var(--shadow-color);
            transition: all ease 200ms;
            z-index: 1020;
            position: fixed;
            left: 12px;
            top: 12px;
            text-decoration: none;

            &:hover {
                top: 8px;
                box-shadow: 0 5px 15px var(--shadow-color);
            }
        }

        #mod-header {
            // intentionally blank
        }

        #mod-detail-tabs {
            .nav-link {
                text-decoration: none;
                border-bottom: 1px solid var(--shadow-color);

                &.active {
                    background-color: var(--card-bg-color);
                    color: var(--text-color);
                    font-weight: bold;
                    border: 1px solid var(--shadow-color);
                    border-bottom: 1px solid var(--card-bg-color);
                }
            }
        }

        #mod-download {
            ul {
                margin-bottom: 0;
            }

            a.btn, a.btn-outline-primary {
                text-decoration: none;
                color: var(--link-color);
                border-color: var(--link-color);

                &:hover {
                    @extend %default-gradient;
                    color: white;
                    border-color: white;
                }
            }

            button, button.btn-secondary {
                border: none;
                background-color: transparent;
                color: $red;

                &:hover {
                    color: white;
                }
            }
        }
    }
</style>