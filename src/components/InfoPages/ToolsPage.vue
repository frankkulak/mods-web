<template>
    <b-container id="tools-page" class="py-5" fluid>
        <b-container fluid>
            <section-header text="Sims 4 Toolkit" class="mb-4"/>
            <p>Sims 4 Toolkit (S4TK) is a family of modding tools created by me. The core library powers all of the
                other tools in this category.</p>
            <b-row>
                <b-col cols="12" sm="6" class="tool-col p-4">
                    <a class="tutorial-link" href="https://sims4toolkit.com" target="_blank">
                        <b-row align-h="center" class="tutorial-link-row text-left py-3 h-100">
                            <b-col cols="12">
                                <h3 class="font-weight-bold">Core Library</h3>
                                <p class="mt-3">
                                    A Node.js library for reading and writing .package files and the resources they
                                    contain. This library is intended for use with web tools and build scripts.
                                </p>
                            </b-col>
                        </b-row>
                    </a>
                </b-col>

                <b-col cols="12" sm="6" class="tool-col p-4">
                    <a class="tutorial-link" href="https://sandbox.sims4toolkit.com" target="_blank">
                        <b-row align-h="center" class="tutorial-link-row text-left py-3 h-100">
                            <b-col cols="12">
                                <h3 class="font-weight-bold">Online Sandbox</h3>
                                <p class="mt-3">
                                    An online environment for you to write and run S4TK scripts, without the need to set
                                    up Node.
                                </p>
                            </b-col>
                        </b-row>
                    </a>
                </b-col>

                <b-col cols="12" sm="6" class="tool-col p-4">
                    <a class="tutorial-link" href="https://stbl.sims4toolkit.com" target="_blank">
                        <b-row align-h="center" class="tutorial-link-row text-left py-3 h-100">
                            <b-col cols="12">
                                <h3 class="font-weight-bold">String Table Studio</h3>
                                <p class="mt-3">The new and improved string table editor. It has all the features of the
                                    previous one, plus: unlimited projects, error detection, translation mode, token
                                    assistance, and more.</p>
                            </b-col>
                        </b-row>
                    </a>
                </b-col>

                <b-col cols="12" sm="6" class="tool-col p-4">
                    <a class="tutorial-link" href="https://pkg.sims4toolkit.com/#/view" target="_blank">
                        <b-row align-h="center" class="tutorial-link-row text-left py-3 h-100">
                            <b-col cols="12">
                                <h3 class="font-weight-bold">Package Scanner</h3>
                                <p class="mt-3">Upload your package to have a pair of robot eyes scan it for common
                                    issues. It looks for mismatched tuning IDs, SimData groups, 32-bit instances, and
                                    more.</p>
                            </b-col>
                        </b-row>
                    </a>
                </b-col>

                <b-col cols="12" sm="6" class="tool-col p-4">
                    <a class="tutorial-link" href="https://pkg.sims4toolkit.com/#/generate" target="_blank">
                        <b-row align-h="center" class="tutorial-link-row text-left py-3 h-100">
                            <b-col cols="12">
                                <h3 class="font-weight-bold">Tuning Generator</h3>
                                <p class="mt-3">Generate tuning and SimData files in bulk, using your own templates.
                                    Note that this is a temporary and experimental tool while file generation is being
                                    added to the core library.</p>
                            </b-col>
                        </b-row>
                    </a>
                </b-col>

                <b-col cols="12" sm="6" class="tool-col p-4">
                    <a class="tutorial-link" href="https://stbl.sims4toolkit.com/#/tools/pronouns" target="_blank">
                        <b-row align-h="center" class="tutorial-link-row text-left py-3 h-100">
                            <b-col cols="12">
                                <h3 class="font-weight-bold">Pronoun Batch Fix Tool</h3>
                                <p class="mt-3">The pronoun update changed how some strings work, and this online tool
                                    will help convert your current strings to the new format.</p>
                            </b-col>
                        </b-row>
                    </a>
                </b-col>
            </b-row>
        </b-container>
        <b-container class="mt-5">
            <section-header text="old web tools" class="mb-4"/>
            <p>Please note that these tools are now obsolete due to the new and improved String Table Studio. These
                tools will be decommissioned in the future, so it's recommended that you migrate now.</p>
            <b-row>
                <b-col cols="12" sm="6" class="tool-col p-4">
                    <a class="tutorial-link" href="#/ts4-tools/stbl-editor">
                        <b-row align-h="center" class="tutorial-link-row text-left py-3 h-100">
                            <b-col cols="12">
                                <h3 class="font-weight-bold">String Table Editor</h3>
                                <p class="mt-3">Allows you to create, modify, and search through string tables of any
                                    size (tested up to 60k!). Features include autohashing, autosave, quick copying, two
                                    views to choose from, and more.</p>
                            </b-col>
                        </b-row>
                    </a>
                </b-col>

                <b-col cols="12" sm="6" class="tool-col p-4">
                    <a class="tutorial-link" href="#/ts4-tools/stbl-merger">
                        <b-row align-h="center" class="tutorial-link-row text-left py-3 h-100">
                            <b-col cols="12">
                                <h3 class="font-weight-bold">String Table Merger</h3>
                                <p class="mt-3">Allows you to quickly and easily combine many string tables into one.
                                    You can choose the language, type, group, and instance of the file that is output,
                                    as well as the naming convention to use.</p>
                            </b-col>
                        </b-row>
                    </a>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import SectionHeader from "../Common/SectionHeader";

export default {
    name: "ToolsPage",
    components: {SectionHeader}
}
</script>

<style lang="scss">
#tools-page {
    a.tool-link, a.tool-link:focus, a.tool-link:hover {
        color: var(--text-color);
        text-decoration: none;
    }

    .tool-link-row {
        @extend %floating-card;

        background-color: var(--card-bg-color);
        position: relative;
        transition: all ease 300ms;
        top: 0;

        &:hover {
            top: -5px;
            box-shadow: 0 5px 15px var(--shadow-color);
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
