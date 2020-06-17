(function () {
    Vue.component('status-bar', {
        props: ['status'],
        template: `
            <div class="status-bar" :class="Constants.statusClasses[status]">
                <p v-if="status === Constants.status.untested">&#9888; not tested with latest patch</p>
                <p v-else-if="status === Constants.status.conflict">&#10761; issues found with latest patch</p>
                <p v-else>&check; tested with latest patch</p>
            </div>`
    });

    Vue.component('mod-fullview', {
        props: ['mod'],
        computed: {
            versionText: function () {
                const {version, beta, date} = this.$props.mod;
                return `version ${version} ${beta ? 'beta ' : ''} <span class="date">(${date})</span>`;
            },
            packText: function () {
                const packsCopy = this.$props.mod.requiredPacks.map(pack => `<span class="pack">${pack}</span>`);
                const packCount = packsCopy.length;

                let text;
                if (packCount === 0) {
                    text = `<span class="pack">Base Game</span> compatible`;
                } else if (packCount === 1) {
                    text = `${packsCopy[0]} required`;
                } else {
                    const last = packsCopy.pop();
                    const oxfordComma = (packCount === 2) ? '' : ',';
                    text = `${packsCopy.join(", ")}${oxfordComma} and ${last} required`;
                }

                const style = (packCount === 0) ? 'base-game' : 'packs-required';
                return `<span class="${style}">${text}</span>`
            },
            descriptionText: function () {
                return `${this.$props.mod.description} ${this.packText}.`;
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
                        </div>
                        <div class="image-display row justify-content-center">
                            <div class="img-col col-10 col-md-6" v-for="image in mod.images" :key="image">
                                <img :src="getImagePath(image)" :alt="image"/>
                            </div>
                        </div>
                        <p class="description" v-html="descriptionText"></p>
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
                        <hr>
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