<template>
    <b-container id="mod-page" fluid>
        <b-row align-h="center">
            <b-col cols="12" sm="10" lg="8">
                <router-link to="/">&larr; mods home page</router-link>
            </b-col>
        </b-row>

        <b-row align-h="center" class="alert-row">
            <b-col cols="12" sm="10" lg="8">
                <b-alert v-model="isRetired" variant="danger">This mod is retired, which means I no longer update or
                    support it. Using it is not recommended, as it may cause issues with your game.</b-alert>
                <b-alert v-model="isWip" variant="warning">This mod is a work-in-progress, which means it is not yet
                    available for download. Please check back later if you are interested!</b-alert>
                <b-alert v-model="isActive" :variant="statusClass" v-html="statusText"></b-alert>
            </b-col>
        </b-row>

        <b-row align-h="center">
            <b-col cols="12" sm="10" md="5" lg="4" class="text-center my-auto">
                <h1>{{ mod.name }}</h1>
                <p v-if="!isWip">v{{ latestVersion.version }} • {{ latestVersion.date }}</p>
                <p v-else-if="mod.releaseDate !== null">expected by {{ mod.releaseDate }}</p>
                <p v-else>in development</p>
                <p class="description" v-html="mod.description"></p>
            </b-col>

            <b-col cols="12" sm="10" md="5" lg="4" class="my-auto py-4">
                <b-carousel v-model="slide" :interval="4000" controls indicators :img-width="700"
                            :img-height="420" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                    <b-carousel-slide v-for="image in mod.images" :key="image" :img-src="getImagePath(image)"/>
                </b-carousel>
            </b-col>
        </b-row>

        <b-row align-h="center" class="details-row">
            <b-col cols="12" sm="10" lg="8" class="details-col" v-for="category in mod.details" :key="category.title">
                <h4>{{ category.title }}</h4>
                <ul>
                    <li v-for="(bullet, index) in category.bullets"
                        :key="`${category.title}:${index}`"
                        v-html="bullet"></li>
                </ul>
            </b-col>
        </b-row>

        <b-row align-h="center" id="mod-download" v-if="!isWip">
            <b-col cols="12" sm="10" lg="8">
                <h1>download</h1>
                <b-alert v-model="isRetired" variant="danger">This mod is retired, which means I no longer update or
                    support it. Using it is not recommended, as it may cause issues with your game.</b-alert>

                <div class="install">
                    <h4>instructions</h4>
                    <ul>
                        <li>Download the .zip folder from the link below.</li>
                        <li>Unzip the folder and place it in your "The Sims 4 > Mods" directory.</li>
                        <li>In-game, ensure that "Game Options > Other > Enable Custom Content and Mods" is checked.</li>
                    </ul>
                </div>

                <div class="terms">
                    <h4>terms of use</h4>
                    <ul>
                        <li>Do not share or distribute this mod without crediting me - a link to this website is
                            sufficient.
                        </li>
                        <li>If you would like to provide a translation of this mod, please notify me via Discord or
                            email before doing so. I do not appreciate my work being reposted by others without my
                            knowledge and consent.
                        </li>
                        <li>I am not responsible for the misuse of this mod (e.g. using it with conflicting mods or when
                            it is out-of-date).
                        </li>
                        <li v-if="!isRetired">I am free to stop supporting this mod at any time for any reason.</li>
                    </ul>
                </div>
            </b-col>

            <div class="btn-container" v-for="download in shownDownloadLinks" :key="download.site">
                <a :href="download.link" target="_blank" class="btn btn-outline-primary">
                    download from {{ download.site }}
                </a>
            </div>
            <div class="btn-container" v-for="download in hiddenDownloadLinks" :key="download.site">
                <b-button size="sm" @click="whitelistHiddenDownload(download.site)">{{ download.hide }}</b-button>
            </div>
            <div class="btn-container no-download" v-if="mod.downloads === null || mod.downloads.length === 0">
                <a class="btn btn-outline-primary">
                    download not available
                </a>
            </div>
        </b-row>
    </b-container>
</template>

