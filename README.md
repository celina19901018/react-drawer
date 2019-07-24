样板工程基于`create-react-app`、`React16.x`、`Typescript`搭建而成。所有的打包构建都遵循`webpack4.x`轻量化原则，支持多端输出，并自带serviceWorker(PWA)做纯web端的简单离线处理。可使用yarn作为依赖管理工具。

## 起步
```npm install``` or ```yarn install```

### 运行
```npm start```<br>
如果你安装了yarn的话，也可以通过以下命令运行项目：<br>
```yarn start``` <br>
在开发模式下运行此应用程序，请在你常用的浏览器中打开它 [http://localhost:3000](http://localhost:3000)。

如果你对其进行编辑，页面将重新被加载。可在控制台中看到任何lint错误。

### 开启检测模式
```npm test``` or ```yarn test```
以交互式监视模式启动测试运行器。<br>
有关更多信息，请参阅有关[运行测试]（https://facebook.github.io/create-react-app/docs/running-tests）的部分。

### 构建
```npm run build``` or ```yarn build```

### 构建 Native
```npm run build:native``` or ```yarn build:native```


## 修改配置
开发之前请先修改`src/config/env.js`文件，请将`PROD_NAME`、`STAGE_NAME`和`TSET_NAME`修改为实际的生产环境、开发环境和测试环境域名。

```javascript
- const PROD_NAME = 'prod.com';// 生产环境
- const STAGE_NAME = 'stage.com';// 开发环境
- const TSET_NAME = 'test.com';// 测试环境，测试环境与开发环境有可能是一个
+ const PROD_NAME = 'your prod.com';// 生产环境
+ const STAGE_NAME = 'your stage.com';// 开发环境
+ const TSET_NAME = 'your test.com';// 测试环境，测试环境与开发环境有可能是一个
```

## 目录结构
```
my-app/
  proxy_data/
  public/
    index.html
    favicon.ico
    manifest.json
  server/
    proxy.js
    router.js
  src/
    assets/
    config/
      env.js
      reducer.js
      route.js
    containers/
    router/
    store/
    styles/
    utils/
    app.js
```

## 路由
路由的配置写在`src/config/route.js`中。

```javascript
import React from 'react';
import { Route } from 'react-router-dom';
import App from '../containers/App';
import Login from '../containers/Login';


// Status
const Status = ({ code, children }) => {
  return (
    <Route render={({ statusContext }) => {
      if (statusContext) statusContext.status = code;
      return children;
    }} />
  )
}

// not found
const NotFound = () => {
  return (
    <Status code={404}>
      <div>哎呀，页面走丢了！</div>
    </Status>
  )
}

export default [
  {
    path: '/',
    component: App
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: 404,
    component: NotFound
  }
]
```

## express服务实现模拟mock数据交互
* 在`package.json`中配置代理字段`"proxy": "http://localhost:8090"`。

* 准备node环境
使用nodemon用来检测node.js应用程序中文件的任何更改时，自动重启节点应用程序,非常适合用在开发环境中。

创建服务端文件`app.js`，引入相关模块。并配置接口路由，设置监听端口。

```javascript
const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./server/router');

app.use(router);
app.use(bodyParser.json());
// 启动应用
app.listen(8090, () => {
  console.log('server is run on 8090');
})
```

* 创建mock数据文件夹
mock数据在`proxy_data/`目录下。

* 配置代理规则
在`server/proxy.js`文件中配置如下：

```javascript
/**
 * 代理规则
 */
module.exports = [
  {
    "reg": "/collection-api/userInfo",
    "local": "/userInfo.json"
  },
  {
    "reg": "/collection-api/planList",
    "local": "/planList.json"
  }, {
    "reg": "/collection-api/planInfo",
    "local": "/planInfo.json"
  }
]
```

* 遍历模拟数据文件，生成对应路遇。
在`server/router.js`文件中配置如下：

```javascript
/**
 * 详细的代理和读取文件
 */
const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const proxyConfig = require('./proxy');


/**
 * RESTful 路由
 */

// 下面文件执行逻辑在于当本地请求有符合proxy_config里面配置的正则，就会被代理到本地并且读取本地对应json文件返回相应json数据
proxyConfig.map((item, i) => {
  router[item.method || 'post'](item.reg, (req, res, next) => {
    fs.readFile(path.resolve(__dirname, '../proxy_data') + item.local, 'utf8', (err, data) => {
      if (err) throw err;
      res.status(200);
      res.send(JSON.parse(data));

      next()
    })
  })
});

module.exports = router;

```

node服务器搭建成功，使用`nodemon app`命令，启动node应用程序。

* 通过`superagent`实现接口请求
