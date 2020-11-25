<template>
    <section id="mod-translations" class="pb-5">
        <b-container fluid>
            <h1 class="w-100 text-center mb-5">supported languages</h1>

            <b-row>
                <b-col v-for="translation in translations" :key="translation.language" class="p-2"
                       cols="12" sm="6" md="4">
                    <div class="translation-container p-3">
                        <h2>{{ translation.languageNativeName }}<span v-if="!translation.updated">*</span></h2>
                        <p class="mt-2">by <span v-html="translation.translator"></span></p>
                    </div>
                </b-col>
            </b-row>

            <p class="mt-3" v-if="somethingIsOutdated">
                * = This language's translation is incomplete, and some text will appear in English.
            </p>

            <p class="mt-3">If you would like to provide a translation for this mod, please let me know on
                <a href="https://discord.gg/qNhD3Jh" target="_blank">Discord</a>. I welcome and encourage
                translations, but I do not appreciate re-posting of my work without permission.
                Additionally, telling me about your translation will allow me include it in the official
                download on this webpage. You will be credited for your translation.</p>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "ModTranslations",
        props: {
            mod: Object
        },
        computed: {
            translations: function () {
                return Object.values(this.$props.mod.translations).sort((trans1, trans2) => {
                    const transName1 = trans1.language.toUpperCase();
                    const transName2 = trans2.language.toUpperCase();
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
            }
        }
    }
</script>

<style lang="scss">
    #mod-translations {
        .translation-container {
            border: 1px solid var(--shadow-color);
            border-radius: 5px;
        }

        span.important {
            text-decoration: underline;
            font-weight: bold;
        }
    }
</style>