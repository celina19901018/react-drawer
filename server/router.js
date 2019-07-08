/**
 * 详细的代理和读取文件
 */
const express = require('express');
const fs = require('fs');
const router = express.Router();
const proxyConfig = require('./proxy');

/**
 * RESTful 路由
 */

// 下面文件执行逻辑在于当本地请求有符合proxy_config里面配置的正则，就会被代理到本地并且读取本地对应json文件返回相应json数据
proxyConfig.map((item, i) => {
  router[item.method || 'post'](item.reg, (req, res, next) => {
    fs.readFile(__dirname + item.local, 'utf8', (err, data) => {
      if(err) throw err;
      res.status(200);
      res.send(JSON.parse(data));
    })
  })
});

module.exports = router;
