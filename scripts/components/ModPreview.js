const ModPreview = (function () {
    return Vue.component('mod-preview', {
        props: ['mod'],
        computed: {
            thumbnail: function () {
                const {game, id, images} = this.$props.mod;
                return `images/${game}/${id}/${images[0]}`;
            },
            thumbnailAlt: function () {
                return `${this.$props.mod.name} Thumbnail`;
            },
            route: function () {
                const {game, id} = this.$props.mod;
                return `/${game}/${id}`;
            }
        },
        template: `
            <div class="mod-preview h-100">
                <router-link :to="route">
                    <img :src="thumbnail"
                         :alt="thumbnailAlt"
                         onerror="if (this.src !== 'images/default.png') this.src = 'images/default.png';"
                         class="thumbnail"/>
                    <div class="content">
                        <h6>{{ mod.name }}</h6>
                        <p v-html="mod.description"></p>
                    </div>
                </router-link>
            </div>`
    });
})();