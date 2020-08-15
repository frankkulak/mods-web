<template>
    <b-row align-h="center" class="mod-category-content">
        <b-col cols="12" sm="8" md="5" lg="4" v-for="(mod, index) in mods" :key="index">
            <mod-preview :mod="mod"></mod-preview>
        </b-col>
        <b-col cols="10" md="8" lg="6" class="no-mods" v-if="mods.length === 0">
            <p>There are currently no mods in this category.</p>
        </b-col>
    </b-row>
</template>

<script>
    import ModPreview from "./ModPreview";

    export default {
        name: "ModCategory",
        components: {ModPreview},
        props: {
            mods: Array
        }
    }
</script>

<style lang="scss">
    .mod-category-content {
        padding-bottom: $padding-lg * 2;

        [class^="col"] {
            margin: {
                top: $padding-sm;
                bottom: $padding-sm;
            }
        }

        .no-mods {
            text-align: center;
            background-color: var(--bg-band-overlay);
            border-radius: $padding-sm;
            box-shadow: 0 $padding-xs 10px var(--shadow-color);
            padding: {
                top: $padding-md;
                bottom: $padding-md;
            };
        }
    }
</style>