样板工程基于[Create React App](https://github.com/facebook/create-react-app) [React16.x](https://github.com/facebook/react) [Typescript](https://github.com/microsoft/TypeScript)搭建而成，
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 起步
`npm install` or `yarn install`

### 运行
`npm start`<br>
如果你安装了yarn的话，也可以通过以下命令运行项目：<br>
`yarn start` <br>
在开发模式下运行此应用程序。<br>
请在你常用的浏览器中打开它 [http://localhost:3000](http://localhost:3000)。

如果你对其进行编辑，页面将重新被加载。可在控制台中看到任何lint错误。

### 开启检测模式
`npm test` or `yarn test`
以交互式监视模式启动测试运行器。<br>
有关更多信息，请参阅有关[运行测试]（https://facebook.github.io/create-react-app/docs/running-tests）的部分。

### 构建
`npm run build` or `yarn build`

### 构建 Native
`npm run build:native` or `yarn build:native`


## 修改配置
开发之前请先修改`src/config/env.js`文件，请将`PROD_NAME`、`STAGE_NAME`和`TSET_NAME`修改为实际的生产环境、开发环境和测试环境域名。

```
- const PROD_NAME = 'prod.com';// 生产环境
- const STAGE_NAME = 'stage.com';// 开发环境
- const TSET_NAME = 'test.com';// 测试环境，测试环境与开发环境有可能是一个
+ const PROD_NAME = 'your prod.com';// 生产环境
+ const STAGE_NAME = 'your stage.com';// 开发环境
+ const TSET_NAME = 'your test.com';// 测试环境，测试环境与开发环境有可能是一个
```