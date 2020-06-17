const HomePage = (function () {
    // fixme : abstract this so ts4 isn't hard coded

    return Vue.component('home-page', {
        data: function () {
            return {
                mods: Data.ts4
            }
        },
        template: `
            <div id="home-page" class="container-fluid">
                <section id="welcome" class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        <h1>welcome</h1>
                        <p>My name is Frank, and I recently started modding for The Sims 4. I will be sharing my
                            creations on this website - you can browse them below, and click their cards to learn
                            more.</p>
                    </div>
                </section>

                <section id="mods" class="row justify-content-center">
                    <div class="col-12 col-sm-8 col-md-5 col-lg-4"
                         v-for="(mod, index) in mods"
                         :key="index">
                        <mod-preview :mod="mod"></mod-preview>
                    </div>
                </section>

                <section id="contact" class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        <h1>contact</h1>
                        <p>email: <a href="mailto:mods@frankkulak.com">mods@frankkulak.com</a></p>
                        <p>Feel free to report issues or ask questions, but please refrain from sending mod requests. I
                            am still new to modding and am in the process of figuring it out.</p>
                    </div>
                </section>
            </div>`
    });
})();