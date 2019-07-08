const express = require('express');
const bodyParser = require('body-parser');
const router = require('./server/router');
const app = express();

app.use(router);
app.use(bodyParser.json());
// 启动应用
app.listen(3000, () => {
  console.log('server is run on 3000');
})