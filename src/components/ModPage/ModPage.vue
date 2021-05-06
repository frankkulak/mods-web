<template>
    <div id="mod-page">
        <section id="mod-header">
            <b-container class="pt-5" fluid>
                <mod-status-alert :mod="mod"/>

                <b-row align-h="center" align-v="center" class="mt-5">
                    <b-col cols="12" sm="6" class="text-center">
                        <h1 v-html="mod.name"></h1>
                        <p class="version" v-html="versionText"></p>
                        <p class="description" v-html="mod.description"></p>
                    </b-col>

                    <b-col cols="12" sm="6" class="py-4" v-if="hasImages">
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

        <mod-translations :mod="mod" v-if="showTranslations"/>

        <mod-download :mod="mod" :is-wip="isWip"/>
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
                const overviewTitle = isTool ? "for users" : "intro";
                const detailsTitle = isTool ? "for modders" : "details";
                if (overview !== null && overview.length > 0) tabs.push({title: overviewTitle, items: overview});
                if (details !== null && details.length > 0) tabs.push({title: detailsTitle, items: details});
                if (faqs !== null && faqs.length > 0) tabs.push({title: 'faqs', items: faqs});
                if (versionHistory !== null && versionHistory.length > 0) {
                    tabs.push({
                        title: "changes",
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
    }
</style>