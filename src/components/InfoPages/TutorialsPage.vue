<template>
    <b-container id="tutorials-page" class="py-5" fluid>
        <b-container fluid>
            <section-header text="Language Barriers" class="mb-4"/>
            <b-row>
                <tutorial-preview v-for="tutorial in lbTutorials" :key="tutorial.id" :tutorial="tutorial"/>
            </b-row>
        </b-container>

        <b-container class="mt-5" fluid>
            <section-header text="scripting" class="mb-4"/>
            <b-row>
                <tutorial-preview v-for="tutorial in scriptTutorials" :key="tutorial.id" :tutorial="tutorial"/>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
    import SectionHeader from "../Common/SectionHeader";
    import TutorialPreview from "./TutorialPreview";
    import {TutorialCategoryData, TutorialData} from "../../modules/Tutorials";

    function getTutorials(category) {
        return TutorialCategoryData.ts4[category].map(tutorial => TutorialData.ts4[tutorial]);
    }

    export default {
        name: "TutorialsPage",
        components: {TutorialPreview, SectionHeader},
        data: function () {
            return {
                lbTutorials: getTutorials('languagebarriers'),
                scriptTutorials: getTutorials('scripting')
            }
        }
    }
</script>

<style lang="scss">
    #tutorials-page {

    }
</style>