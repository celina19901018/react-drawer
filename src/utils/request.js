import { prefixAdaptive } from '../config/env';

const prefix = prefixAdaptive();

/**
 * @todo 处理 get 请求参数
 * @param {*} params 
 */
const resolveQuery = (params) => {
  let p = '?';
  for (let i in params) {
    p += i + '=' + params[i] + '&';
  }
  p = p.slice(0, -1);
  return p;
}

/**
 * @todo 在原型对象 Promise.prototype 上定义 done 方法
 */
Promise.prototype.done = (onFulFilled, onRejected) => {
  this
    .then(onFulFilled)
    .catch(reason => {
      setTimeout(() => {
        throw reason;
      }, 0);
    })
}

const request = (type, path, params) => new Promise((resolve, reject) => {
  type = typeof type === 'string' && type.toUpperCase();
  let interfaceUrl = '';
  switch (true) {
    case type === 'GET':
      const query = resolveQuery(params);
      interfaceUrl = `${prefix}${path}${query}`;
      break;
    case type === 'POST':
    default:
      interfaceUrl = `${prefix}${path}`;
      break;
  }

  /**
   * @todo 区分环境执行
   */
  const execute = () => {
    if (process.env.NATIVE_ENV) {
      // todo
      // 当前是native环境，与 Native 交互
    } else {
      const handler = function () {
        if (this.readyState !== 4) return;
        if (this.status === 200 || this.status === 304) {
          resolve(this.response);
        } else {
          reject({ hasCanceled_: true, msg: this.status.Text });
        }
      }

      let client = new XMLHttpRequest();
      client.open(type, interfaceUrl);
      client.onreadystatechange = handler;
      client.responseType = 'json';
      client.setRequestHeader('Content-Type', 'application/json');
      client.send(type === 'POST' ? JSON.stringify(params) : null);
    }
  }

  execute();
});

export default request;