(function () {
    Vue.component('status-bar', {
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
            statusText: function () {
                const status = this.$props.status;
                if (status === Constants.status.untested) {
                    return 'untested with latest patch';
                } else if (status === Constants.status.conflict) {
                    return 'conflicts with latest patch';
                } else {
                    return 'compatible with latest patch';
                }
            }
        },
        template: `
            <div class="status-bar" :class="statusClass">
                <p>{{ statusText }}</p>
            </div>`
    });

    Vue.component('pack-compatibility', {
        props: ['packs'],
        data: function () {
            return {
                packCount: this.$props.packs.length
            }
        },
        computed: {
            style: function () {
                return (this.packCount === 0) ? 'base-game' : 'packs-required';
            },
            text: function () {
                const packsCopy = this.$props.packs.map(pack => `<span class="pack">${pack}</span>`);

                if (this.packCount === 0) {
                    return `<span class="pack">Base Game</span> compatible`;
                } else if (this.packCount === 1) {
                    return `${packsCopy[0]} required`;
                } else {
                    const last = packsCopy.pop();
                    const conj = (this.packCount === 2) ? ' and' : ', and';
                    return `${packsCopy.join(", ")}${conj} ${last} required`;
                }
            }
        },
        template: `<p class="pack-compatibility" :class="style" v-html="text"></p>`
    });

    Vue.component('mod-fullview', {
        props: ['mod'],
        computed: {
            versionText: function () {
                const {version, beta, date} = this.$props.mod;
                return `version ${version} ${beta ? '' : 'beta '} <span class="date">(${date})</span>`;
            }
        },
        methods: {
            getImagePath: function (filename) {
                return `./images/${filename}`;
            }
        },
        template: `
            <div class="mod-fullview container-fluid">
                <a href="../../index.html">&larr; mods home page</a>
                <h1>{{ mod.name }}</h1>
                <p v-html="versionText"></p>
                <status-bar :status="mod.status"></status-bar>
                <p v-html="mod.description"></p>
                <div class="image-display">
                    <img v-for="image in mod.images" :key="image" :src="getImagePath(image)" :alt="image"/>
                </div>
                <a :href="mod.video" target="_blank" class="btn btn-outline-primary youtube">view demo</a>
                <h2>features</h2>
                <ul>
                    <li v-for="(feature, index) in mod.features" :key="index">{{ feature }}</li>
                </ul>
                <h2>known issues</h2>
                <ul>
                    <li v-for="(issue, index) in mod.issues" :key="index">
                        {{ issue.description }} <span class="fix">{{ issue.fix }}</span>
                    </li>
                </ul>
                <pack-compatibility :packs="mod.requiredPacks"></pack-compatibility>
                <h6><span class="unbold">By downloading this mod, you are agreeing to my</span> terms of use</h6>
                <ul class="terms">
                    <li><span class="important">DO NOT</span> share or distribute this mod without proper
                        attribution. All you have to do is include my name (Frank Kulak) and a link to this
                        website.
                    </li>
                    <li>This mod is provided as-is with no warranty, and I am not responsible for misuse of it
                        in any way (e.g. using it when it is out-of-date, changing the code, or using other mods
                        that conflict with it).
                    </li>
                    <li>I am free to stop supporting this mod at any time for any reason.</li>
                </ul>
                <p v-if="mod.beta">
                    This mod is currently in its beta stage, so be advised that there may be a couple bugs.</p>
                <a :href="mod.download" target="_blank" class="btn btn-outline-primary">download</a>
            </div>`
    });
})();