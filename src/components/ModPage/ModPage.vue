<template>
    <b-container id="mod-page" fluid>
        <b-row align-h="center" id="mod-overview">
            <b-col cols="12" sm="10" lg="8">
                <router-link to="/">&larr; mods home page</router-link>

                <div class="header">
                    <h1>{{ mod.name }}</h1>
                    <p>v{{ mod.version }} &bull; {{ mod.date }}</p>
                    <div class="status-bar" :class="classForStatus()">
                        <p v-html="textForStatus()"></p>
                    </div>
                </div>

                <!-- image gallery -->
                <b-row align-h="center">
                    <b-col cols="12" sm="10" lg="8">
                        <b-carousel v-model="slide" :interval="4000" controls indicators img-width="700"
                                    img-height="420" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                            <b-carousel-slide v-for="image in mod.images" :key="image" :img-src="getImagePath(image)"/>
                        </b-carousel>
                    </b-col>
                </b-row>

                <p class="description" v-html="mod.description"></p>

                <div class="btn-container" v-if="mod.video !== null">
                    <a :href="mod.video" target="_blank" class="btn btn-outline-primary">view demo</a>
                </div>
            </b-col>
        </b-row>

        <b-row align-h="center" id="mod-details">
            <b-col cols="12" sm="10" lg="8">
                <h1>details</h1>

                <div class="detail-category" v-for="category in mod.details" :key="category.title">
                    <h4>{{ category.title }}</h4>
                    <ul>
                        <li v-for="(bullet, index) in category.bullets"
                            :key="`${category.title}:${index}`"
                            v-html="bullet"></li>
                    </ul>
                </div>
            </b-col>
        </b-row>

        <b-row align-h="center" id="mod-download">
            <b-col cols="12" sm="10" lg="8">
                <h1>download</h1>

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
                        <li v-if="isRetired"><span class="important">This mod has been retired, which means I no
                            longer update or support it. Using it will likely cause problems with your game. Use at your
                            own risk.</span>
                        </li>
                        <li v-else-if="mod.beta">This mod is in its beta stage, so you acknowledge that there may be
                            some bugs. If you encounter any, please let me know so I can fix them! The beta phase will
                            end after 14 days with no bug reports.
                        </li>
                        <li v-else>This mod has been thoroughly tested and does not contain any bugs that I am aware of,
                            but sometimes they do sneak through. If you do experience any bugs, please let me know so I
                            can fix them!
                        </li>
                        <li v-if="!isRetired">I am free to stop supporting this mod at any time for any reason.</li>
                    </ul>
                </div>

                <div class="btn-container" :class="mod.download === null && 'no-download'">
                    <a :href="mod.download" target="_blank" class="btn btn-outline-primary"
                       title="download from SimFileShare">
                        {{ mod.download === null ? 'download temporarily unavailable' : 'download' }}
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
                        return `&#9888; not yet tested with latest patch <span class="text-nowrap">(${lastUpdate})</span>`;
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
            h1 {
                margin-bottom: $padding-lg;
            }

            .install, .terms {
                margin-bottom: $padding-lg;
            }
        }
    }
</style>