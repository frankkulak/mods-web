<template>
    <div id="app">
        <b-navbar toggleable="md" sticky class="py-3 px-4">
            <b-navbar-brand to="/">Frankk's Mods</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">browse</b-nav-item>
                    <b-nav-item to="/patreon">patreon</b-nav-item>
                    <b-nav-item to="/ts4-tools">tools</b-nav-item>
                    <b-nav-item to="/tutorials">tutorials</b-nav-item>
                    <b-nav-item to="/about">info &amp; contact</b-nav-item>
                </b-navbar-nav>
                <div id="theme-switcher" class="ml-md-2" @click="changeTheme">
                    <b-icon-moon v-if="isDarkTheme"/>
                    <b-icon-sun v-else/>
                </div>
            </b-collapse>
        </b-navbar>

        <router-view></router-view>

        <my-footer v-if="!$route.path.includes('ts4-tools')"/>
    </div>
</template>

<script>
    import MyFooter from "@/components/Common/MyFooter";
    import { BIconMoon, BIconSun } from "bootstrap-vue";
    export default {
        name: 'App',
        components: {MyFooter, BIconSun, BIconMoon},
        data() {
            return {
                isDarkTheme: undefined
            }
        },
        created() {
            this.isDarkTheme = localStorage.getItem('fkmods_IsDarkTheme') === "true";
            document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
        },
        methods: {
            changeTheme() {
                this.isDarkTheme = !this.isDarkTheme;
                document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
                localStorage.setItem('fkmods_IsDarkTheme', this.isDarkTheme);
            }
        }
    }
</script>

<style lang="scss">
    nav {
        box-shadow: 0 4px 8px var(--shadow-color);
        background-color: var(--nav-bg);

        a, a:hover, a:focus {
            text-decoration: none;
        }

        a.navbar-brand {
            font-weight: bold;
            color: var(--text-color) !important;
        }

        ul.navbar-nav {
            a:not(.router-link-exact-active) {
                color: var(--text-color) !important;
                opacity: 60%;

                &:hover {
                    opacity: 100%;
                }
            }

            a.router-link-exact-active {
                color: var(--accent-color) !important;
                font-weight: bold;
            }
        }

        #theme-switcher {
            font-size: 1.5em;
            opacity: 60%;

            &:hover {
                cursor: pointer;
                opacity: 100%;
            }
        }
    }
</style>
