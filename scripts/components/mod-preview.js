(function () {
    Vue.component('mod-preview', {
        props: ['mod'],
        data: function () {
            return {
                previewImageSource: `./images/thumbnails/${this.$props.mod.id}.png`,
                fullviewLink: `./ts4/${this.$props.mod.id}/index.html` // fixme replace with live link
            };
        },
        template: `
            <div class="mod-preview container-fluid">
                <mod-header :mod="mod"></mod-header>
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col-sm-10 col-md-3 text-center">
                        <img v-bind:src="previewImageSource" alt="#JusticeForCowplants Preview Image"/>
                    </div>
                    <div class="col-12 col-sm-10 col-md-5">
                        <p v-html="mod.description"></p>
                        <pack-compatability v-bind:mod="mod"></pack-compatability>
                    </div>
                    <div class="col-12 text-center">
                        <a :href="fullviewLink" target="_blank" class="btn btn-outline-primary">
                            Details &amp; Download Page</a>
                    </div>
                </div>
            </div>`
    });
})();