import Superagent from 'superagent';

var apiHost = '';
var apiPath = '/collection-api' // 接口统一地址

// 环境变量
switch (process.env.NODE_ENV) {
  case 'development':
    apiHost = '';
    break;
  case 'test':
    apiHost = '***';
    break;
  case 'production':
    apiHost = '***';
    break;
  default:
    break;
}

const request = (method, url, params) => new Promise((resolve, rejects) => {
  Superagent[method || 'post'](apiHost + apiPath + url)
    .send(params)
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .end((err, res) => {

      if (err) {
        (err && typeof err === 'string') ? alert(err) : alert("网络繁忙，请稍后重试");
        return;
      }

      const _res = JSON.parse(res.text);
      if (_res.code === 10000) {
        resolve(res.body)
      } else {
        rejects(res.message)
      }
    });
})

export default request
