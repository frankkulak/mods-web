<template>
    <b-container id="stbl-editor-container" class="p-5" fluid>
        <div class="mb-5">
            <div class="mb-5">
                <h1 class="mb-3">Easy String Tables</h1>
                <p>This experimental tool provides an interface for creating and editing string tables. It
                    currently only works with string table binaries (<code>.binary</code>/<code>.stbl</code> files),
                    and can only edit one at a time. Support for packages and multiple string tables will come soon™.
                    Reach out to me on Discord if you experience any issues while using it.</p>
                <p>Please note that this tool does not edit the files you upload. It just uses their contents as a
                    starting point, and then lets you download a modified version.</p>
            </div>

            <div class="mb-5">
                <section-header text="how to use" class="mb-4"></section-header>
                <p><strong>Step 1:</strong> Upload an existing <code>.binary</code>/<code>.stbl</code> file, or
                    create a fresh one with the "New String Table" button. This will bring up the editor.</p>
                <p><strong>Step 2:</strong> Modify and interact with your string table.</p>
                <ul>
                    <li class="mb-2"><strong>Adding.</strong> Either use the
                        <b-icon-plus-circle/>
                        button in the bottom-right corner of the screen or press <kbd>CTRL/CMD</kbd> + <kbd>N</kbd> to add a string. A popup will prompt you for a
                        string to add, and will automatically hash and add it to the table when you are done.
                    </li>
                    <li class="mb-2"><strong>Editing.</strong> Simply click on the string you would like to edit, and
                        start typing. Editing a string will <strong>not</strong> rehash its key, but if you would like
                        to generate a new hash, you can hover over
                        <b-icon-three-dots/>
                        and click the
                        <b-icon-arrow-repeat/>
                        icon. To manually set the key, click the
                        <b-icon-key/>
                        icon.
                    </li>
                    <li class="mb-2"><strong>Deleting.</strong> Hover over
                        <b-icon-three-dots/>
                        and click the
                        <b-icon-trash-fill variant="danger"/>
                        button. You will then be asked for confirmation, because this action cannot be undone.
                    </li>
                    <li class="mb-2"><strong>Copying.</strong> To copy the key (<code>0x00000000</code>),
                        click the
                        <b-icon-clipboard/>
                        button. To copy both the key and string (<code>0x00000000&lt;!--String--&gt;</code>), use
                        <b-icon-clipboard-plus/>
                        instead.
                    </li>
                    <li class="mb-2"><strong>Localizing.</strong> Choose the language that your string table is written
                        in, and the program will use the correct hash prefix when exporting your file.
                    </li>
                </ul>
                <p><strong>Step 3:</strong> Download your modified string table with the
                    <b-icon-download/>
                    button in the bottom-right corner of the screen.</p>
            </div>
        </div>

        <b-row class="text-center mb-5" id="upload-area">
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
                <b-button id="new-stbl-btn" v-on:click="newStbl()" class="gradient-button" pill>
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

        <b-row v-if="Array.isArray(fileContents)" id="stbl-content">
            <div id="utility-buttons-container">
                <b-button-toolbar class="text-right float-right floating-card">
                    <b-button-group>
                        <b-button v-on:click="downloadStbl()">
                            <b-icon-download/>
                        </b-button>
                        <b-button v-on:click="newString()">
                            <b-icon-plus-circle/>
                        </b-button>
                    </b-button-group>
                </b-button-toolbar>
            </div>

            <b-col cols="12">
                <hr id="content-divider" class="mb-5">
            </b-col>
            <b-col cols="12" md="6" class="my-3">
                <b-form-select name="language" v-model="languageCode">
                    <option
                        v-for="language in languages"
                        :key="language.name"
                        :value="language.stblCode">
                        {{ language.emoji }} {{ language.name }} ({{ language.nativeName }})
                    </option>
                </b-form-select>
            </b-col>
            <b-col cols="12" md="6"></b-col>
            <b-col cols="12" v-if="fileContents === null || fileContents.length === 0" class="my-5 text-center">
                <p>This string table is empty. To add a new string, either click the
                    <b-icon-plus-circle/>
                    button, press the <kbd>CTRL/CMD</kbd> + <kbd>N</kbd> keys, or
                    <span v-on:click="newString" class="clickable">click here</span>.</p>
            </b-col>
            <b-col cols="12" md="6" v-for="(stringEntry, n) in fileContents" :key="n" class="my-3">
                <div>
                    <b-card class="floating-card">
                        <div class="d-flex flex-row mb-2">
                            <h3>{{ getHexCode(n) }}</h3>
                            <div class="w-100 text-right" style="font-size: 1.2em">
                                <b-icon-clipboard
                                    v-clipboard="() => keyToClipboard(n)"
                                    class="hover-cursor"
                                    :id="`clipboard-${n}`"
                                    title="Copy key to clipboard"
                                />
                                <b-popover :target="`clipboard-${n}`" triggers="click blur" placement="top">
                                    Copied!
                                </b-popover>
                                <b-icon-clipboard-plus
                                    v-clipboard="() => keyAndStringToClipboard(n)"
                                    class="hover-cursor ml-2"
                                    :id="`clipboard-plus-${n}`"
                                    title="Copy key and comment to clipboard"
                                />
                                <b-popover :target="`clipboard-plus-${n}`" triggers="click blur" placement="top">
                                    Copied!
                                </b-popover>
                                <b-icon-three-dots class="ml-2" :id="`more-actions-${n}`"></b-icon-three-dots>
                                <b-popover :target="`more-actions-${n}`" triggers="hover" placement="top">
                                    <b-icon-key
                                        title="Edit existing key"
                                        class="hover-cursor"
                                        v-on:click="setManualKey(n)"
                                    />
                                    <b-icon-arrow-repeat
                                        title="Generate new key"
                                        class="ml-2 hover-cursor"
                                        v-on:click="newHash(n)"
                                    />
                                    <b-icon-trash-fill
                                        variant="danger"
                                        class="ml-2 hover-cursor"
                                        title="Delete string"
                                        v-on:click="deleteString(n)"
                                    />
                                </b-popover>
                            </div>
                        </div>

                        <b-form-textarea
                            v-model="stringEntry.string"
                            placeholder="{0.SimFirstName} is reticulating {M0.his}{F0.her} splines!"
                            rows="3"
                            max-rows="3"
                            no-resize
                            debounce="500"
                        ></b-form-textarea>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import SectionHeader from "@/components/Common/SectionHeader";
