<template>
    <b-container id="home-page" class="py-5" fluid>
        <b-container fluid>
            <b-row>
                <mod-preview v-for="mod in majorMods" :key="mod.id" :mod="mod" :major="true" :show-thumbnail="true"/>
            </b-row>
        </b-container>


        <b-container fluid>
            <section-header text="small mods" class="mt-5 mb-3"/>
            <b-row>
                <mod-preview v-for="mod in minorMods" :key="mod.id" :mod="mod" :major="false" :show-thumbnail="true"/>
            </b-row>
        </b-container>

        <b-container fluid>
            <section-header text="utility mods" class="mt-5 mb-3"/>
            <b-row>
                <mod-preview v-for="mod in utilityMods" :key="mod.id" :mod="mod" :major="false" :show-thumbnail="false"/>
            </b-row>
        </b-container>

        <!--        <div id="test" class="p-2 m-5">-->
        <!--            <div class="test-content p-2">-->
        <!--                <h1>Construction zone</h1>-->
        <!--                <p>Here's what I'm currently working on.</p>-->
        <!--            </div>-->
        <!--        </div>-->
    </b-container>
</template>

<script>
    import {ModData, ModCategoryData} from '../../modules/Data.js'
    import ModPreview from "./ModPreview";
    import SectionHeader from "../Common/SectionHeader";

    function getMods(category) {
        return ModCategoryData.ts4[category].map(modName => ModData.ts4[modName]);
    }

    export default {
        name: "HomePage",
        components: {SectionHeader, ModPreview},
        data: function () {
            return {
                majorMods: getMods('major'),
                minorMods: getMods('minor'),
                utilityMods: getMods('utility')
            }
        }
    }
</script>

<style lang="scss">
    #home-page {
        #test {
            border-radius: 12px;

            .test-content {
                border-radius: 12px;
                background-color: white;
                color: black;
            }

            background: repeating-linear-gradient(
                            45deg,
                            #eecb00,
                            #eecb00 45px,
                            #121212 45px,
                            #121212 90px
            );
        }

        #home-content {
            li.nav-item {
                padding-right: 24px;

                &:last-child {
                    padding-right: 0;
                }

                a.nav-link, a.nav-link:hover, a.nav-link:focus {
                    text-decoration: none;
                    border-radius: 12px;
                    border-width: 1px;
                    border-style: solid;

                    &.active {
                        background-color: $dark-blue;
                        color: white;
                        border-color: white;
                    }
                }

                a.nav-link, a.nav-link:focus {
                    color: var(--link-color);
                    border-color: var(--link-color);
                }

                a.nav-link:hover {
                    color: $dark-blue;
                    border-color: $dark-blue;
                }
            }
        }
    }
</style>