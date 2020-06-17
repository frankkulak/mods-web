const App = (function () {
    const routes = [
        {path: '/:game/:mod', component: ModPage},
        {path: '/', component: HomePage},
        {path: '*', component: PageNotFound}
    ];

    const router = new VueRouter({
        routes // short for `routes: routes`
    });

    return new Vue({
        data: {
            mods: Data
        },
        router: router
    }).$mount('#app');
})();