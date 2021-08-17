module.exports = {
  devServer: {
    open: true,
    host: "localhost",
    port: 8081,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      //配置跨域
      "/api": {
        target: "http://127.0.0.1:8080/", 
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": "", 
        },
      },
    },
  },
};
