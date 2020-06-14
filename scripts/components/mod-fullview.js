(function () {
    Vue.component('mod-fullview', {
        props: ['mod'],
        data: function () {
            return {
                imageDirectory: `./images/${this.$props.mod.id}`
            };
        },
        template: `
            <div class="mod-fullview container-fluid">
                <mod-header :mod="mod"></mod-header>
                content
            </div>`
    });
})();