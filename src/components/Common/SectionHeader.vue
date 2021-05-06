<template>
    <div class="section-header text-left">
        <h2 v-html="text" class="mb-1"></h2>
        <hr class="m-0">
    </div>
</template>

<script>
    export default {
        name: "SectionHeader",
        props: {
            text: String
        }
    }
</script>

<style lang="scss">
    .section-header {
        display: inline-block;

        h2 {
            color: var(--text-color);
        }

        hr {
            background-color: var(--accent-color);
            height: 2px;
            border: 0;
            border-radius: 2px;
            width: 85%;
        }
    }
</style>