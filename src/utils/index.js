/* eslint-disable */
export function scaling(w, h, sw, sh) {
  var containerRatio = sw / sh;
  var imgRatio = w / h;
  var top = 0;
  var left = 0;
  var s = 1;
  if (imgRatio > containerRatio) {
    s = sw / w;
    w = sw;
    h = sw / imgRatio;
    top = sh - h;
  } else if (imgRatio < containerRatio) {
    s = sh / h;
    h = sh;
    w = sh * imgRatio;
    left = sw - w;
  } else {
    s = sw / w;
    w = sw;
    h = sh;
  }

  return {
    width: w,
    height: h,
    scale: s,
    top,
    left
  };
}
export function getClientWidth() {
  var clientWidth = 0;
  if (document.body.clientWidth && document.documentElement.clientWidth) {
    var clientWidth =
      document.body.clientWidth < document.documentElement.clientWidth ?
      document.body.clientWidth :
      document.documentElement.clientWidth;
  } else {
    var clientWidth =
      document.body.clientWidth > document.documentElement.clientWidth ?
      document.body.clientWidth :
      document.documentElement.clientWidth;
  }
  return clientWidth;
}

// 时间格式化
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  if (!time) return ''
  const format = cFormat || 'yyyy-mm-dd hh:ii:ss'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    time = parseInt(time)
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/(y|m|d|h|i|s|a)+/gi, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function getClientHeight() {
  var clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    var clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight ?
      document.body.clientHeight :
      document.documentElement.clientHeight;
  } else {
    var clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight ?
      document.body.clientHeight :
      document.documentElement.clientHeight;
  }
  return clientHeight;
}

export function setFontSize() {
  var html = document.getElementsByTagName("html")[0]
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = oWidth / 1920 * 64 + "px"
}

const oWidth = document.body.clientWidth || document.documentElement.clientWidth
const width = process.env.VUE_APP_WIDTH || 1920
export function getNumberByRatio(num) {
  return Math.floor(Number(num) * (oWidth / width))
}

export function getZoomByRatio(zoom) {
  // 要针对分辨率处理
  return Math.floor(Number(zoom) + (oWidth / width) - 1)
}

/**
 * @description: 生成随机id
 * @return {String}
 */
export function createRandomId() {
  return (
    'id-' +
    (Math.random() * 10000000).toString(16).substr(0, 4) +
    '-' +
    new Date().getTime() +
    '-' +
    Math.random()
      .toString()
      .substr(2, 5)
  )
}