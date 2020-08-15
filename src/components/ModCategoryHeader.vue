<template>
    <b-row align-h="center" class="mod-category-header">
        <b-col cols="12" md="8" lg="6" class="text-center">
            <h1>{{ header }}</h1>
            <p>{{ description }}</p>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "ModCategoryHeader",
        props: {
            description: String,
            header: String
        }
    }
</script>

<style lang="scss">
    .mod-category-header {
        padding: {
            top: $padding-lg;
            bottom: $padding-lg;
        };
    }
</style>