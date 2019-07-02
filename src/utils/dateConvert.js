// 时间转换，获取年月日时分秒
export default () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() >= 9 ? `${date.getMonth() + 1}` : `0${data.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  const milliseconds = date.getMilliseconds() > 9 ? date.getMilliseconds() : `0${date.getMilliseconds()}`;

  return {
    year,
    month,
    day,
    hours,
    minutes,
    milliseconds
  }
}

// 获取传入的时间/当日是周几
export const getTodyDate = (date) => {
  const d = date ? new Date(Number(date)) : new Date();
  switch (d.getDay()) {
    case 0:
      return '周日';
    case 1:
      return '周一';
    case 2:
      return '周二';
    case 3:
      return '周三';
    case 4:
      return '周四';
    case 5:
      return '周五';
    case 6:
      return '周六';
    default:
      return false
  }
}