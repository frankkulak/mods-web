module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/mods-web/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/sass/_main.scss";`
            }
        }
    }
};