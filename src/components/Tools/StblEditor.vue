<template>
    <b-container id="stbl-editor-container" class="p-5" fluid>
        <div class="mb-5">
            <div class="mb-5">
                <h1 class="mb-3">Easy String Table Editor</h1>
                <p>This experimental tool provides a graphical interface for creating and editing string tables. It
                    currently only works with string table binaries (<code>.binary</code> or <code>.stbl</code> file
                    extensions), but support for packages will come soon™. Please reach out to me on Discord if you
                    experience any issues with it, but please refrain from asking for new features, as this is meant to
                    be a temporary resource while I work on a larger, general-purpose modding tool that will include
                    its own string table editor.</p>
            </div>

            <div class="mb-5">
                <section-header text="how to use" class="mb-4"></section-header>
                <p>Upload a string table (only .binary and .stbl files, please – .packages are not supported yet), or
                    create a new one with the "New String Table" button.</p>
                <p></p>
            </div>
        </div>

        <b-row class="text-center mb-5">
            <b-col cols="12" md="6">
                <b-form-file
                    class="text-left"
                    v-model="stblFile"
                    :state="Boolean(stblFile)"
                    placeholder="Choose/drop a .binary or .stbl file here..."
                    drop-placeholder="Drop file here..."
                    accept=".binary, .stbl"
                    v-on:input="refreshStbl()"
                ></b-form-file>
            </b-col>
            <b-col cols="12" md="6" class="text-right">
                <b-button id="new-stbl-btn" v-on:click="printStbl()" pill>
                    <b-icon-plus></b-icon-plus>
                    New String Table
                </b-button>
            </b-col>
        </b-row>

        <b-alert v-if="Boolean(errorMessage)" class="py-3" variant="danger" show dismissible>
            <h2 class="alert-heading mb-3">Oops, something doesn't look right</h2>
            <pre class="mb-0">{{ errorMessage }}</pre>
        </b-alert>
        <b-row v-if="fileContents" id="stbl-content">
            <b-col cols="12" md="6" v-for="(stringEntry, n) in fileContents" :key="n" class="my-3">
                <div>
                    <b-card class="floating-card">
                        <div class="d-flex flex-row mb-2">
                            <h3>{{ stringEntry.key }}</h3>
                            <div class="w-100 text-right" style="font-size: 1.2em">
                                <b-icon-clipboard
                                    v-clipboard="() => `${stringEntry.key}`"
                                    class="clipboard-button"
                                    :id="`clipboard-${n}`"
                                    title="Save key to clipboard"
                                ></b-icon-clipboard>
                                <b-popover :target="`clipboard-${n}`" triggers="click blur" placement="top">
                                    Copied!
                                </b-popover>
                                <b-icon-clipboard-plus
                                    v-clipboard="() => `${stringEntry.key}<!--${stringEntry.string}-->`"
                                    class="clipboard-button ml-2"
                                    :id="`clipboard-plus-${n}`"
                                    title="Save key and comment to clipboard"
                                ></b-icon-clipboard-plus>
                                <b-popover :target="`clipboard-plus-${n}`" triggers="click blur" placement="top">
                                    Copied!
                                </b-popover>
                                <b-icon-three-dots class="ml-2" :id="`more-actions-${n}`"></b-icon-three-dots>
                                <b-popover :target="`more-actions-${n}`" triggers="hover" placement="top">
                                    <b-icon-arrow-repeat title="Rehash string"></b-icon-arrow-repeat>
                                    <b-icon-trash-fill
                                        variant="danger"
                                        class="ml-2"
                                        title="Delete string"
                                    ></b-icon-trash-fill>
                                </b-popover>
                            </div>
                        </div>

                        <b-form-textarea
                            v-model="stringEntry.string"
                            placeholder="{0.SimFirstName} is reticulating {M0.his}{F0.her} splines."
                            rows="3"
                            max-rows="3"
                        ></b-form-textarea>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import SectionHeader from "@/components/Common/SectionHeader";
import {BIconPlus, BIconTrashFill, BIconClipboard, BIconClipboardPlus, BIconArrowRepeat, BIconThreeDots} from 'bootstrap-vue';
import {getStblContents} from "@/components/scripts/stblReader";

export default {
    name: "StblEditor",
    components: {SectionHeader, BIconPlus, BIconTrashFill, BIconClipboard, BIconArrowRepeat, BIconThreeDots, BIconClipboardPlus},
    data() {
        return {
            stblFile: null,
            fileContents: null,
            errorMessage: null
        }
    },
    methods: {
        refreshStbl() {
            getStblContents(this.stblFile).then(result => {
                if (result === null || typeof result === "string") {
                    this.fileContents = null;
                    this.errorMessage = result;
                } else {
                    this.errorMessage = null;
                    this.fileContents = result.stringEntries.map(({key, string}) => {
                        return {
                            key: "0x" + key.toString(16).toUpperCase().padStart(8, "0"),
                            string
                        };
                    });
                }
            });
        },
        printStbl() {
            console.log(this.fileContents);
        }
    }
}
</script>

<style lang="scss">
#stbl-editor-container {
    max-width: 100%;

    .was-validated .custom-file-input:invalid ~ .custom-file-label,
    .custom-file-input.is-invalid ~ .custom-file-label {
        border-color: var(--accent-color);
    }

    .was-validated .custom-file-input:invalid:focus ~ .custom-file-label,
    .custom-file-input.is-invalid:focus ~ .custom-file-label {
        box-shadow: 0 0 0 0.2rem transparentize($blurple, 0.8);
    }

    button#new-stbl-btn {
        @extend %default-gradient;
        @extend %floating-card;

        background-color: white;
        border-color: transparent;
        color: white;
        position: relative;
        height: 100%;
        transition: all ease 300ms;
        top: 0;

        &:hover:not(:disabled) {
            top: -3px;
            box-shadow: 0 5px 15px var(--shadow-color);
        }
    }

    textarea {
        resize: none;
    }

    .floating-card {
        @extend %floating-card;
    }

    .clipboard-button:hover {
        cursor: pointer;
    }
}
</style>
