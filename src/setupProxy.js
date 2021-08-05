const proxy = require('http-proxy-middleware');

const addSourceInfo = (proxyReq) => {
  proxyReq.setHeader('x-immo-request', 'http://by-mts-brand-dating.imb2bs.com');
};

module.exports = (app) => {
  app.use('/mtsrbapp/android',
    proxy({
      target: 'http://dating.vps2665.by.immo',
      secure: false,
      logLevel: 'debug',
      changeOrigin: true,
      onProxyReq: addSourceInfo,
      pathRewrite: {
        '^/mtsrbapp': '',
      },
    }));
  app.use('/mtsrbapp/dating-images-by',
    proxy({
      target: 'http://vps2616.by.immo',
      secure: false,
      logLevel: 'debug',
      changeOrigin: true,
      pathRewrite: {
        '^/mtsrbapp/dating-images-by': '/dating2-images-by',
      },
    }));
  app.use('/mtsrbapp/i/android_avatars',
    proxy({
      target: 'http://dating.vps2665.by.immo',
      secure: false,
      logLevel: 'debug',
      changeOrigin: true,
      pathRewrite: {
        '^/mtsrbapp': '',
      },
    }));
  app.use('/mtsrbapp/events',
    proxy({
      target: 'http://29827.vps2677.by.immo',
      secure: false,
      logLevel: 'debug',
      changeOrigin: true,
      pathRewrite: {
        '^/mtsrbapp/events': '/sse',
      },
    }));
};