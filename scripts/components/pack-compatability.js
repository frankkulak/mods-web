(function () {
    Vue.component('pack-compatability', {
        props: ['mod'],
        template: `
            <div class="pack-compatability">
                <p v-if="mod.baseGameCompatible" class="base"><span>Base Game</span> compatible</p>
                <!-- TODO : recommended and required displays -->
            </div>`
    })
})();