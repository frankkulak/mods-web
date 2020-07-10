<template>
    <b-container id="mod-page" fluid>
        <b-row align-h="center">
            <b-col cols="12" sm="10" lg="8">
                <router-link to="/">&larr; mods home page</router-link>

                <div class="header">
                    <h1>{{ mod.name }}</h1>
                    <p>v{{ mod.version }} &bull; {{ mod.date }}</p>
                    <div class="status-bar" :class="classForStatus()">
                        <p v-html="textForStatus()"></p>
                    </div>
                </div>

                <b-row align-h="center">
                    <b-col cols="12" sm="10" lg="8">
                        <b-carousel v-model="slide" :interval="5000" controls indicators img-width="700"
                                    img-height="420" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                            <b-carousel-slide v-for="image in mod.images" :key="image" :img-src="getImagePath(image)"/>
                        </b-carousel>
                    </b-col>
                </b-row>

                <p class="description" v-html="mod.description"></p>

                <div class="btn-container" v-if="mod.video !== null">
                    <a :href="mod.video" target="_blank" class="btn btn-outline-primary" title="view demo on YouTube">
                        view demo
                    </a>
                </div>

                <hr>

                <div class="details">
                    <div class="detail-category" v-for="category in mod.details" :key="category.title">
                        <h2>{{ category.title }}</h2>
                        <ul>
                            <li v-for="(bullet, index) in category.bullets"
                                :key="`${category.title}:${index}`"
                                v-html="bullet"></li>
                        </ul>
                    </div>
                </div>

                <hr>

                <div class="terms">
                    <h2>terms of use</h2>
                    <ul>
                        <li><span class="important">DO NOT</span> share or distribute this mod without including
                            my name (Frank Kulak) and a link to this website.
                        </li>
                        <li>I am not responsible for the misuse of this mod in any way (e.g. using it when it is
                            out-of-date, using it with conflicting mods, or modifying the code in any way).
                        </li>
                        <li>I am free to stop supporting this mod at any time for any reason.</li>
                        <li v-if="mod.beta">This mod is in its beta stage, so you acknowledge that there may be
                            some bugs.
                        </li>
                    </ul>
                </div>

                <div class="btn-container" :class="mod.download === null && 'no-download'">
                    <a :href="mod.download" target="_blank" class="btn btn-outline-primary"
                       title="download from SimFileShare">
                        {{ mod.download === null ? 'download temporarily unavailable' : 'download' }}
                    </a>
                </div>

                <hr>

                <div class="version-history">
                    <h2>version history</h2>

                    <div class="version-details" v-for="version in mod.versionDetails" :key="version.id">
                        <p>{{ version.id }} ({{ version.date }})</p>
                        <ul>
                            <li v-for="(bullet, index) in version.details"
                                :key="`${version.id}:${index}`"
                                v-html="bullet"></li>
                        </ul>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {GameData, ModData} from '../modules/Data.js'
    import {Constants} from '../modules/Data.js'

    export default {
        name: "ModPage",
        data: function () {
            return {
                mod: ModData[this.$route.params.game][this.$route.params.mod],
                slide: 0,
                sliding: null
            }
        },
        methods: {
            getImagePath: function (filename) {
                const {game, id} = this.mod;
                try {
                    return require(`../assets/${game}/${id}/${filename}`);
                } catch (e) {
                    console.log(e.message);
                    return require(`../assets/${game}/default.png`);
                }
            },
            classForStatus: function () {
                switch (this.mod.status) {
                    case Constants.status.updated:
                        return 'updated';
                    case Constants.status.untested:
                        return 'untested';
                    default:
                        return 'conflict'
                }
            },
            textForStatus: function () {
                const lastUpdate = GameData[this.mod.game].lastUpdate;
                switch (this.mod.status) {
                    case Constants.status.updated:
                        return `&check; working with latest patch <span class="text-nowrap">(${lastUpdate})</span>`;
                    case Constants.status.untested:
                        return `&#9888; not tested with latest patch <span class="text-nowrap">(${lastUpdate})</span>`;
                    default:
                        return `&#10761; issues found with latest patch <span class="text-nowrap">(${lastUpdate})</span>`;
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
        padding: {
            top: $padding-lg;
            bottom: $padding-lg;
        }

        .header {
            width: 100%;
            text-align: center;
            margin: {
                top: $padding-lg;
                bottom: $padding-lg;
            }

            span.date {
                white-space: nowrap;
            }

            .status-bar {
                display: inline-block;
                text-align: center;
                border-radius: $padding-xs;
                margin-top: $padding-md;
                padding: {
                    top: 2px;
                    bottom: 2px;
                    left: $padding-md;
                    right: $padding-md;
                }

                &.updated {
                    background-color: var(--success-color);
                    color: var(--light-color);
                }

                &.untested {
                    background-color: var(--warning-color);
                    color: var(--dark-color);
                }

                &.conflict {
                    background-color: var(--danger-color);
                    color: var(--light-color);
                }
            }
        }

        .description {
            margin: {
                top: $padding-lg - $padding-sm;
                bottom: $padding-lg;
            }
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
                }
            }
        }

        hr {
            width: 80%;
            margin: {
                top: $padding-lg;
                bottom: $padding-lg;
            }
        }

        ul {
            margin: 0;
        }

        h2 {
            margin-bottom: $padding-sm;
        }

        .details {
            .detail-category {
                margin-bottom: $padding-lg;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        .terms {
            margin-bottom: $padding-lg;
        }

        .version-history {
            .version-details {
                margin-top: $padding-md;
            }
        }
    }
</style>