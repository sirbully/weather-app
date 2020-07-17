module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/style/_colors.scss";',
      },
    },
  },
};
