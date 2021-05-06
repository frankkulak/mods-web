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
                <mod-preview v-for="mod in utilityMods" :key="mod.id" :mod="mod" :major="false"
                             :show-thumbnail="false"/>
            </b-row>
        </b-container>

        <section id="wips" class="p-2 my-5 mx-2">
            <div class="wips-content px-4 pt-4">
                <section-header text="construction zone" class="mb-4"/>
                <p>These mods are currently being developed, and are not yet ready for download. Check back later!</p>
                <b-row>
                    <mod-preview v-for="mod in wipMods" :key="mod.id" :mod="mod" :major="true" :show-thumbnail="false"/>
                </b-row>
            </div>
        </section>
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
                utilityMods: getMods('utility'),
                wipMods: getMods('wips')
            }
        }
    }
</script>

<style lang="scss">
    #home-page {
        section#wips {
            border-radius: 10px;
            background: repeating-linear-gradient(45deg, #eecb00, #eecb00 30px, #121212 30px, #121212 60px);

            .wips-content {
                border-radius: 10px;
                background-color: var(--bg-color);
            }
        }
    }
</style>