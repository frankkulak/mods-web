<template>
    <div id="app">
        <router-view></router-view>

        <section id="patreon-footer" class="dark-vars py-2 text-center">
            <b-container fluid>
                <p>If you enjoy my work, please consider supporting me on
                    <a href="https://www.patreon.com/frankkulakmods" target="_blank">Patreon</a> or making a one-time
                    donation on <a href="https://ko-fi.com/frankkulak" target="_blank">Ko-fi</a>.
                </p>
            </b-container>
        </section>

        <div class="py-2"></div>
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
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>