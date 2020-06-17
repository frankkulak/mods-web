const App = (function () {
    const routes = [
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
        return Util.modExists(game, mod);
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

    return new Vue({
        data: {
            mods: Data
        },
        router: router,
        watch: {
            '$route'(to, from) {
                if (to.meta.modView && isValidModPage(to)) {
                    const {game, mod} = to.params;
                    const {name} = Data[game][mod];
                    document.title = `${name} | ${game.toUpperCase()} Mod`;
                } else {
                    document.title = to.meta.title || 'Mods by Frank Kulak'
                }
            }
        },
    }).$mount('#app');
})();