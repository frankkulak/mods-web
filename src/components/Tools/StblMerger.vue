<template>
    <b-container id="stbl-merger-container" class="px-2 px-sm-3 px-md-5 py-5" fluid>
        <div class="mb-5">
            <h1 class="mb-3">String Table Merger</h1>
            <p>This experimental tool allows you to merge multiple string tables into one. Upload as many
                <code>.binary</code> and/or <code>.stbl</code> files as you want, follow the prompts, and then you will
                be able to download your merged string table in either S4S or S4PE format.</p>
        </div>

        <div class="my-5">
            <section-header text="upload your files" class="mb-4"></section-header>
            <p>Upload the string tables you would like to merge. Only <code>.binary</code> and <code>.stbl</code> files
                are supported.</p>
            <b-form-file
                class="text-left"
                v-model="stblFiles"
                placeholder="Choose or drop your .binary and .stbl files here..."
                drop-placeholder="Drop files here..."
                accept=".binary, .stbl"
                v-on:input="filesUploaded()"
                multiple
            ></b-form-file>
            <div v-if="allFilesDecoded" class="mt-4 px-3 files-uploaded-area">
                <b-row>
                    <b-col cols="6" v-for="(stbl, n) in decodedStbls" :key="n" class="p-2">
                        <b-card>
                            <b-row align-v="center" class="text-center">
                                <b-col cols="12" sm="3" class="mb-2 mb-sm-0">
                                    <h4>Language</h4>
                                    <p>{{ stbl.locale.emoji }} {{ stbl.locale.name }}</p>
                                </b-col>
                                <b-col cols="12" sm="6" class="mb-2 mb-sm-0">
                                    <h4>Instance ID</h4>
                                    <p>{{ stbl.tgi.i }}</p>
                                </b-col>
                                <b-col cols="12" sm="3">
                                    <h4>Strings</h4>
                                    <p>{{ stbl.numEntries }}</p>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
        </div>

        <div class="my-5" v-if="allFilesDecoded">
            <section-header text="merge your files" class="mb-4"></section-header>
            <p>Choose the locale, type, group, and instance of your output file. To hash a name for your new string
                table, <span class="clickable" @click="hashNewInstance">click here</span>.</p>
            <b-row>
                <b-col cols="6" md="3" class="my-3">
                    <b-form-select name="language" v-model="outputLanguage" @input="updateLocaleInInstance">
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
                        v-model="outputTGI.t"
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
                        v-model="outputTGI.g"
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
                        v-model="outputTGI.i"
                        placeholder="Instance"
                        :state="instanceIsValid"
                        autocomplete="off"
                    />
                    <b-form-invalid-feedback>
                        <p v-if="!instanceIs64Bit" class="mb-0">Instance must be a 64-bit hex code</p>
                        <p v-if="!instanceMatchesLocale">First two digits must match locale ({{
                                outputLanguage.stblCode
                            }})</p>
                    </b-form-invalid-feedback>
                </b-col>
            </b-row>
            <b-row align-v="center" class="text-center mt-5">
                <b-col>
                    <b-button
                        @click="download('s4s')"
                        :href="downloadUrl"
                        :download="downloadFilename"
                        title="Download string table"
                        class="gradient-button"
                        size="lg"
                        pill>
                        <b-icon-download class="mr-2"/>
                        Download for S4S
                    </b-button>
                </b-col>
                <b-col>
                    <b-button
                        @click="download('s4pe')"
                        :href="downloadUrl"
                        :download="downloadFilename"
                        title="Download string table"
                        class="gradient-button"
                        size="lg"
                        pill>
                        <b-icon-download class="mr-2"/>
                        Download for S4PE
                    </b-button>
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>

<script>
import SectionHeader from "@/components/Common/SectionHeader";
import {getStblContents} from "@/scripts/tools/stblDecoder";
import {serializeStbl} from "@/scripts/tools/stblEncoder";
import {getTGI, getLocale, Languages} from "@/scripts/tools/stblUtils";
import {BIconDownload} from 'bootstrap-vue';
import fnv from "fnv-plus";

