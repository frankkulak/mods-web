const ModPage = (function () {
    Vue.component('status-bar', {
        props: ['status'],
        methods: {
            classToUse: function (status) {
                return Constants.statusClasses[status];
            },
            isUntested: function (status) {
                return status === Constants.status.untested;
            },
            isConflict: function (status) {
                return status === Constants.status.conflict;
            }
        },
        template: `
            <div class="status-bar" :class="classToUse(status)">
                <p v-if="isUntested(status)">&#9888; not tested with latest patch</p>
                <p v-else-if="isConflict(status)">&#10761; issues found with latest patch</p>
                <p v-else>&check; tested with latest patch</p>
            </div>`
    });

    return Vue.component('mod-page', {
        computed: {
            mod: function () {
                const {game, mod} = this.$route.params;
                return Data[game][mod];
            },
            versionText: function () {
                const {version, beta, date} = this.mod;
                return `version ${version} ${beta ? 'beta ' : ''} <span class="date">(${date})</span>`;
            },
            descriptionText: function () {
                const packInfo = Util.formatPackCompatability(this.mod);
                return `${this.mod.description} ${packInfo}.`;
            }
        },
        methods: {
            getImagePath: function (filename) {
                const {game, id} = this.mod;
                return `images/${game}/${id}/${filename}`;
            }
        },
        template: `
            <div id="mod-page" class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-10 col-lg-8">
                        <router-link to="/">&larr; mods home page</router-link>
                        <div class="header">
                            <h1>{{ mod.name }}</h1>
                            <p v-html="versionText"></p>
                            <status-bar :status="mod.status"></status-bar>
                        </div>
                        <div class="image-display row justify-content-center">
                            <div class="img-col col-10 col-md-6" v-for="image in mod.images" :key="image">
                                <img :src="getImagePath(image)"
                                     :alt="image"
                                     onerror="if (this.src !== 'images/default.png') this.src = 'images/default.png';"/>
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
                            <div class="issues" v-if="mod.issues.length > 0">
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