<template>
    <b-container id="mod-page" fluid>
        <b-row align-h="center">
            <b-col cols="12" sm="10" lg="8">
                <router-link to="/">&larr; mods home page</router-link>
            </b-col>
        </b-row>

        <b-row align-h="center">
            <b-col cols="12" sm="10" md="5" lg="4" class="text-center my-auto">
                <h1>{{ mod.name }}</h1>
                <p>version {{ mod.currentVersion }} • {{ mod.lastUpdated }}</p>
                <p v-if="isRetired" class="conflict">This mod is retired, which means I no longer update or support it.
                    Using it is not recommended, as it may cause issues with your game. Use at your own risk.</p>
                <p v-else :class="statusClass" v-html="statusText"></p>
            </b-col>

            <b-col cols="12" sm="10" md="5" lg="4" class="my-auto py-3">
                <b-carousel v-model="slide" :interval="4000" controls indicators :img-width="700"
                            :img-height="420" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                    <b-carousel-slide v-for="image in mod.images" :key="image" :img-src="getImagePath(image)"/>
                </b-carousel>
            </b-col>
        </b-row>

        <b-row align-h="center" class="detail-category" v-for="category in mod.details" :key="category.title">
            <b-col cols="12" sm="10" lg="8">
                <h4>{{ category.title }}</h4>
                <ul>
                    <li v-for="(bullet, index) in category.bullets"
                        :key="`${category.title}:${index}`"
                        v-html="bullet"></li>
                </ul>
            </b-col>
        </b-row>

        <b-row align-h="center" id="mod-download">
            <b-col cols="12" class="text-center">
                <h1>download</h1>
                <p v-if="isRetired">This mod is retired, which means I no longer update or support it. Using it is not
                    recommended, as it may cause issues with your game. Use at your own risk.</p>
            </b-col>

            <b-col cols="12" sm="10" md="5" lg="4">
                <div class="install">
                    <h4>instructions</h4>
                    <ul>
                        <li v-for="(bullet, index) in mod.installInstructions" :key="index" v-html="bullet"></li>
                    </ul>
                </div>

                <div class="terms">
                    <h4>terms of use</h4>
                    <ul>
                        <li>Do not share or distribute this mod without crediting me - a link to this website is
                            sufficient.
                        </li>
                        <li>I am not responsible for the misuse of this mod (e.g. using it with conflicting mods or when
                            it is out-of-date).
                        </li>
                        <li v-if="!isRetired">I am free to stop supporting this mod at any time for any reason.</li>
                    </ul>
                </div>
            </b-col>

            <b-col cols="12" sm="10" md="5" lg="4" class="text-center my-auto">
                <div class="btn-container" v-for="download in mod.downloads" :key="download.site">
                    <a :href="download.link" target="_blank" class="btn btn-outline-primary">
                        download from {{ download.site }}
                    </a>
                </div>
            </b-col>
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
                sliding: null
            }
        },
        computed: {
            isRetired: function () {
                return this.mod.developmentStage === Constants.developmentStage.retired;
            },
            isWip: function () {
                return this.mod.developmentStage === Constants.developmentStage.wip;
            },
            statusClass: function () {
                switch (this.mod.status) {
                    case Constants.status.updated:
                        return 'updated';
                    case Constants.status.untested:
                        return 'untested';
                    default:
                        return 'conflict'
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

        .updated {
            color: var(--success-color);
        }

        .untested {
            color: var(--warning-color);
        }

        .conflict {
            color: var(--danger-color);
        }

        /*#mod-overview {*/
        /*    text-align: center;*/
        /*    vertical-align: middle;*/
        /*}*/


        & > .row {
            padding: {
                top: $padding-lg;
                bottom: $padding-lg;
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

            &.no-download {
                a.btn, a.btn-outline-primary, a.btn-outline-primary:focus, a.btn-outline-primary:hover {
                    background-image: none;
                    background-color: var(--bg-color);
                    color: var(--text-color);
                    border-color: var(--text-color);
                    border-style: solid;
                    text-decoration: none;
                    pointer-events: none;
                }
            }
        }

        #mod-overview {
            .header {
                width: 100%;
                text-align: center;
                margin: {
                    top: $padding-lg;
                    bottom: $padding-lg;
                }

            }

            .description {
                margin-top: $padding-lg - $padding-sm;
            }

            .btn-container {
                margin-top: $padding-lg;
            }
        }

        #mod-details {
            background-color: var(--bg-band-overlay);

            h1 {
                margin-bottom: $padding-lg;
            }

            .detail-category {
                margin-bottom: $padding-lg;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        #mod-download {
            background-color: var(--banner-bg-color);
            color: var(--light-color);

            h1 {
                margin-bottom: $padding-lg;
            }

            .install, .terms {
                margin-bottom: $padding-lg;
            }
        }
    }
</style>