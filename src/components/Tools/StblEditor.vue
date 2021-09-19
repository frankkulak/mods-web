<template>
    <b-container id="stbl-editor-container" class="px-2 px-sm-3 px-md-5 py-5" fluid>
        <div class="mb-5">
            <div class="mb-5">
                <h1 class="mb-3">String Table Editor</h1>
                <p>This experimental tool provides an interface for creating and editing string tables. It only works
                    with string table binaries (<code>.binary</code>/<code>.stbl</code> files), not packages. Please
                    note that this tool does not edit the files you upload, but allows you to modify and download a
                    copy of it. Reach out to me on Discord if you experience any issues.</p>
                <p>This is meant to be a temporary solution while I work on something larger, so I may discontinue
                    support for it when my other tool is completed.</p>
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
                    accept=".binary, .stbl, .StringTable"
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
                           class="btn btn-primary">
                            <b-icon-download/>
                        </a>
                        <button v-on:click="newString()" title="New string" class="btn btn-primary">
                            <b-icon-plus-circle/>
                        </button>
                    </b-button-group>
                </b-button-toolbar>
                <b-button-toolbar class="text-right float-right floating-card mr-3">
                    <b-button-group>
                        <button v-on:click="clearSearch()" title="Clear search" class="btn btn-primary" :disabled="searchTerm === null">
                            <b-icon-x-circle/>
                        </button>
                        <button v-on:click="searchButtonClicked()" title="Search" class="btn btn-primary">
                            <b-icon-search/>
                        </button>
                    </b-button-group>
                </b-button-toolbar>
                <b-button-toolbar class="text-right float-right floating-card mr-3">
                    <b-button-group>
                        <button v-b-modal.settings-modal title="Settings" class="btn btn-primary">
                            <b-icon-gear/>
                        </button>
                        <b-modal id="settings-modal" title="Settings" hide-footer>
                            <b-container fluid>
                                <b-row align-v="center" class="my-3">
                                    <b-col cols="12">
                                        <h4 class="mb-3">Importing</h4>
                                    </b-col>
                                    <b-col>
                                        <label class="mb-0">Auto-hash filenames</label>
                                    </b-col>
                                    <b-col>
                                        <b-form-checkbox v-model="autoHashFilenames" switch></b-form-checkbox>
                                    </b-col>
                                </b-row>
                                <b-row align-v="center" class="my-3">
                                    <b-col>
                                        <label class="mb-0">Autosave & recovery</label>
                                    </b-col>
                                    <b-col>
                                        <b-form-checkbox
                                            v-model="shouldCacheFileContents"
                                            switch
                                            @change="cacheSettingChanged"></b-form-checkbox>
                                    </b-col>
                                </b-row>
                                <b-row align-v="center" class="my-3">
                                    <b-col cols="12">
                                        <hr>
                                        <h4 class="mb-3">Display</h4>
                                    </b-col>
                                    <b-col>
                                        <label class="mb-0">Show all strings</label>
                                    </b-col>
                                    <b-col>
                                        <b-form-checkbox v-model="showAllStrings" switch></b-form-checkbox>
                                        <div class="text-danger" v-if="showAllStrings">
                                            <p>This may impact performance</p>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row align-v="center" class="my-3">
                                    <b-col>
                                        <label class="mb-0">Strings per page</label>
                                    </b-col>
                                    <b-col>
                                        <b-form-input
                                            id="chunk-size-input"
                                            v-model="entryChunkSize"
                                            type="number"
                                            min="1"
                                            step="1"
                                            onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
                                            :state="entryChunkSize >= 1"
                                            :disabled="showAllStrings"
                                            placeholder="Enter an integer"
                                            size="sm"
                                        ></b-form-input>
                                        <div class="text-danger" v-if="!showAllStrings && entryChunkSize > 100">
                                            <p>This may impact performance</p>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row align-v="center" class="my-3">
                                    <b-col>
                                        <label class="mb-0">Show previous text</label>
                                    </b-col>
                                    <b-col>
                                        <b-form-checkbox v-model="showPreviousTextTooltip" switch></b-form-checkbox>
                                    </b-col>
                                </b-row>
                                <b-row align-v="center" class="my-3">
                                    <b-col>
                                        <label class="mb-0">Page layout</label>
                                    </b-col>
                                    <b-col>
                                        <b-form-radio-group
                                            v-model="chosenLayoutType"
                                            :options="layoutTypes"
                                        ></b-form-radio-group>
                                    </b-col>
                                </b-row>
                                <b-row align-v="center" class="my-3">
                                    <b-col cols="12">
                                        <hr>
                                        <h4 class="mb-3">Exporting</h4>
                                    </b-col>
                                    <b-col>
                                        <label class="mb-0">Naming convention</label>
                                    </b-col>
                                    <b-col>
                                        <b-form-radio-group
                                            v-model="filenameType"
                                            :options="filenameTypeOptions"
                                        ></b-form-radio-group>
                                    </b-col>
                                    <b-col cols="12">
                                        <p class="mt-2" style="font-size: 0.8em;">Note: If you are translating one of
                                            my mods, please export as S4S.</p>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-modal>
                    </b-button-group>
                </b-button-toolbar>
            </div>

            <div id="pagination-container" v-if="entriesToShow.length < numEntries">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="numEntries"
                    :per-page="entryChunkSize"
                    first-number
                    last-number
                    pills
                ></b-pagination>
            </div>

            <div id="autosave-disabled-warning" v-if="autosaveDisabled && shouldCacheFileContents" class="px-3 py-1 alert-danger">
                <p>Autosave Disabled!</p>
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
                    autocomplete="off"
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
                    autocomplete="off"
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
                    autocomplete="off"
                />
                <b-form-invalid-feedback>
                    <p v-if="!instanceIs64Bit" class="mb-0">Instance must be a 64-bit hex code</p>
                    <p v-if="!instanceMatchesLocale">First two digits must match locale ({{
                            selectedLanguage.stblCode
                        }})</p>
                </b-form-invalid-feedback>
            </b-col>
            <b-col cols="12" v-if="fileContents === null || fileContents.length === 0" class="my-5 text-center">
                <p>This string table is empty. To add a new string, either click the
                    <b-icon-plus-circle/>
                    button, press the <kbd>WIN/CTRL</kbd> + <kbd>N</kbd> keys, or
                    <span v-on:click="newString" class="clickable">click here</span>.
                </p>
            </b-col>
            <b-col cols="12" v-else-if="filteredStrings.length === 0 && searchTerm !== null" class="my-5 text-center">
                <p>No strings in this table contain "{{ searchTerm }}". You can either
                    <span @click="clearSearch" class="clickable">clear your search term</span>,
                    or <span @click="searchButtonClicked" class="clickable">try another one</span>.
                </p>
            </b-col>
            <b-row class="w-100 m-0 p-0 text-center" v-if="this.chosenLayoutType === 'cards'">
                <b-col cols="12" sm="6" md="4" v-for="(stringEntry, n) in entriesToShow" :key="n" class="my-3">
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
                                @focusin="onStringInputFocused(stringEntry)"
                                @focusout="onStringInputUnfocused"
                                placeholder="{0.SimFirstName} is reticulating {M0.his}{F0.her} splines!"
                                :id="`string-input-${n}`"
                                rows="3"
                                max-rows="3"
                                no-resize
                                debounce="500"
                            ></b-form-textarea>
                            <b-popover
                                :target="`string-input-${n}`"
                                v-if="showStringEntryTooltip(stringEntry)"
                                title="Previous Text"
                                :content="selectedEntryPreviousState.string"
                                placement="top">
                            </b-popover>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
            <b-row class="w-100 mx-0 mb-0 mt-3 p-0 text-center" v-else>
                <b-col cols="12" v-for="(stringEntry, n) in entriesToShow" :key="n" class="listview-column">
                    <b-card :class="n % 2 === 0 ? 'listview-card' : 'listview-card listview-card-dark'">
                        <b-row align-v="center">
                            <b-col cols="12" md="2" xl="1" class="px-md-1 mb-2 mb-md-0 text-left text-md-center text-nowrap">
                                <h4 class="my-auto">{{ getHexCode(n) }}</h4>
                            </b-col>
                            <b-col cols="12" md="8" xl="10">
                                <b-form-input
                                    style=""
                                    :id="`string-input-${n}`"
                                    @focusin="onStringInputFocused(stringEntry)"
                                    @focusout="onStringInputUnfocused"
                                    v-model="stringEntry.string"
                                    placeholder="{0.SimFirstName} is reticulating {M0.his}{F0.her} splines!"
                                    debounce="500"
                                    autocomplete="off"
                                ></b-form-input>
                                <b-popover
                                    :target="`string-input-${n}`"
                                    v-if="showStringEntryTooltip(stringEntry)"
                                    title="Previous Text"
                                    :content="selectedEntryPreviousState.string"
                                    placement="top">
                                </b-popover>
                            </b-col>
                            <b-col cols="12" md="2" xl="1" class="px-md-1 mt-2 mt-md-0">
                                <div style="font-size: 1.2em;" class="text-left text-md-center text-nowrap">
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
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <b-col cols="12" v-if="entriesToShow.length < numEntries" class="text-center mt-4">
                Page {{ currentPage }} of {{ totalPages }}
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
    BIconDownload,
    BIconGear,
    BIconSearch,
    BIconXCircle
} from 'bootstrap-vue';
import {getStblContents} from "@/scripts/tools/stblDecoder";
import {Languages, EnglishData, getTGI, getLocale} from "@/scripts/tools/stblUtils";
import {serializeStbl} from "@/scripts/tools/stblEncoder";
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
        BIconDownload,
        BIconGear,
        BIconSearch,
        BIconXCircle
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

        this.autoHashFilenames = localStorage.getItem('fkStblTool_AutoHashFiles') === "true";
        this.showAllStrings = localStorage.getItem('fkStblTool_ShowAllStrings') === "true";
        this.entryChunkSize = localStorage.getItem('fkStblTool_ChunkSize') || 24;
        this.filenameType = localStorage.getItem('fkStblTool_OutputFormat') || 's4s';
        this.chosenLayoutType = localStorage.getItem('fkStblTool_LayoutType') || 'cards';
        const prevTextTooltip = localStorage.getItem('fkStblTool_PrevTextTooltip');
        this.showPreviousTextTooltip = prevTextTooltip === null || prevTextTooltip === "true";
        const cacheFileContents = localStorage.getItem('fkStblTool_CacheFileContents');
        this.shouldCacheFileContents = cacheFileContents === null || cacheFileContents === "true";

        // load file data
        const fileContents = localStorage.getItem('fkStblTool_FileContents');
        if (fileContents !== null) {
            this.fileContents = JSON.parse(fileContents);
            const fileTGI = localStorage.getItem('fkStblTool_FileTGI');
            this.fileTGI = JSON.parse(fileTGI);
            const languageName = localStorage.getItem('fkStblTool_FileLanguageName');
            const language = this.languages.find(({name}) => name === languageName);
            this.selectedLanguage = language || EnglishData;
        }
    },
    mounted() {
        this.$root.$on('bv::modal::hide', (bvEvent, modalId) => {
            if (modalId === "settings-modal") {
                this.saveSettings();
            }
        })
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
            entryChunkSize: 24,
            currentPage: 1,
            showAllStrings: false,
            autoHashFilenames: false,
            filenameType: 's4s',
            filenameTypeOptions: [
                {text: 'S4S', value: 's4s'},
                {text: 'S4PE', value: 's4pe'}
            ],
            chosenLayoutType: 'cards',
            layoutTypes: [
                {text: 'Cards', value: 'cards'},
                {text: 'List', value: 'list'}
            ],
            showPreviousTextTooltip: true,
            searchTerm: null,
            cachedFilteredStrings: null,
            selectedEntryPreviousState: null,
            shouldCacheFileContents: true,
            autosaveDisabled: false
        }
    },
    watch: {
        shouldCacheFileContents(newValue) {
            if (!newValue) {
                this.clearFileCache();
            }
        },
        totalEntries() {
            this.tryCacheFileContents();
        },
        tgilValues() {
            this.tryCacheFileContents();
        }
    },
    computed: {
        downloadFilename() {
            if (this.filenameType === 's4s') {
                const tgiPrefix = `${this.fileTGI.t}!${this.fileTGI.g}!${this.fileTGI.i}`;
                return `${tgiPrefix}.${this.selectedLanguage.name}.StringTable.binary`;
            } else {
                const tgiPrefix = `${this.fileTGI.t}_${this.fileTGI.g}_${this.fileTGI.i}`;
                return `S4_${tgiPrefix}.stbl`;
            }
        },
        entriesToShow() {
            if (this.showAllStrings) return this.filteredStrings;
            const endIndex = Math.min(this.numEntries, this.currentPage * this.entryChunkSize);
            const offset = (this.currentPage - 1) * this.entryChunkSize;
            return this.filteredStrings.slice(offset, endIndex)
        },
        filteredStrings() {
            if (this.searchTerm === null) return this.fileContents;
            if (this.cachedFilteredStrings !== null) return this.cachedFilteredStrings;
            return this.fileContents.filter(entry => {
                return this.stringKeyBeingEdited === entry.key || entry.string.toLowerCase().includes(this.searchTerm);
            });
        },
        numEntries() {
            return this.filteredStrings.length;
        },
        totalEntries() {
            return this.fileContents === null ? 0 : this.fileContents.length;
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
        },
        totalPages() {
            return Math.ceil(this.numEntries / this.entryChunkSize);
        },
        tgilValues() {
            return {locale: this.selectedLanguage, tgi: this.fileTGI};
        }
    },
    methods: {
        saveSettings() {
            localStorage.setItem('fkStblTool_AutoHashFiles', this.autoHashFilenames);
            localStorage.setItem('fkStblTool_ShowAllStrings', this.showAllStrings);
            localStorage.setItem('fkStblTool_ChunkSize', this.entryChunkSize);
            localStorage.setItem('fkStblTool_OutputFormat', this.filenameType);
            localStorage.setItem('fkStblTool_LayoutType', this.chosenLayoutType);
            localStorage.setItem('fkStblTool_PrevTextTooltip', this.showPreviousTextTooltip);
            localStorage.setItem('fkStblTool_CacheFileContents', this.shouldCacheFileContents);
        },
        tryCacheFileContents() {
            if (this.shouldCacheFileContents) {
                if (this.fileContents === null) return;
                if (this.fileContents.length > 500) {
                    if (!this.autosaveDisabled) {
                        alert('Autosave is disabled for this string table.\n\nFor performance and storage reasons, autosave is only available for string tables with 500 or fewer entries. To continue using autosave, please export this string table and start working on a new one. You can merge your string tables together later (I have a tool for that as well!).');
                        this.autosaveDisabled = true;
                    }
                } else {
                    localStorage.setItem('fkStblTool_FileContents', JSON.stringify(this.fileContents));
                    localStorage.setItem('fkStblTool_FileTGI', JSON.stringify(this.fileTGI));
                    localStorage.setItem('fkStblTool_FileLanguageName', this.selectedLanguage.name);
                    this.autosaveDisabled = false;
                }
            } else {
                this.autosaveDisabled = false;
            }
        },
        cacheSettingChanged() {
            if (!this.shouldCacheFileContents) this.clearFileCache();
        },
        clearFileCache() {
            localStorage.removeItem('fkStblTool_FileContents');
            localStorage.removeItem('fkStblTool_FileTGI');
            localStorage.removeItem('fkStblTool_FileLanguageName');
        },
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

            if (this.autoHashFilenames && this.stblFile) {
                const instanceHex = fnv.hash(this.stblFile.name, 64).hex().toUpperCase().padStart(16, "0");
                this.fileTGI.i = this.selectedLanguage.stblCode + instanceHex.substring(2);
                return;
            }

            while (this.fileTGI.i === null) {
                const defaultValue = this.stblFile ? this.stblFile.name : '';
                const name = prompt("Enter a name to hash for the instance ID of your string table. It should be a unique name, prefixed with your creator name, such as 'YourName:stringTable_UniqueDescription'.", defaultValue);
                if (name) {
                    const instanceHex = fnv.hash(name, 64).hex().toUpperCase().padStart(16, "0");
                    this.fileTGI.i = this.selectedLanguage.stblCode + instanceHex.substring(2);
                }
            }
        },
        setLanguageAndTGIFromFilename() {
            try {
                this.fileTGI = getTGI(this.stblFile.name);
                this.selectedLanguage = getLocale(this.fileTGI.i);
            } catch (error) {
                if (!this.autoHashFilenames)
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
        onStringInputFocused(entryState) {
            if (this.selectedEntryPreviousState === null) {
                this.selectedEntryPreviousState = {
                    key: entryState.key,
                    string: entryState.string
                };
            }
            if (this.searchTerm === null) return;
            this.cachedFilteredStrings = this.filteredStrings;
        },
        onStringInputUnfocused() {
            this.tryCacheFileContents();

            // cacheing tooltip
            this.selectedEntryPreviousState = null;
            if (this.searchTerm === null) return;
            this.cachedFilteredStrings = null;
        },
        showStringEntryTooltip(thisEntry) {
            if (!this.showPreviousTextTooltip) return false;
            if (this.selectedEntryPreviousState === null) return false;
            return (thisEntry.key === this.selectedEntryPreviousState.key);
        },
        deleteString(index) {
            const indexToUse = index + ((this.currentPage - 1) * this.entryChunkSize);
            const stringKey = this.filteredStrings[indexToUse].key;
            if (confirm(`Are you sure you want to delete string ${formatKeyAsHex(stringKey)}? This action cannot be undone.`)) {
                if (this.fileContents.length === this.filteredStrings.length) {
                    this.fileContents.splice(indexToUse, 1);
                } else {
                    const indexToRemove = this.fileContents.findIndex(({key}) => key === stringKey);
                    this.fileContents.splice(indexToRemove, 1);
                }
            }
        },
        newString() {
            const string = prompt("Enter a string.");
            const key = parseInt(fnv.fast1a32hex(string), 16);
            this.fileContents.push({key, string});
        },
        searchButtonClicked() {
            const result = prompt("Only show strings containing...", this.searchTerm || '');
            if (result !== null) this.searchTerm = result ? result.toLowerCase() : null;
            this.cachedFilteredStrings = null;
        },
        clearSearch() {
            this.searchTerm = null;
            this.cachedFilteredStrings = null;
        },
        newHash(index) {
            const stringEntry = this.entriesToShow[index];
            if (stringEntry.string) {
                stringEntry.key = parseInt(fnv.fast1a32hex(stringEntry.string), 16);
                this.tryCacheFileContents();
            }
        },
        keyToClipboard(index) {
            return formatKeyAsHex(this.entriesToShow[index].key);
        },
        setManualKey(index) {
            const newKey = prompt("Enter the 32-bit hash to use.", this.getHexCode(index));
            if (newKey && newKey.match(/^0x([0-9A-F]{8})$/i)) {
                this.entriesToShow[index].key = parseInt(newKey, 16);
                this.tryCacheFileContents();
            } else if (newKey !== null) {
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

    #autosave-disabled-warning {
        position: fixed;
        top: 90px;
        right: 20px;
        z-index: 1024;
        border-radius: 4px;
        opacity: 0.85;
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

            &:hover:not(:disabled) {
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

        .page-item .page-link {
            @extend %floating-card;
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

    .listview-column {
        .listview-card {
            border-radius: 0;
            border-top: none;
            border-bottom: none;

            &.listview-card-dark {
                background-color: #f7f7f7;

                input {
                    background-color: #fbfbfb;
                }
            }
        }

        &:first-child .listview-card {
            border-top: 1px solid rgba(0, 0, 0, 0.125);
        }

        &:last-child .listview-card {
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        }
    }

    .hover-cursor:hover {
        cursor: pointer !important;
    }

    .blurple-text {
        color: $blurple;
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

#settings-modal .text-danger p {
    font-size: 0.8em;
}
</style>
