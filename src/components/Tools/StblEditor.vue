<template>
    <b-container id="stbl-editor-container" class="p-5" fluid>
        <div class="mb-5">
            <div class="mb-5">
                <h1 class="mb-3">String Table Editor</h1>
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
                        button in the bottom-right corner of the screen or press <kbd>WIN/CTRL</kbd> + <kbd>N</kbd>
                        to add a string (Windows use <kbd>WIN</kbd>, macOS use <kbd>CTRL</kbd>). You will be prompted
                        for a string, and it will automatically be hashed and put in the table when you submit it.
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
                </ul>
                <p><strong>Step 3:</strong> Download your modified string table with the
                    <b-icon-download/>
                    button in the bottom-right corner of the screen.
                </p>
            </div>
        </div>

        <b-row class="text-center mb-5" id="upload-area">
            <b-col cols="12" md="6" class="my-2">
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
            <b-col cols="12" md="6" class="text-center text-md-right my-2">
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
                        <a @click="downloadStbl()"
                           :href="downloadUrl"
                           :download="downloadFilename"
                           title="Download string table"
                           class="btn btn-primary"><b-icon-download/></a>
                        <button v-on:click="newString()" title="New string" class="btn btn-primary">
                            <b-icon-plus-circle/>
                        </button>
                    </b-button-group>
                </b-button-toolbar>
            </div>

            <div id="pagination-container" v-if="numEntries > entryChunkSize">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="numEntries"
                    :per-page="entryChunkSize"
                    first-number
                    last-number
                    pills
                ></b-pagination>
            </div>

            <b-col cols="12">
                <hr id="content-divider" class="mb-5">
            </b-col>
            <b-col cols="6" md="3" class="my-3">
                <b-form-select name="language" v-model="selectedLanguage" @input="updateLocaleInInstance">
                    <option
                        v-for="language in languages"
                        :key="language.name"
                        :value="language">
                        {{ language.emoji }} {{ language.name }} ({{ language.nativeName }})
                    </option>
                </b-form-select>
            </b-col>
            <b-col cols="6" md="3" class="my-3">
                <b-form-input
                    v-model="fileTGI.t"
                    placeholder="Type"
                    :state="typeIsValid"
                    :disabled="typeIsValid"
                />
                <b-form-invalid-feedback>
                    Type should be "220557DA"
                </b-form-invalid-feedback>
            </b-col>
            <b-col cols="6" md="3" class="my-3">
                <b-form-input
                    v-model="fileTGI.g"
                    placeholder="Group"
                    :state="groupIsValid"
                />
                <b-form-invalid-feedback>
                    Group must be a 32-bit hex code
                </b-form-invalid-feedback>
            </b-col>
            <b-col cols="6" md="3" class="my-3">
                <b-form-input
                    v-model="fileTGI.i"
                    placeholder="Instance"
                    :state="instanceIsValid"
                />
                <b-form-invalid-feedback>
                    <p v-if="!instanceIs64Bit" class="mb-0">Instance must be a 64-bit hex code</p>
                    <p v-if="!instanceMatchesLocale">First two digits must match locale ({{ selectedLanguage.stblCode }})</p>
                </b-form-invalid-feedback>
            </b-col>
            <b-col cols="12" v-if="fileContents === null || fileContents.length === 0" class="my-5 text-center">
                <p>This string table is empty. To add a new string, either click the
                    <b-icon-plus-circle/>
                    button, press the <kbd>CTRL/CMD</kbd> + <kbd>N</kbd> keys, or
                    <span v-on:click="newString" class="clickable">click here</span>.
                </p>
            </b-col>
            <b-col cols="12" md="6" v-for="(stringEntry, n) in entriesToShow" :key="n" class="my-3">
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
import {getStblContents} from "@/components/scripts/stblDecoder";
import {Languages, EnglishData} from "@/components/scripts/stblUtils";
import {serializeStbl} from "@/components/scripts/stblEncoder";
import fnv from "fnv-plus";


