let express = require("express");
let app = express();
let proxy = require('http-proxy-middleware');

let options = {
  target: 'http://10.0.0.48:8888', // 目标主机
  changeOrigin: true,               // 需要虚拟主机站点
};
 
app.use(express.static("html"));  // 关键的一句，静态资源文件目录，如：'html'

let exampleProxy = proxy(options);  //开启代理功能，并加载配置
app.use('/', exampleProxy);//对地址为'/'的请求全部转发
 
app.listen(8050, ()=>{
    console.log("服务启动成功。");
})