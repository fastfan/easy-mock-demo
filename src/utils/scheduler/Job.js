const EventEmitter = require('events')
const toString = Object.prototype.toString
function isFunction(target) {
  return toString.call(target) === "[object Function]"
}
function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
function guid() {
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
}
export default class Job extends EventEmitter {
  constructor(interval, params, now) {
    super()
    this.id = guid()
    this.interval = Math.max(1000, interval) // 最小时间隔 1000ms
    this.time = now === true ? Date.now() : Date.now() + this.interval
    this.params = params
    this.delFlag = false
    this.isRunning = false
  }
  nextTime() {
    this.isRunning = false
    this.time = Date.now() + this.interval
    this.emit('update:time', this)
  }
  delete() {
    this.emit('delete', this)
    this.delFlag = true
  }
  run() {
    // console.log("Job", this.id, this.time, new Date().toLocaleString())

    if (isFunction(this.params)) {
      if (this.params() === false) {
        this.delete()
      } else {
        this.nextTime()
      }
      this.emit('run')
    } else {
      // TODO...
      // 执行完成后如果需要再继续
      this.nextTime()
    }
  }
  toString() {
    return `${this.id},${new Date(this.time).toLocaleString()}\n`
  }
}
