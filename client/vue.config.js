module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader",
        },
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/scss/global.scss"`,
      },
      scss: {
        prependData: `@import "~@/scss/global.scss";`,
      },
    },
  },
};
