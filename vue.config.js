module.exports = {
    // publicPath: '/mods-web/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/sass/_main.scss";`
            }
        }
    }
};