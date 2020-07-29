module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/Form-Validation/' : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                  @import "@/assets/scss/main.scss";
              `
            }
        }
    }
}