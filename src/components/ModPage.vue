<template>
    <div id="mod-page" class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-lg-8">
                <router-link to="/">&larr; mods home page</router-link>
                <div class="header">
                    <h1>{{ mod.name }}</h1>
                    <p v-html="versionText"></p>
                    <div class="status-bar" :class="classToUse(mod.status)">
                        <p v-if="isUntested(mod.status)">&#9888; not tested with latest patch</p>
                        <p v-else-if="isConflict(mod.status)">&#10761; issues found with latest patch</p>
                        <p v-else>&check; tested with latest patch</p>
                    </div>
                </div>
                <div class="image-display row justify-content-center">
                    <div class="img-col col-10 col-md-6" v-for="image in mod.images" :key="image">
                        <img :src="getImagePath(image)" :alt="image"/>
                    </div>
                </div>
                <p class="description" v-html="descriptionText"></p>
                <div class="btn-container">
                    <a :href="mod.video" target="_blank" class="btn btn-outline-primary">
                        view demo (YouTube)
                    </a>
                </div>
                <div class="details">
                    <div class="features">
                        <h2>Features</h2>
                        <ul>
                            <li v-for="(feature, index) in mod.features" :key="index">{{ feature }}</li>
                        </ul>
                    </div>
                    <div class="issues" v-if="mod.issues.length > 0">
                        <h2>Known issues</h2>
                        <ul>
                            <li v-for="(issue, index) in mod.issues" :key="index">
                                {{ issue.description }} <span class="fix">{{ issue.fix }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr>
                <div class="terms">
                    <h6><span class="unbold">By downloading this mod, you are agreeing to my</span> terms of use
                    </h6>
                    <ul>
                        <li><span class="important">DO NOT</span> share or distribute this mod without including
                            my name (Frank Kulak) and a link to this website.
                        </li>
                        <li>I am not responsible for the misuse of this mod in any way.
                        </li>
                        <li v-if="mod.beta">This mod is in its beta stage, so you acknowledge that there may be
                            some bugs.
                        </li>
                        <li>I am free to stop supporting this mod at any time for any reason.</li>
                    </ul>
                </div>
                <div class="btn-container">
                    <a :href="mod.download" target="_blank" class="btn btn-outline-primary">
                        download (Sim File Share)
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Data from '../data.js'
    import Util from '../util.js'
    import {Constants} from '../data.js'

    export default {
        name: "ModPage",
        data: function () {
          return {
              mod: Data[this.$route.params.game][this.$route.params.mod]
          }
        },
        computed: {
            versionText: function () {
                const {version, beta, date} = this.mod;
                return `version ${version} ${beta ? 'beta ' : ''} <span class="date">(${date})</span>`;
            },
            descriptionText: function () {
                const packInfo = Util.formatPackCompatability(this.mod);
                return `${this.mod.description} ${packInfo}.`;
            }
        },
        methods: {
            getImagePath: function (filename) {
                const {game, id} = this.mod;
                return require(`@/assets/${game}/${id}/${filename}`);
            },
            classToUse: function (status) {
                return Constants.statusClasses[status];
            },
            isUntested: function (status) {
                return status === Constants.status.untested;
            },
            isConflict: function (status) {
                return status === Constants.status.conflict;
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
                    left: $padding-md;
                    right: $padding-md;
                }
            }
        }

        .image-display {
            .img-col {
                padding: $padding-sm;
            }

            img {
                width: 100%;
                border-radius: $padding-sm;
            }
        }

        .description {
            margin: {
                top: $padding-md - $padding-sm;
                bottom: $padding-md;
            }

            span.base-game {
                color: var(--success-color);
            }

            span.packs-required {
                color: var(--danger-color);
            }

            span.pack {
                font-weight: bold;
            }
        }

        .btn-container {
            width: 100%;
            text-align: center;
        }

        .details {
            padding: {
                top: $padding-lg;
                bottom: $padding-lg;
            }

            h2 {
                font-weight: normal;
                margin-bottom: $padding-xs;
            }

            ul {
                margin: 0;
            }

            .issues {
                margin-top: $padding-lg;

                span.fix {
                    background-color: var(--text-highlight-color);
                    border-radius: $padding-sm;
                    padding: {
                        left: $padding-sm;
                        right: $padding-sm
                    }
                }
            }
        }

        hr {
            width: 80%;
            margin: {
                top: 0;
                bottom: 0;
            }
        }

        .terms {
            margin: {
                top: $padding-lg;
                bottom: $padding-lg;
            }

            h6 {
                margin-bottom: $padding-sm;
            }

            li {
                font-size: 16px;
            }
        }
    }
</style>