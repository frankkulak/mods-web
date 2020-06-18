const PageNotFound = (function () {
    return Vue.component('home-page', {
        template: `
            <div id="page-not-found" class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        <h1>this page does not exist</h1>
                        <p>The URL you entered may have changed or been deleted. Try checking the <router-link to="/">home page</router-link>.</p>
                    </div>
                </div>
            </div>`
    });
})();