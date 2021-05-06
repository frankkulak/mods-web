<template>
    <div id="app">
        <b-navbar toggleable="md" sticky class="py-3 px-4">
            <b-navbar-brand to="/">Frankk's Mods</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">browse</b-nav-item>
                    <b-nav-item to="patreon">patreon</b-nav-item>
                    <b-nav-item to="tutorials">tutorials</b-nav-item>
                    <b-nav-item to="about">info &amp; contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <router-view></router-view>

        <section id="footer" class="text-center py-5 px-2">
            <p class="socials">
                <a href="https://twitter.com/frankkulakmods" target="_blank" class="twitter">Twitter</a> |
                <a href="https://discord.gg/qNhD3Jh" target="_blank" class="discord">Discord</a> |
                <a href="https://www.patreon.com/frankkulakmods" target="_blank" class="patreon">Patreon</a> |
                <a href="https://ko-fi.com/frankkulak" target="_blank" class="ko-fi">Ko-fi</a>
            </p>
            <p>All content on this website is my own and is not affiliated with EA, Maxis, or The Sims franchise.</p>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'App'
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

    #footer {
        background-color: var(--footer-color);

        a {
            &.twitter {
                color: $twitter;
            }

            &.discord {
                color: $discord;
            }

            &.ko-fi {
                color: $ko-fi;
            }

            &.patreon {
                color: $patreon;
            }
        }

        p {
            color: white;
        }
    }
</style>