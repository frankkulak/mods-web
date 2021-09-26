<template>
    <section id="mod-download" class="w-100">
        <b-container class="py-5" fluid>
            <b-row>
                <b-col>
                    <h1 class="w-100 text-center mb-5">download</h1>

                    <section-header text="installation instructions" class="mb-3"/>
                    <ul class="mb-5">
                        <li>Download the .zip folder from the link below.</li>
                        <li>Unzip the folder and place it directly in your "The Sims 4 > Mods" directory. Do not place
                            it in any sub-folders, or the script will not load and the mod will not work properly.
                        </li>
                        <li>Ensure that custom content and script mods are enabled (go to "Game Options > Other" in your
                            game settings).
                        </li>
                    </ul>

                    <section-header text="terms of use" class="mb-3"/>
                    <ul class="mb-5">
                        <li>Do not share this mod without crediting me. A link to this website is sufficient.</li>
                        <li>Do not re-upload this mod anywhere or include it in any mod download folders.</li>
                        <li>Do not create alternate versions of or add-ons to this mod without asking me first.</li>
                        <li>You may reference my code for use in your own mods, but must credit me if you do so.</li>
                        <li>I am not responsible for the misuse of this mod (e.g. changing the code, using it when it is
                            out-of-date, etc.).
                        </li>
                        <li>I am free to stop supporting this mod at any time for any reason.</li>
                    </ul>

                    <b-alert variant="warning" class="text-left mb-5" v-if="mod.warning !== null" show>
                        <h1 class="notice-header my-3 w-100 text-center">
                            <b-icon-exclamation-diamond-fill/>
                            Before downloading, READ THIS!
                            <b-icon-exclamation-diamond-fill/>
                        </h1>
                        <span v-html="mod.warning"></span>
                    </b-alert>

                    <div class="w-100 text-center">
                        <div>
                            <a :href="mod.primaryDownload.url" target="_blank" class="btn btn-outline-light"
                               :id="`download-primary-${mod.id}`">
                                Download from {{ mod.primaryDownload.title }}
                            </a>
                        </div>

                        <b-button size="sm" @click="showAltDownloads = true" class="mt-3"
                                  v-if="mod.alternativeDownloads.length > 0 && !showAltDownloads">
                            {{ mod.primaryDownload.title }} not working?
                        </b-button>

                        <div v-if="showAltDownloads">
                            <a v-for="(download, n) in mod.alternativeDownloads" :key="download.title"
                               :href="download.url" target="_blank" class="btn btn-outline-light mt-3"
                               :id="`download-alt${n}-${mod.id}`">
                                Download from {{ download.title }}
                            </a>
                        </div>
                    </div>

                    <div v-if="mod.documentationDownload !== null" class="documentation-download">
                        <hr class="mt-5">
                        <div class="text-center py-5">
                            <h1 class="mb-5">modder's documentation</h1>
                            <p>Want to use {{ mod.name }} for your mod? Download the documentation from below to get
                                started.</p>
                        </div>
                        <div class="w-100 text-center">
                            <div>
                                <a :href="mod.documentationDownload.url" target="_blank"
                                   class="btn btn-outline-light">
                                    Download Documentation from <span
                                        class="text-nowrap">{{ mod.documentationDownload.title }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import SectionHeader from "../Common/SectionHeader";
    import { BIconExclamationDiamondFill } from 'bootstrap-vue';

    export default {
        name: "ModDownload",
        components: {SectionHeader, BIconExclamationDiamondFill},
        props: {
            mod: Object
        },
        data: function () {
            return {
                showAltDownloads: false,
            }
        },
    }
</script>

<style lang="scss">
    #mod-download {
        background-color: var(--secondary-footer-color);
        color: white;

        h1, h2, h3, h4 {
            color: white;

            &.notice-header {
                color: var(--alert-warning-text);
            }
        }

        .alert strong {
            font-weight: bold;
        }

        ul {
            margin-bottom: 0;
        }

        a.btn, a.btn-outline-light {
            text-decoration: none;

            &:hover {
                @extend %default-gradient;
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

        .documentation-download {
            hr {
                border-color: var(--h-color);
                border-width: 1px;
                width: 90%;
            }
        }
    }
</style>
