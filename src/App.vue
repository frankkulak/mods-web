<template>
    <div id="app">
        <router-view></router-view>

        <div id="footer-bg"></div>

        <section id="footer" class="dark-vars text-center">
            <b-container fluid>
                <p>If you enjoy my work, please consider supporting me on
                    <a href="https://www.patreon.com/frankkulakmods" target="_blank">Patreon</a> or
                    <a href="https://ko-fi.com/frankkulak" target="_blank">Ko-fi</a>.
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
    #footer-bg {
        height: 50px;
    }

    #footer {
        height: 52px;
        background-color: $darker-blue;
        width: 100%;
        position: fixed;
        bottom: 0;
        display: table;

        div {
            display: table-cell;
            vertical-align: middle;
        }
    }
</style>