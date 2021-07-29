module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/personal-resume/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/func.scss";
        `,
      },
    },
  },
};
