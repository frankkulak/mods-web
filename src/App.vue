<template>
    <div id="app">
        <b-navbar toggleable="md" sticky class="py-3 px-4">
            <b-navbar-brand to="/">Frankk's Mods</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">browse</b-nav-item>
                    <b-nav-item to="/patreon">patreon</b-nav-item>
                    <b-nav-item to="/tutorials">tutorials</b-nav-item>
                    <b-nav-item to="/about">info &amp; contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <router-view></router-view>

        <my-footer v-if="!$route.path.includes('ts4-tools')"/>
    </div>
</template>

<script>
    import MyFooter from "@/components/Common/MyFooter";
    export default {
        name: 'App',
        components: {MyFooter}
    }
</script>

<style lang="scss">
    nav {
        box-shadow: 0 4px 8px var(--shadow-color);
        background-color: var(--bg-color);

        a, a:hover, a:focus {
            text-decoration: none;
        }

        a.navbar-brand {
            font-weight: bold;
        }

        ul.navbar-nav {
            a.router-link-exact-active {
                color: var(--accent-color) !important;
                font-weight: bold;
            }
        }
    }
</style>
