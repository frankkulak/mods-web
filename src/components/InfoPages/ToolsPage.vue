<template>
    <b-container id="tools-page" class="py-5" fluid>
        <b-container fluid>
            <section-header text="string tables" class="mb-4"/>
            <p>Please note that these tools are currently considered experimental, and you should double-check
                their output before using anything they produce in your releases.</p>
            <b-row>
                <b-col cols="12" sm="6" class="tool-col p-4">
                    <a class="tutorial-link" href="#/ts4-tools/stbl-editor">
                        <b-row align-h="center" class="tutorial-link-row text-left mb-3 py-3 h-100">
                            <b-col cols="12">
                                <h3 class="font-weight-bold">String Table Editor</h3>
                                <p class="mt-3">A tool that provides an interface for creating and editing string
                                    tables.</p>
                            </b-col>
                        </b-row>
                    </a>
                </b-col>

                <b-col cols="12" sm="6" class="tool-col p-4">
                    <a class="tutorial-link" href="#/ts4-tools/stbl-merger">
                        <b-row align-h="center" class="tutorial-link-row text-left mb-3 py-3 h-100">
                            <b-col cols="12">
                                <h3 class="font-weight-bold">String Table Merger</h3>
                                <p class="mt-3">A tool that makes combining string tables easy.</p>
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
