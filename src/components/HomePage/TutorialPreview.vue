<template>
    <a class="tutorial-link" :href="tutorial.link" target="_blank">
        <b-row align-h="center" align-v="center" class="tutorial-link-row text-left mb-3 py-3">
            <b-col cols="12">
                <h3 class="font-weight-bold">{{ tutorial.name }}</h3>
                <em>Available on {{ tutorial.platform }}</em>
                <p v-html="tutorial.description" class="mt-3"></p>
            </b-col>
        </b-row>
    </a>
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
        background-color: var(--card-bg-color);
        border-radius: 10px;
        box-shadow: 0 4px 8px var(--shadow-color);
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