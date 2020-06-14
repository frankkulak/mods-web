(function () {
    Vue.component('mod-header', {
        props: ['mod'],
        template: `
            <div class="mod-header">
                <h2>{{mod.name}}</h2>
                <p>version {{mod.version}} <span class="updated">(updated: {{mod.date}})</span></p>
            </div>`
    });
})();