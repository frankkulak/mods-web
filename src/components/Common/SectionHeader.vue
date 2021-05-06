<template>
    <div class="section-header text-left">
        <h2 class="mb-1">{{ text }}<b-badge v-if="badge !== undefined" class="ml-2">{{ badge }}</b-badge></h2>
        <hr class="m-0">
    </div>
</template>

<script>
    export default {
        name: "SectionHeader",
        props: {
            text: String,
            badge: String
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