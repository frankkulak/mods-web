<template>
    <b-col cols="12" sm="6" md="4" class="tutorial-col p-4">
        <a class="tutorial-link" :href="tutorial.link" target="_blank">
            <b-row align-h="center" class="tutorial-link-row text-left mb-3 py-3 h-100">
                <b-col cols="12">
                    <h3 class="font-weight-bold">{{ tutorial.name }}</h3>
                    <em>Available on {{ tutorial.platform }}</em>
                    <p v-html="tutorial.description" class="mt-3"></p>
                </b-col>
            </b-row>
        </a>
    </b-col>
</template>

<script>
    export default {
        name: "TutorialPreview",
        props: {
            tutorial: Object
        }
    }
</script>

<style lang="scss">
    a.tutorial-link, a.tutorial-link:focus, a.tutorial-link:hover {
        color: var(--text-color);
        text-decoration: none;
    }

    .tutorial-link-row {
        @extend %floating-card;

        background-color: var(--card-bg-color);
        position: relative;
        transition: all ease 300ms;
        top: 0;

        &:hover {
            top: -5px;
            box-shadow: 0 5px 15px var(--shadow-color);
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
</style>