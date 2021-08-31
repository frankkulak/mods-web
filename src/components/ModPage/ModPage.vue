<template>
    <div id="mod-page">
        <b-container class="py-5" fluid>
            <b-alert show dismissible class="update-alert mx-2 mb-4" v-if="mod.beingUpdated">
                Hey! Did you know {{ mod.name }} is currently being updated?
                Read more about the upcoming update <a :href="mod.updateInfo" target="_blank">here</a>, and stay
                up-to-date with its progress on <a :href="mod.trelloBoard" target="_blank">Trello</a>.
            </b-alert>

            <b-row align-h="center" align-v="center">
                <b-col cols="12" md="6" class="text-center">
                    <h1 v-html="mod.name"></h1>
                    <p class="version" v-html="versionText"></p>
                    <p class="description" v-html="mod.description"></p>
                    <mod-status-alert :mod="mod"/>
                </b-col>

                <b-col cols="12" md="6" class="my-auto py-4" v-if="hasImages">
                    <mod-image-carousel :mod="mod"/>
                </b-col>
            </b-row>

            <b-tabs fill justified class="mt-5">
                <mod-details-tab v-for="tab in detailTabs" :key="tab.title" :title="tab.title" :items="tab.items"/>
            </b-tabs>

            <mod-translations :mod="mod" v-if="showTranslations" class="mt-5"/>

            <b-row id="patreon-download" class="mt-5 mx-0 px-3 py-4" align-v="center">
                <b-col cols="12" md="8" class="my-2">
                    <img src="../../assets/brands/patreon-wordmark.png" alt="Patreon Logo" class="mb-2"/>
                    <div class="ml-2" v-if="mod.patreonRelease">
                        <p class="mt-2">{{ mod.name }} {{ mod.patreonRelease.version }} is currently in its
                            {{  mod.patreonRelease.stage }} stage of early access for {{ mod.patreonRelease.tiers }}
                            patrons. You can read more about this update and join with the following links.</p>
                        <p v-if="mod.patreonRelease.publicDate !== null">Public release will be
                            {{ mod.patreonRelease.publicDate }}.</p>
                    </div>
                    <div class="ml-2" v-else>
                        <p class="mt-2">Hey! Did you know that patrons get early access to new mods and updates? You
                            can learn more about the perks of being a patron and join with the following links.
                        </p>
                        <p class="mt-2">{{ mod.name }} does NOT currently have a Patron-only version.</p>
                    </div>
                </b-col >
                <b-col cols="12" md="4" class="my-2">
                    <b-button variant="outline-primary" :href="mod.patreonRelease.link"
                              target="_blank" pill class="mb-4 w-100" v-if="mod.patreonRelease">
                        See what's new
                    </b-button>
                    <b-button variant="outline-primary" href="#/patreon"
                              target="_blank" pill class="mb-4 w-100" v-else>
                        Read more
                    </b-button>
                    <b-button variant="outline-primary" href="https://www.patreon.com/bePatron?u=40823163"
                              target="_blank" pill class="w-100">
                        Become a patron
                    </b-button>
                </b-col>
            </b-row>
        </b-container>

        <mod-download :mod="mod" v-if="!isWip"/>
    </div>
</template>

<script>
    import {DataEnums, ModData} from '../../modules/Data.js'
    import ModStatusAlert from "./ModStatusAlert";
    import ModImageCarousel from "./ModImageCarousel";
    import ModDetailsTab from "./ModDetailsTab";
    import ModDownload from "./ModDownload";
    import ModTranslations from "./ModTranslations";

    export default {
        name: "ModPage",
        components: {ModTranslations, ModStatusAlert, ModImageCarousel, ModDetailsTab, ModDownload},
        data: function () {
            return {
                mod: ModData[this.$route.params.game][this.$route.params.mod]
            }
        },
        computed: {
            isWip: function () {
                return this.mod.developmentStage === DataEnums.developmentStage.wip;
            },
            showTranslations: function () {
                const devStage = this.mod.developmentStage;
                const {wip, tool} = DataEnums.developmentStage;
                return devStage !== wip && devStage !== tool;
            },
            hasImages: function () {
                return this.mod.images.length > 0;
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

                const {overview, details, faqs, versionHistory} = this.mod;
                const isTool = this.mod.developmentStage === DataEnums.developmentStage.tool;
                const overviewTitle = isTool ? "For users" : "Overview";
                const detailsTitle = isTool ? "For modders" : "Details";
                if (overview !== null && overview.length > 0) tabs.push({title: overviewTitle, items: overview});
                if (details !== null && details.length > 0) tabs.push({title: detailsTitle, items: details});
                if (faqs !== null && faqs.length > 0) tabs.push({title: 'FAQs', items: faqs});
                if (versionHistory !== null && versionHistory.length > 0) {
                    tabs.push({
                        title: "Changelog",
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
        .tabs {
            .nav-link {
                text-decoration: none;
                border-bottom: 1px solid var(--shadow-color);
                color: var(--text-color);

                &.active {
                    background-color: var(--card-bg-color);
                    color: var(--accent-color);
                    font-weight: bold;
                    border: 1px solid var(--shadow-color);
                    border-bottom: 1px solid var(--card-bg-color);
                }
            }
        }

        .update-alert {
            color: var(--accent-color);
            background-color: var(--accent-color-light);
            border-color: var(--shadow-color);
        }

        #patreon-download {
            background-color: var(--card-bg-color);
            border: 1px solid var(--shadow-color);
            border-radius: 10px;

            img {
                width: 198px;
            }

            .btn-outline-primary {
                text-decoration: none;
                font-weight: bold;
                border-color: $patreon;
                color: $patreon;

                &:hover {
                    background-color: $patreon;
                    color: white;
                }
            }
        }
    }
</style>
