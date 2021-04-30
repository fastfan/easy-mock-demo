/*
 * @Author: fastfan
 * @Date: 2020-08-07 10:52:08
 * @LastEditors: fastfan
 * @LastEditTime: 2020-10-12 12:10:41
 * @Description: your description
 * @FilePath: /xs-management-bigScreen/src/utils/data.js
 */
/* 将毫秒数转换成 yyyy-MM-dd week hh-mm-ss */
export function formatDate(date) {
  let time = new Date(date);
  if (isNaN(time.getTime())) {
    time = new Date();
  }
  let weeks = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ];
  let year = time.getFullYear();
  let month = checkNumber(time.getMonth() + 1);
  let day = checkNumber(time.getDate());
  let week = weeks[time.getDay()];
  let hour = checkNumber(time.getHours());
  let minute = checkNumber(time.getMinutes());
  let second = checkNumber(time.getSeconds());

  // return `${year}-${month}-${day} ${week} ${hour}:${minute}:${second}`;
  return `${year}-${month}-${day}  ${hour}:${minute}:${second}`;

  function checkNumber(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
}

Date.prototype.format = function (fmt) {
  let o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds() // 毫秒
  };

  // 根据y的长度来截取年
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  }
  return fmt;
};

export function getNewDate(n) {
  let nowDate = new Date();
  let newDate = new Date(nowDate);
  newDate.setDate(nowDate.getDate() + n);
  return newDate;
}

// 根据参数获取最近几天年月日
export function getDay(day) {
  var today = new Date();
  var targetday_milliseconds = today.getTime() - 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds);
  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate;
}
export function doHandleMonth(month) {
  var m = month;
  if (month.toString().length == 1) {
    m = "0" + month;
  }
  return m;
}

/**
 *@description: 数字每三位加逗号
 *@author: fw
 *@date: 2020.09.04
 * @param {Number String} num 当前要转化的数字.
 */

export function toThousands(num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

/**
 * @description: 处理年月/月日
 * @param {String} num 当前要转化的年月/月日.
 * 202010-->10 202009-->9 1010-->10 1009->9
 */

export function handlerDate(str) {
  if (!str) return ""
  str = str.toString()
  str = str.substring(str.length - 2)//得到后两位
  if (str.startsWith("0")) {
    return str.substring(str.length - 1)
  }
  return str
}