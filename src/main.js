import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import { ModData } from './modules/Data.js'
import HomePage from "./components/HomePage/HomePage";
import ModPage from "./components/ModPage/ModPage";
import PageNotFound from "./components/PageNotFound";

Vue.use(BootstrapVue);

// ----------------------------------------------------------------------
// Routing

const routes = [
    {
        // fixme abstract this in case future mods also need to be renamed
        path: '/ts4/justiceforcowplants',
        redirect: '/ts4/nameablecowplants'
    },
    {
        path: '/:game/:mod',
        component: ModPage,
        meta: {
            modView: true
        }
    },
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/page-not-found',
        component: PageNotFound,
        meta: {
            title: 'Page Not Found'
        }
    },
    {
        path: '*',
        redirect: '/page-not-found'
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

function isValidModPage(to) {
    const {game, mod} = to.params;
    // eslint-disable-next-line no-prototype-builtins
    return ModData.hasOwnProperty(game) && ModData[game].hasOwnProperty(mod);
}

router.beforeEach((to, from, next) => {
    if (to.meta.modView && !isValidModPage(to)) {
        next({
            path: '/page-not-found'
        });
    } else {
        next();
    }
});

// ----------------------------------------------------------------------
// App

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    data: {
        mods: ModData
    },
    router: router,
    watch: {
        // eslint-disable-next-line no-unused-vars
        '$route'(to, from) {
            window.scrollTo(0, 0);
            if (to.meta.modView && isValidModPage(to)) {
                const {game, mod} = to.params;
                const {name} = ModData[game][mod];
                document.title = `${name} | ${game.toUpperCase()} Mod`;
            } else {
                document.title = to.meta.title || `Frank's TS4 Mods`
            }
        }
    },
    render: h => h(App)
}).$mount('#app');