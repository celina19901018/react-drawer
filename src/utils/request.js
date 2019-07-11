import { prefixAdaptive } from '../config/env';

const prefix = prefixAdaptive();
const isNative = new RegExp(/_app/).test(navigator.userAgent.toLowerCase());// app 需设置 userAgent 的 app 名字

const resolveQuery = (params) => {
  let p = '?';
  for (let o in params) {
    if (params.hasOwnProperty(o)) {
      p += o + '=' + params[o] + '&'
    }
  }
  p = p.slice(0, -1);
}

const request = (type, url, params = {}) => new Promise((resolve, reject) => {
  type = typeof type === 'string' && type.toUpperCase();
  let path = url;

  switch (true) {
    case type === 'GET':
      let query = resolveQuery(params);
      path = `${prefix}${path}${query}`;
      break;
    case type === 'POST':
    default:
      path = `${prefix}${path}`;
      break;
  };

  const execute = () => {
    if (isNative) {
      // app 环境走native 代理请求
    } else {
      const handler = function() {
        if (this.readyState !== 4) return;
        if (new RegExp(/200|304/).test(this.status)) {
          resolve(this.response);
        } else {
          reject({ msg: this.statusText });
        }
      };

      let client = new XMLHttpRequest();
      client.open(type, path);
      client.onreadystatechange = handler;
      client.responseType = 'json';
      client.setRequestHeader('Content-Type', 'application/json');
      client.send(type === 'POST' ? JSON.stringify(params) : null);
    }
  };

  execute()
})

export default request;