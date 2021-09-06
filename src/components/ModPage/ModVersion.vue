<template>
    <p>{{ mod.versionHistory[0].version }}</p>
</template>

<script>
    import {ModData} from "../../scripts/modules/Data";

    export default {
        name: "ModVersion",
        data: function () {
            return {
                mod: ModData[this.$route.params.game][this.$route.params.mod]
            }
        },
    }
</script>

<style lang="scss">
    // intentionally blank
</style>
