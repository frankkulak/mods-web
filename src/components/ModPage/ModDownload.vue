<template>
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
                    <li>Unzip the folder and place it directly in your "The Sims 4 > Mods" directory. Do not place
                        it in any sub-folders, or the script will not load and the mod will not work properly.
                    </li>
                    <li>Ensure that custom content and script mods are enabled (go to "Game Options > Other" in your
                        game settings).
                    </li>
                </ul>

                <h3>terms of use</h3>
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
                    <strong>&#9888; NOTICE: </strong>
                    <span v-html="mod.warning"></span>
                </b-alert>

                <div class="w-100 text-center">
                    <div>
                        <a :href="mod.primaryDownload.url" target="_blank" class="btn btn-outline-primary"
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
                           :href="download.url" target="_blank" class="btn btn-outline-primary mt-3"
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
                            <a :href="mod.documentationDownload.url" target="_blank" class="btn btn-outline-primary">
                                Download Documentation from <span
                                    class="text-nowrap">{{ mod.documentationDownload.title }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "ModDownload",
        props: {
            mod: Object,
            isWip:Boolean
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
        .alert strong {
            font-weight: bold;
        }

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

        .documentation-download {
            hr {
                border-color: var(--h-color);
                border-width: 1px;
                width: 90%;
            }
        }
    }
</style>