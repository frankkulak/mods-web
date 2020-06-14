(function () {
    Vue.component('mod-fullview', {
        props: ['mod'],
        data: function () {
            return {
                imageCount: this.$props.mod.images.length,
                imageIndexToShow: 0
            };
        },
        methods: {
            getImagePath: function (filename) {
                return `./images/${filename}`;
            },
            updateImage: function (offset) {
                let nextIndex = (this.imageIndexToShow + offset) % 3;
                if (nextIndex < 0) nextIndex = this.imageCount - 1;
                this.imageIndexToShow = nextIndex;
            },
            nextImage: function () {
                this.updateImage(1);
            },
            prevImage: function () {
                this.updateImage(-1);
            }
        },
        template: `
            <div class="mod-fullview container-fluid">
                <mod-header :mod="mod"></mod-header>
                <div class="image-display row justify-content-center align-items-center">
                    <div class="left-arrow col-2 col-sm-1 h-100">
                        <button @click="prevImage" class="btn btn-link">
                            <img src="../../images/left-arrow.png" alt="Previous Image" class="arrow"/>
                        </button>
                    </div>
                    <div class="thumbnail-display col-8 col-sm-6 col-md-5">
                        <img v-for="(image, index) in mod.images"
                             :key="index"
                             v-show="index === imageIndexToShow"
                             :src="getImagePath(image)"
                             class="thumbnail"
                             alt="Preview Image"/>
                    </div>
                    <div class="right-arrow col-2 col-sm-1 h-100">
                        <button @click="nextImage" class="btn btn-link">
                            <img src="../../images/right-arrow.png" alt="Next Image" class="arrow"/>
                        </button>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-10 col-md-8">
                        <p v-html="mod.description"></p>
                        <pack-compatability v-bind:mod="mod"></pack-compatability>
                        <hr>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-10 col-md-8">
                        <h1>Features</h1>
                        <p v-for="feature in mod.features">
                            <span class="h-color">{{feature.headline}}:</span> {{feature.description}}
                        </p>
                        <hr>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-10 col-md-8">
                        <h1>Known Bugs</h1>
                        <p v-for="bug in mod.bugs">
                            <span class="h-color">{{bug.headline}}:</span> {{bug.description}}
                            <span class="workaround">{{bug.workaround}}</span> {{bug.priority}}
                        </p>
                        <hr>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-10 col-md-8">
                        <h6><span>By downloading this mod, you are agreeing to my</span> terms of use</h6>
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
                        <div class="col-12 text-center">
                            <a :href="mod.link" target="_blank" class="btn btn-outline-primary">
                                Download from Google Drive</a>
                        </div>
                    </div>
                </div>
            </div>`
    });
})();