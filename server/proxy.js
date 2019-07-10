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