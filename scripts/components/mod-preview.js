(function () {
    Vue.component('status-flag', {
        props: ['status'],
        computed: {
            statusClass: function () {
                const status = this.$props.status;
                if (status === Constants.status.untested) {
                    return 'status-warning';
                } else if (status === Constants.status.conflict) {
                    return 'status-danger';
                } else {
                    return 'status-success';
                }
            },
            titleText: function () {
                const status = this.$props.status;
                if (status === Constants.status.untested) {
                    return 'This mod has not yet been tested with the latest patch';
                } else if (status === Constants.status.conflict) {
                    return 'This mod needs to be fixed for the latest patch';
                } else {
                    return 'This mod is working with the latest patch';
                }
            }
        },
        template: `
            <div class="status-flag" :class="statusClass" :title="titleText">
                <p v-if="statusClass === 'sf-warning'">&#9888;</p>
                <p v-else-if="statusClass === 'sf-danger'">&#10761;</p>
                <p v-else>&check;</p>
            </div>`
    });

    Vue.component('mod-preview', {
        props: ['mod'],
        data: function () {
            return {
                thumbnail: `./images/thumbnails/${this.$props.mod.id}.png`,
                thumbnailAlt: `${this.$props.mod.name} Thumbnail`,
                link: `./ts4/${this.$props.mod.id}`
            };
        },
        template: `
            <div class="mod-preview">
                <table>
                    <tr>
                        <td><h6>{{ mod.name }}</h6></td>
                        <td class="right">
                            <status-flag :status="mod.status"></status-flag>
                        </td>
                    </tr>
                </table>
                <img :src="thumbnail" :alt="thumbnailAlt" class="thumbnail"/>
                <p v-html="mod.description"></p>
                <div class="btn-container">
                    <a :href="link" class="btn btn-outline-primary">details</a>
                </div>
            </div>`
    });
})();