(function () {
    Vue.component('mod-preview', {
        props: ['mod'],
        data: function () {
            return {
                thumbnail: `./ts4/${this.$props.mod.id}/images/${this.$props.mod.images[0]}`,
                thumbnailAlt: `${this.$props.mod.name} Thumbnail`,
                link: `./ts4/${this.$props.mod.id}`
            };
        },
        template: `
            <div class="mod-preview">
                <a :href="link">
                    <img :src="thumbnail" :alt="thumbnailAlt" class="thumbnail"/>
                    <div class="content">
                        <h6>{{ mod.name }}</h6>
                        <p v-html="mod.description"></p>
                    </div>
                </a>
            </div>`
    });
})();