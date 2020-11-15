<template>
    <div id="app">
        <router-view></router-view>

        <section id="patreon-footer" class="dark-vars py-4 text-center">
            <b-container fluid>
                <p>If you enjoy my work, please consider
                    <a href="https://www.patreon.com/frankkulakmods" target="_blank">supporting me on Patreon</a>.
                </p>
            </b-container>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    #patreon-footer {
        background-color: $darker-blue;
    }
</style>