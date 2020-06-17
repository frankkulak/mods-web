const App = (function () {
    const routes = [
        {path: '/:game/:mod', component: ModPage, meta: {requiresValidMod: true}},
        {path: '/', component: HomePage},
        {path: '/page-not-found', component: PageNotFound},
        {path: '*', redirect: '/page-not-found'}

    ];

    const router = new VueRouter({
        routes // short for `routes: routes`
    });

    router.beforeEach((to, from, next) => {
        if (to.meta.requiresValidMod) {
            const {game, mod} = to.params;
            console.log();
            if (!Util.modExists(game, mod)) {
                next({
                    path: '/page-not-found'
                });
            } else {
                next();
            }
        } else {
            next();
        }
    });

    return new Vue({
        data: {
            mods: Data
        },
        router: router
    }).$mount('#app');
})();