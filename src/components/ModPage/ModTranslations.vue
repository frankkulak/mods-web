<template>
    <section id="mod-translations" class="pb-5">
        <b-container fluid>
            <h1 class="w-100 text-center mb-5">supported languages</h1>

            <div v-if="mod.hasStrings">
                <ul class="translations mb-5">
                    <li v-for="translation in translations" :key="translation.language">
                        <span class="language">{{ translation.languageNativeName }}<span v-if="!translation.updated">*</span></span>
                        by <span v-html="translation.translator"></span>
                    </li>
                </ul>

                <p class="mt-3" v-if="somethingIsOutdated">
                    * = This language's translation is incomplete, and some text will appear in English.
                </p>

                <p class="mt-3">If you would like to provide a translation for this mod, please let me know on
                    <a href="https://discord.gg/qNhD3Jh" target="_blank">Discord</a>. Telling me about your translation
                    will allow me include it in the download. You will be credited for your translation.</p>
            </div>
            <div v-else>
                <p class="text-center">This mod re-uses text that appears in the base game, so
                    <strong>all languages</strong> are supported. Yay!</p>
            </div>
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
        ul.translations {
            padding: 0;
            list-style: none;
            text-align: center;
            line-height: 2em;

            span.language {
                color: var(--h-color);
                font-size: 1.1em;
            }

            li {
                display: inline;

                &:after {
                    content: " — ";
                }

                &:last-child:after {
                    content: "";
                }
            }

            a, a:focus, a:hover {
                color: var(--text-color);
            }
        }
    }
</style>