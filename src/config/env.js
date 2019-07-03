const port = 3000;


const PROD_NAME = 'prod.com';// 生产环境
const STAGE_NAME = 'stag.com';// 开发环境
const TSET_NAME = 'test.com';// 测试环境，测试环境与开发环境有可能是一个
const LOCAL_NAME = 'localhost';

const prefixAdaptive = () => {
  switch (window.location.hostname) {
    case PROD_NAME:
      return `https://${PROD_NAME}/`;
    case STAGE_NAME:
      return `https://${STAGE_NAME}/`;
    case TSET_NAME:
      return `https://${TSET_NAME}/`;
    case LOCAL_NAME:
      return `https://${LOCAL_NAME}:${port}/`
    default:
      return false;
  }
}

export {
  prefixAdaptive,
  PROD_NAME,
  STAGE_NAME,
  TSET_NAME,
  LOCAL_NAME
}