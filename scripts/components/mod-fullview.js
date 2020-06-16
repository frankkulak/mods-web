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
                    return 'not yet tested with latest patch';
                } else if (status === Constants.status.conflict) {
                    return 'issues found with latest patch';
                } else {
                    return 'tested with latest patch';
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
                return `version ${version} ${beta ? 'beta ' : ''} <span class="date">(${date})</span>`;
            }
        },
        methods: {
            getImagePath: function (filename) {
                return `./images/${filename}`;
            }
        },
        template: `
            <div class="mod-fullview container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-10 col-lg-8">
                        <a href="../..">&larr; mods home page</a>
                        <div class="header">
                            <h1>{{ mod.name }}</h1>
                            <p v-html="versionText"></p>
                            <status-bar :status="mod.status"></status-bar>
                            <pack-compatibility :packs="mod.requiredPacks"></pack-compatibility>
                        </div>
                        <div class="image-display row justify-content-center">
                            <div class="img-col col-10 col-md-6" v-for="image in mod.images" :key="image">
                                <img :src="getImagePath(image)" :alt="image"/>
                            </div>
                        </div>
                        <p class="description" v-html="mod.description"></p>
                        <div class="btn-container">
                            <a :href="mod.video" target="_blank" class="btn btn-outline-primary">
                                view demo (YouTube)
                            </a>
                        </div>
                        <div class="details">
                            <div class="features">
                                <h2>Features</h2>
                                <ul>
                                    <li v-for="(feature, index) in mod.features" :key="index">{{ feature }}</li>
                                </ul>
                            </div>
                            <div class="issues">
                                <h2>Known issues</h2>
                                <ul>
                                    <li v-for="(issue, index) in mod.issues" :key="index">
                                        {{ issue.description }} <span class="fix">{{ issue.fix }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="terms">
                            <h6><span class="unbold">By downloading this mod, you are agreeing to my</span> terms of use
                            </h6>
                            <ul>
                                <li><span class="important">DO NOT</span> share or distribute this mod without including
                                    my name (Frank Kulak) and a link to this website.
                                </li>
                                <li>I am not responsible for the misuse of this mod in any way.
                                </li>
                                <li v-if="mod.beta">This mod is in its beta stage, so you acknowledge that there may be
                                    some bugs.
                                </li>
                                <li>I am free to stop supporting this mod at any time for any reason.</li>
                            </ul>
                        </div>
                        <div class="btn-container">
                            <a :href="mod.download" target="_blank" class="btn btn-outline-primary">
                                download (Google Drive)
                            </a>
                        </div>
                    </div>
                </div>
            </div>`
    });
})();