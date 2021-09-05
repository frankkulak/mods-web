<template>
    <b-container id="stbl-editor-container" class="p-5" fluid>
        <div class="mb-5">
            <div class="mb-5">
                <h1 class="mb-3">Easy String Table Editor</h1>
                <p>This experimental tool provides a graphical interface for creating and editing string tables. It
                    currently only works with one string table binary (<code>.binary</code> or <code>.stbl</code> files)
                    at a time, but support for packages and multiple string tables will come soon™. Reach out to me on
                    Discord if you experience any issues while using it.</p>
                <p>Please note that this tool does not edit the file you upload, but rather uses it as a starting point,
                    and then lets you download a modified version.</p>
            </div>

            <div class="mb-5">
                <section-header text="how to use" class="mb-4"></section-header>
                <p><strong>Step 1:</strong> Upload an existing <code>.binary</code> or <code>.stbl</code> file with the
                    input below, or create a new, blank string table with the "New String Table" button.</p>
                <p><strong>Step 2:</strong> Add to, edit, and delete from your string table.</p>
                <ul>
                    <li class="mb-2"><strong>Adding a string.</strong> Use the
                        <b-icon-plus-circle/>
                        button near the bottom of the string list to create a new string entry. When done typing out
                        your new string, you can either generate a key for it by hovering over
                        <b-icon-three-dots/>
                        and clicking the
                        <b-icon-arrow-repeat/>
                        icon, or type it in yourself with the
                        <b-icon-key/>
                        icon.
                    </li>
                    <li class="mb-2"><strong>Editing a string.</strong> Simply click on a string's text area and type.
                        Your changes will be saved automatically.
                    </li>
                    <li class="mb-2"><strong>Deleting a string.</strong> Hover over
                        <b-icon-three-dots/>
                        and click the
                        <b-icon-trash-fill variant="danger"/>
                        button to delete the string entry. This action cannot be undone.
                    </li>
                    <li class="mb-2"><strong>Copying strings.</strong> To copy the key (<code>0x00000000</code>),
                        click the
                        <b-icon-clipboard/>
                        button. To copy both the key and string (<code>0x00000000&lt;!--String--&gt;</code>), use
                        <b-icon-clipboard-plus/>
                        instead.
                    </li>
                    <li class="mb-2"><strong>Localization.</strong> You can choose from any of the languages
                        that The Sims 4 supports, and the file name will be formatted correctly when you export it.
                    </li>
                </ul>
                <p><strong>Step 3:</strong> Download the modified string table.</p>
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
            <p>Are you sure you uploaded a valid string table binary? If you did, please send me the file you uploaded
                and tell me what the below error message says.</p>
            <pre class="mb-0">{{ errorMessage }}</pre>
        </b-alert>

        <b-row v-if="fileContents" id="stbl-content">
            <b-col cols="12">
                <b-form-select name="language" v-model="languageCode">
                    <option
                        v-for="language in languages"
                        :key="language.name"
                        :value="language.stblCode">
                        {{ language.emoji }} {{ language.name }} ({{ language.nativeName }})
                    </option>
                </b-form-select>
            </b-col>
            <b-col cols="12" md="6" v-for="(stringEntry, n) in fileContents" :key="n" class="my-3">
                <div>
                    <b-card class="floating-card">
                        <div class="d-flex flex-row mb-2">
                            <h3>{{ stringEntry.key }}</h3>
                            <div class="w-100 text-right" style="font-size: 1.2em">
                                <b-icon-clipboard
                                    v-clipboard="() => `${stringEntry.key}`"
                                    class="hover-cursor"
                                    :id="`clipboard-${n}`"
                                    title="Copy key to clipboard"
                                />
                                <b-popover :target="`clipboard-${n}`" triggers="click blur" placement="top">
                                    Copied!
                                </b-popover>
                                <b-icon-clipboard-plus
                                    v-clipboard="() => `${stringEntry.key}<!--${stringEntry.string}-->`"
                                    class="hover-cursor ml-2"
                                    :id="`clipboard-plus-${n}`"
                                    title="Copy key and comment to clipboard"
                                />
                                <b-popover :target="`clipboard-plus-${n}`" triggers="click blur" placement="top">
                                    Copied!
                                </b-popover>
                                <b-icon-three-dots class="ml-2" :id="`more-actions-${n}`"></b-icon-three-dots>
                                <b-popover :target="`more-actions-${n}`" triggers="hover" placement="top">
                                    <b-icon-key title="Edit existing key" class="hover-cursor"/>
                                    <b-icon-arrow-repeat title="Generate new key" class="ml-2 hover-cursor"/>
                                    <b-icon-trash-fill
                                        variant="danger"
                                        class="ml-2 hover-cursor"
                                        title="Delete string"
                                    />
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
            <b-col cols="12" md="6" class="my-3 text-center h-100" style="font-size: 3rem;">
                <b-icon-plus-circle class="blurple-text hover-cursor"/>
            </b-col>
        </b-row>

        <!--        <div id="stbl-footer-container" v-if="Boolean(fileContents)">-->
        <!--            <p>test</p>-->
        <!--        </div>-->
    </b-container>
</template>

<script>
import SectionHeader from "@/components/Common/SectionHeader";
import {
    BIconPlus,
    BIconPlusCircle,
    BIconTrashFill,
    BIconClipboard,
    BIconClipboardPlus,
    BIconArrowRepeat,
    BIconThreeDots,
    BIconKey
} from 'bootstrap-vue';
import {getStblContents, Languages} from "@/components/scripts/stblReader";

export default {
    name: "StblEditor",
    components: {
        SectionHeader,
        BIconPlusCircle,
        BIconPlus,
        BIconTrashFill,
        BIconClipboard,
        BIconArrowRepeat,
        BIconThreeDots,
        BIconClipboardPlus,
        BIconKey
    },
    data() {
        return {
            stblFile: null,
            fileContents: null,
            errorMessage: null,
            languages: Languages,
            languageCode: '00'
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

    .custom-file-input ~ .custom-file-label {
        border-color: var(--accent-color);
    }

    .custom-file-input:focus ~ .custom-file-label {
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

    .hover-cursor:hover {
        cursor: pointer;
    }

    #stbl-footer-container {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: transparentize($off-white, 0.8);
    }

    .blurple-text {
        color: $blurple;
    }
}
</style>
