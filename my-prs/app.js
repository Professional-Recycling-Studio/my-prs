var express = require('express');
var proxy = require('http-proxy-middleware');   //引入跨域代理nodejs模块
var app = express();
app.use(  //配置跨域代理的模块
    '/api',
    proxy({ target: 'https://www.qupingce.com', changeOrigin: true ,pathRewrite: {
      '^/api': ''
  }})
);
app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(3001);