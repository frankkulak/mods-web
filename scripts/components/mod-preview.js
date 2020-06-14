(function () {
    Vue.component('mod-preview', {
        props: ['mod'],
        data: function () {
            return {
                previewImageSource: `./images/${this.$props.mod.id}/preview.png`
            };
        },
        template: `
            <div class="mod-preview container-fluid">
                <div class="header">
                    <h2>{{mod.name}}</h2>
                    <p>version {{mod.version}} (updated: {{mod.date}})</p>
                </div>
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col-sm-10 col-md-3 text-center">
                        <img v-bind:src="previewImageSource" alt="#JusticeForCowplants Preview Image"/>
                    </div>
                    <div class="col-12 col-sm-10 col-md-5">
                        <p v-html="mod.description"></p>
                        <pack-compatability v-bind:mod="mod"></pack-compatability>
                    </div>
                    <div class="col-12 text-center">
                        <a href="#" class="btn btn-outline-primary">details &amp; download page</a>
                    </div>
                </div>
            </div>`
    });
})();