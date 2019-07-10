const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./server/router');

app.use(router);
app.use(bodyParser.json());
// 启动应用
app.listen(8090, () => {
  console.log('server is run on 8090');
})