<script>
    import {GameData, ModData} from '../../modules/Data.js'
    import {Constants} from '../../modules/Data.js'

    export default {
        name: "ModPage",
        data: function () {
            return {
                mod: ModData[this.$route.params.game][this.$route.params.mod],
                slide: 0,
                sliding: null,
                downloadSiteWhitelist: []
            }
        },
        computed: {
            isActive: function () {
                return this.mod.developmentStage === Constants.developmentStage.active;
            },
            isRetired: function () {
                return this.mod.developmentStage === Constants.developmentStage.retired;
            },
            isWip: function () {
                return this.mod.developmentStage === Constants.developmentStage.wip;
            },
            statusClass: function () {
                switch (this.mod.status) {
                    case Constants.status.updated:
                        return 'success';
                    case Constants.status.untested:
                        return 'warning';
                    default:
                        return 'danger'
                }
            },
            statusText: function () {
                const lastUpdate = GameData[this.mod.game].lastUpdate;
                switch (this.mod.status) {
                    case Constants.status.updated:
                        return `&check; working with latest patch <span class="text-nowrap">(${lastUpdate})</span>`;
                    case Constants.status.untested:
                        return `&#9888; not yet tested with latest patch <span class="text-nowrap">(${lastUpdate})</span>`;
                    default:
                        return `&#10761; issues found with latest patch <span class="text-nowrap">(${lastUpdate})</span>`;
                }
            },
            shownDownloadLinks: function () {
                return this.mod.downloads.filter(d => d.hide === null || this.downloadSiteWhitelist.includes(d.site));
            },
            hiddenDownloadLinks: function () {
                return this.mod.downloads.filter(d => d.hide !== null && !this.downloadSiteWhitelist.includes(d.site));
            },
            latestVersion: function () {
                return this.mod.versionHistory[0];
            }
        },
        methods: {
            getImagePath: function (filename) {
                const {game, id} = this.mod;
                try {
                    return require(`../../assets/${game}/${id}/${filename}`);
                } catch (e) {
                    console.log(e.message);
                    return require(`../../assets/${game}/default.png`);
                }
            },
            onSlideStart: function () {
                this.sliding = true
            },
            onSlideEnd: function () {
                this.sliding = false
            },
            whitelistHiddenDownload: function (downloadSiteName) {
                this.downloadSiteWhitelist.push(downloadSiteName);
            }
        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            $route(to, from) {
                this.mod = ModData[to.params.game][to.params.mod]
            }
        }
    }
</script>

<style lang="scss">
    #mod-page {
        h1, h2, p {
            margin-bottom: $padding-sm;

            &:last-child {
                margin-bottom: 0;
            }
        }

        & > .row {
            padding: {
                top: $padding-lg;
                bottom: $padding-lg;
            }

            &.alert-row {
                padding: {
                    top: 0;
                    bottom: 0
                }

                .alert {
                    margin-bottom: 0;
                    text-align: center;
                }
            }

            &.details-row {
                padding-top: 0;

                .details-col {
                    padding-bottom: $padding-lg;

                    &:last-child {
                        padding-bottom: 0;
                    }
                }
            }
        }

        .description {
            text-align: center;
            font-size: 85%;

            margin: {
                top: $padding-md;
            }
        }

        h1 {
            width: 100%;
            text-align: center;
        }

        h4 {
            margin-bottom: $padding-sm;
        }

        ul {
            margin: 0;
        }

        .btn-container {
            width: 100%;
            text-align: center;

            padding: {
                top: $padding-sm;
                bottom: $padding-sm;
            };

            button {
                background: transparent;
                color: var(--danger-color);
                border-style: none;

                &:hover {
                    color: var(--light-color);
                }
            }

            &.no-download {
                a.btn, a.btn-outline-primary, a.btn-outline-primary:focus, a.btn-outline-primary:hover {
                    background-image: none;
                    background-color: var(--banner-bg-color);
                    color: var(--light-color);
                    border-color: var(--light-color);
                    border-style: solid;
                    text-decoration: none;
                    pointer-events: none;
                }
            }
        }

        #mod-download {
            background-color: var(--banner-bg-color);
            color: var(--light-color);

            .alert {
                margin-bottom: $padding-lg;
                text-align: center;
            }

            h1 {
                margin-bottom: $padding-lg;
            }

            .install, .terms {
                margin-bottom: $padding-lg;
            }
        }
    }
</style>