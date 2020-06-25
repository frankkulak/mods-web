module.exports = {
    outputDir: 'docs',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/sass/_main.scss";`
            }
        }
    }
};