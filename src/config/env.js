const port = 3000;


const PROD_NAME = 'prod.com';// 生产环境
const STAGE_NAME = 'stage.com';// 开发环境
const TSET_NAME = 'test.com';// 测试环境，测试环境与开发环境有可能是一个
const LOCAL_NAME = 'localhost';

const prefixAdaptive = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return `https://${STAGE_NAME}/city`;
    case 'test':
      return `https://${TSET_NAME}`;
    case 'production':
      return `https://${PROD_NAME}`
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