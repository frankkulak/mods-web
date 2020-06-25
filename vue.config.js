module.exports = {
    publicPath: '', // keep this blank or else no assets will load
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/sass/_main.scss";`
            }
        }
    }
};