export default {
    name: "StblMerger",
    components: {
        SectionHeader,
        BIconDownload
    },
    data() {
        return {
            stblFiles: null,
            decodedStbls: null,
            languages: Languages,
            outputLanguage: null,
            outputTGI: null,
            downloadUrl: '',
            downloadFilename: ''
        }
    },
    computed: {
        allFilesDecoded() {
            return (this.stblFiles !== null && this.decodedStbls !== null) && this.stblFiles.length === this.decodedStbls.length;
        },
        typeIsValid() {
            return this.outputTGI.t === "220557DA";
        },
        groupIsValid() {
            return /^([0-9A-F]{8})$/i.test(this.outputTGI.g);
        },
        instanceIsValid() {
            return this.instanceIs64Bit && this.instanceMatchesLocale;
        },
        instanceIs64Bit() {
            return /^([0-9A-F]{16})$/i.test(this.outputTGI.i);
        },
        instanceMatchesLocale() {
            return this.outputLanguage.stblCode === this.outputTGI.i.substr(0, 2);
        }
    },
    watch: {
        allFilesDecoded(newValue) {
            if (newValue) {
                const combinedStrings = [];
                this.decodedStbls.forEach(({stringEntries}) => {
                    stringEntries.forEach(e => { combinedStrings.push(e); });
                });
                const encodedStbl = serializeStbl(combinedStrings).toString('base64');
                this.downloadUrl = `data:text/plain;base64,${encodedStbl}`;
            }
        }
    },
    methods: {
        filesUploaded() {
            this.decodedStbls = [];
            this.outputTGI = null;
            this.outputLanguage = null;
            this.stblFiles.forEach(file => {
                getStblContents(file).then(result => {
                    if (result !== null && typeof result !== "string") {
                        result.tgi = getTGI(file.name);
                        result.locale = getLocale(result.tgi.i);
                        if (this.outputTGI === null) this.outputTGI = Object.assign({}, result.tgi);
                        if (this.outputLanguage === null) this.outputLanguage = result.locale;
                        this.decodedStbls.push(result);
                    }
                });
            });
        },
        updateLocaleInInstance() {
            this.outputTGI.i = this.outputLanguage.stblCode + this.outputTGI.i.substring(2);
        },
        download(namingConvention) {
            if (namingConvention === 's4s') {
                const tgiPrefix = `${this.outputTGI.t}!${this.outputTGI.g}!${this.outputTGI.i}`;
                this.downloadFilename = `${tgiPrefix}.${this.outputLanguage.name}.StringTable.binary`;
            } else {
                const tgiPrefix = `${this.outputTGI.t}_${this.outputTGI.g}_${this.outputTGI.i}`;
                this.downloadFilename = `S4_${tgiPrefix}.stbl`;
            }
            const tgiValid = this.typeIsValid && this.groupIsValid && this.instanceIsValid;
            if (!tgiValid)
                alert(`Your string table either does not have a valid type, group, or instance, or its instance does not match the locale you have selected. You may experience issues when importing your string table to ${namingConvention.toUpperCase()}.`);
        },
        hashNewInstance() {
            const newName = prompt('Enter a name to hash for the instance ID of your string table. It should be a unique name, prefixed with your creator name, such as \'YourName:stringTable_UniqueDescription\'.');
            if (newName) {
                const instanceHex = fnv.hash(newName, 64).hex().toUpperCase().padStart(16, "0");
                this.outputTGI.i = this.outputLanguage.stblCode + instanceHex.substring(2);
            }
        }
    }
}
</script>

<style lang="scss">
#stbl-merger-container {
    max-width: 100%;

    .files-uploaded-area {
        border: 1px solid rgba(0, 0, 0, 0.25);
        background-color: transparentize($blurple, 0.95);
        border-radius: 4px;
    }
}
</style>
