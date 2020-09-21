<template>
    <section class="mod-category">
        <b-container fluid>
            <div class="py-5 px-4">
                <h1>{{ header }}</h1>
                <p class="mx-0 mx-md-5">{{ description }}</p>
            </div>

            <mod-preview v-for="mod in mods" :key="mod.id" :mod="mod"/>
        </b-container>
    </section>
</template>

<script>
    import ModPreview from "./ModPreview";

    export default {
        name: "ModCategory",
        components: {ModPreview},
        props: {
            header: String,
            description: String,
            mods: Array
        }
    }
</script>

<style lang="scss">
    .mod-category {
        text-align: center;
    }
</style>