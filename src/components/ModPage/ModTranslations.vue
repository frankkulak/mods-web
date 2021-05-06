<template>
    <b-row id="mod-translations" class="mx-0 px-3 py-4">
        <b-col cols="12">
            <section-header text="translations"/>
            <b-button class="show-button" size="sm" :pressed.sync="showTranslations" variant="outline-primary"
                      v-if="mod.hasStrings">
                {{ showButtonText }}
            </b-button>
        </b-col>

        <b-row v-show="mod.hasStrings && showTranslations" class="mx-0 mt-4">
            <b-col cols="12" sm="6" md="4" lg="3" v-for="translation in translations" :key="translation.language.id"
                   class="translation-wrapper p-2">
                <div class="translation p-3 h-100">
                    <h4>{{ translation.language.display }}<span v-if="!translation.updated">*</span>
                        {{ translation.language.emoji }}</h4>
                    <p>by <span v-html="translation.translator"></span></p>
                </div>
            </b-col>

            <b-col cols="12">
                <p v-if="somethingIsOutdated" class="mt-3">* = This language's translation is incomplete, and some text
                    will
                    appear in English.</p>

                <p class="mt-3">All languages are included in the mod. No additional download is necessary.</p>

                <p class="mt-3">If you would like to provide a translation for this mod, please let me know on
                    <a href="https://discord.gg/qNhD3Jh" target="_blank">Discord</a>. Telling me about your translation
                    will
                    allow me include it in the download. You will be credited for your translation.</p>
            </b-col>
        </b-row>
        <b-row v-if="!mod.hasStrings" class="mx-0 mt-4">
            <b-col cols="12">
                <p>This mod does not contain any custom text, so all languages are supported. Yay!</p>
            </b-col>
        </b-row>
    </b-row>
</template>

<script>
    import SectionHeader from "../Common/SectionHeader";

    export default {
        name: "ModTranslations",
        components: {SectionHeader},
        props: {
            mod: Object
        },
        data: function () {
            return {
                showTranslations: false
            }
        },
        computed: {
            translations: function () {
                return Object.values(this.$props.mod.translations).sort((trans1, trans2) => {
                    const transName1 = trans1.language.display;
                    const transName2 = trans2.language.display;
                    if (transName1 < transName2) {
                        return -1;
                    } else if (transName1 > transName2) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            },
            somethingIsOutdated: function () {
                return this.$props.mod.translations.some(function (translation) {
                    return !translation.updated;
                });
            },
            showButtonText: function () {
                return this.showTranslations ? 'hide' : 'show';
            }
        }
    }
</script>

<style lang="scss">
    #mod-translations {
        background-color: var(--card-bg-color);
        border: 1px solid var(--shadow-color);
        border-radius: 10px;

        .show-button {
            float: right;
            min-width: 80px;

            &.btn-outline-primary {
                color: var(--accent-color);
                border-color: var(--accent-color);
                background-color: var(--card-bg-color);

                &:hover {
                    background-color: var(--accent-color);
                    color: white;
                }
            }
        }

        .translation {
            border-radius: 10px;
            border-style: solid;
            border-color: var(--text-color);
            border-width: 1px;
        }
    }
</style>