function formatKeyAsHex(dec) {
    return "0x" + dec.toString(16).toUpperCase().padStart(8, "0");
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
            selectedLanguage: EnglishData,
            fileTGI: null,
            downloadUrl: '',
            entryChunkSize: 40,
            currentPage: 1
        }
    },
    computed: {
        downloadFilename() {
            if (!this.fileTGI) {
                return '';
            }

            const tgiPrefix = `${this.fileTGI.t}!${this.fileTGI.g}!${this.fileTGI.i}`;
            return `${tgiPrefix}.${this.selectedLanguage.name}.StringTable.binary`;
        },
        entriesToShow() {
            const endIndex = Math.min(this.numEntries, this.currentPage * this.entryChunkSize);
            const offset = (this.currentPage - 1) * this.entryChunkSize;
            return this.fileContents.slice(offset, endIndex)
        },
        numEntries() {
            return this.fileContents.length;
        },
        typeIsValid() {
            return this.fileTGI.t === "220557DA";
        },
        groupIsValid() {
            return /^([0-9A-F]{8})$/i.test(this.fileTGI.g);
        },
        instanceIsValid() {
            return this.instanceIs64Bit && this.instanceMatchesLocale;
        },
        instanceIs64Bit() {
            return /^([0-9A-F]{16})$/i.test(this.fileTGI.i);
        },
        instanceMatchesLocale() {
            return this.selectedLanguage.stblCode === this.fileTGI.i.substr(0, 2);
        }
    },
    methods: {
        handleKeydown(event) {
            const keyComboPassed = (event.ctrlKey || event.metaKey) && event.key === 'n';
            if (keyComboPassed && (Array.isArray(this.fileContents))) {
                this.newString();
            }
        },
        updateLocaleInInstance() {
            this.fileTGI.i = this.selectedLanguage.stblCode + this.fileTGI.i.substring(2);
        },
        newStbl() {
            if (this.fileContents === null || confirm("Are you sure you want to overwrite the string table you currently have open? Its contents cannot be recovered once you do this.")) {
                this.stblFile = null;
                this.errorMessage = null;
                this.fileContents = [];
                this.setDefaultTGI();
            }
        },
        getHexCode(index) {
            return formatKeyAsHex(this.entriesToShow[index].key);
        },
        setDefaultTGI() {
            this.fileTGI = {
                t: "220557DA",
                g: "80000000",
                i: null
            };

            while (this.fileTGI.i === null) {
                const name = prompt("Enter a name to hash for the instance ID of your string table. It should be a unique name, prefixed with your creator name, such as 'YourName:stringTable_UniqueDescription'.");
                if (name) {
                    const instanceHex = fnv.hash(name, 64).hex().toUpperCase().padStart(16, "0");
                    this.fileTGI.i = this.selectedLanguage.stblCode + instanceHex.substring(2);
                }
            }
        },
        setLanguageAndTGIFromFilename() {
            try {
                let t, g, i = undefined;

                if (this.stblFile.name.includes('!')) {
                    [t, g, i] = this.stblFile.name.split('.')[0].split('!');
                } else {
                    [, t, g, i] = this.stblFile.name.split('.')[0].split('_');
                }

                this.fileTGI = {t, g, i};
                const localeCode = i.substr(0, 2);
                this.selectedLanguage = this.languages.find(language => language.stblCode === localeCode);
            } catch (error) {
                alert("I could read the contents of your file, but not its type, group, instance, or locale code. In order for me to read these values, your filename must follow either the S4S or S4PE naming conventions.\n\nYou will be prompted to enter a name to hash for the instance ID of this string table.");
                this.setDefaultTGI();
            }
        },
        refreshStbl() {
            if (this.stblFile === null) return;
            getStblContents(this.stblFile).then(result => {
                if (result === null || typeof result === "string") {
                    this.fileContents = null;
                    this.errorMessage = result;
                } else {
                    this.errorMessage = null;
                    this.fileContents = result.stringEntries.map(entry => {
                        return {key: entry.key, string: entry.string};
                    });
                    this.setLanguageAndTGIFromFilename();
                }
            });
        },
        deleteString(index) {
            const indexToUse = index + ((this.currentPage - 1) * this.entryChunkSize);
            if (confirm(`Are you sure you want to delete string ${formatKeyAsHex(this.fileContents[indexToUse].key)}? This action cannot be undone.`)) {
                this.fileContents.splice(indexToUse, 1);
            }
        },
        newString() {
            const string = prompt("Enter a string.");
            const key = parseInt(fnv.fast1a32hex(string), 16);
            this.fileContents.push({key, string});
        },
        newHash(index) {
            const stringEntry = this.entriesToShow[index];
            if (stringEntry.string) stringEntry.key = parseInt(fnv.fast1a32hex(stringEntry.string), 16);
        },
        keyToClipboard(index) {
            return formatKeyAsHex(this.entriesToShow[index].key);
        },
        setManualKey(index) {
            const newKey = prompt("Enter the 32-bit hash to use.", this.getHexCode(index));
            if (newKey && newKey.match(/^0x([0-9A-F]{8})$/i)) {
                this.entriesToShow[index].key = parseInt(newKey, 16);
            } else {
                alert(`${newKey} is not a valid key. It must be a 32-bit (8 digit) hex code, prefixed with 0x.`);
            }
        },
        keyAndStringToClipboard(index) {
            const stringEntry = this.entriesToShow[index];
            return formatKeyAsHex(stringEntry.key) + "<!--" + stringEntry.string + "-->";
        },
        downloadStbl() {
            const tgiValid = this.typeIsValid && this.groupIsValid && this.instanceIsValid && this.instanceMatchesLocale;
            if (!tgiValid)
                alert('Your string table either does not have a valid type, group, or instance, or its instance does not match the locale you have selected. You may experience issues when importing your string table to S4S.');
            const stblBuffer = serializeStbl(this.fileContents);
            this.downloadUrl = `data:text/plain;base64,${stblBuffer.toString('base64')}`;
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

        .btn.btn-primary {
            background-color: $blurple;
            border-color: $blurple;
            color: white;

            &:hover {
                border-color: white;
            }
        }
    }

    #pagination-container {
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 1024;

        ul.b-pagination {
            margin-bottom: 0;
        }

        .page-item:not(.active) .page-link {
            color: var(--accent-color);
        }

        .page-item.active .page-link {
            background-color: var(--accent-color);
            border-color: var(--accent-color);
        }
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