import {
    BIconPlusCircle,
    BIconTrashFill,
    BIconClipboard,
    BIconClipboardPlus,
    BIconArrowRepeat,
    BIconThreeDots,
    BIconKey,
    BIconDownload
} from 'bootstrap-vue';
import {getStblContents, Languages, fnv32a} from "@/components/scripts/stblReader";


function formatKeyAsHex(keyDec) {
    return "0x" + keyDec.toString(16).toUpperCase().padStart(8, "0");
}


const previousHandlers = [];


export default {
    name: "StblEditor",
    components: {
        SectionHeader,
        BIconPlusCircle,
        BIconTrashFill,
        BIconClipboard,
        BIconArrowRepeat,
        BIconThreeDots,
        BIconClipboardPlus,
        BIconKey,
        BIconDownload
    },
    created() {
        if (previousHandlers.length > 0) {
            previousHandlers.forEach(handler => {
                document.removeEventListener('keydown', handler);
            });

            previousHandlers.length = 0;
        }

        document.addEventListener('keydown', this.handleKeydown);
        previousHandlers.push(this.handleKeydown);
    },
    data() {
        return {
            stblFile: null,
            fileContents: null,
            errorMessage: null,
            languages: Languages,
            languageCode: '00',
            isAskingForString: false
        }
    },
    methods: {
        handleKeydown(event) {
            const keyComboPassed = (event.ctrlKey || event.metaKey) && event.key === 'n';
            if (keyComboPassed && (Array.isArray(this.fileContents))) {
                this.newString();
            }
        },
        newStbl() {
            if (this.fileContents === null) {
                this.fileContents = [];
            } else if (this.fileContents.length > 0) {
                if (confirm("Are you sure you want to overwrite the string table you currently have open? Its contents cannot be recovered once you do this."))
                    this.fileContents = [];
            }
        },
        getHexCode(index) {
            return formatKeyAsHex(this.fileContents[index].key);
        },
        refreshStbl() {
            getStblContents(this.stblFile).then(result => {
                if (result === null || typeof result === "string") {
                    this.fileContents = null;
                    this.errorMessage = result;
                } else {
                    this.errorMessage = null;
                    this.fileContents = result.stringEntries.map(entry => {
                        return {key: entry.key, string: entry.string};
                    });
                }
            });
        },
        deleteString(index) {
            if (confirm(`Are you sure you want to delete string ${formatKeyAsHex(this.fileContents[index].key)}? This action cannot be undone.`)) {
                this.fileContents.splice(index, 1);
            }
        },
        newString() {
            this.isAskingForString = true;
            const string = prompt("Enter a string.");
            const key = fnv32a(string);
            this.fileContents.push({key, string});
            this.isAskingForString = false;
        },
        newHash(index) {
            const stringEntry = this.fileContents[index];
            if (stringEntry.string) stringEntry.key = fnv32a(stringEntry.string);
        },
        keyToClipboard(index) {
            return formatKeyAsHex(this.fileContents[index].key);
        },
        setManualKey(index) {
            const newKey = prompt("Enter the 32-bit hash to use.", this.getHexCode(index));
            if (newKey && newKey.match(/^0x([0-9A-F]{8})$/i)) {
                this.fileContents[index].key = parseInt(newKey, 16);
            } else {
                alert(`${newKey} is not a valid key. It must be a 32-bit (8 digit) hex code, prefixed with 0x.`);
            }
        },
        keyAndStringToClipboard(index) {
            const stringEntry = this.fileContents[index];
            return formatKeyAsHex(stringEntry.key) + "<!--" + stringEntry.string + "-->";
        },
        downloadStbl() {
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

    button.gradient-button {
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

    #utility-buttons-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1024;
    }

    hr#content-divider {
        border-style: solid;
        border-radius: 2px;
        border-width: 1px;
        border-color: var(--accent-color);
        width: 100%;
    }

    .floating-card {
        @extend %floating-card;
    }

    .hover-cursor:hover {
        cursor: pointer !important;
    }

    .blurple-text {
        color: $blurple;
    }

    .clickable {
        color: $blurple;
        text-decoration: underline;

        &:hover {
            cursor: pointer;
        }
    }

    kbd {
        background-color: white;
        color: $dark-gray;
        border-color: $dark-gray;
        border-radius: 6px;
        border-width: 1px;
        font-size: 0.8em;
        border-style: solid;
    }
}
</style>
