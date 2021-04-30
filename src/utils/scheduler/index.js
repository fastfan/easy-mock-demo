import { requestAnimationFrame, cancelAnimationFrame } from './requestAnimationFrame.js'

import Job from './Job.js'
import AjaxJob from './AjaxJob.js'
import JobList from './JobList.js'

const EventEmitter = require('events')
class Scheduler extends EventEmitter {
  constructor(opts) {
    super()
    this.opts = opts
    this.jobList = new JobList()
    this.ra = null
    this.lastTime = null
  }
  add(job) {
    job.on('update:time', this.update.bind(this))
    job.on('delete', this.remove.bind(this))
    this.jobList.insert(job)
  }
  update(job) {
    // if (this.jobList.contains(job)) {
    this.jobList.delete(job)
    // }
    this.jobList.insert(job)
  }
  remove(job) {
    job.removeListener('update:time', this.update.bind(this))
    job.removeListener('delete', this.remove.bind(this))
    // if (this.jobList.contains(job)) {
    this.jobList.delete(job)
    // }
  }
  doJob() {
    const now = Date.now()
    if (!this.lastTime || now - this.lastTime > 500) {
      let node = this.jobList.findMin()
      this.lastTime = now
      while (node) {
        const job = node.value
        if (job.time <= now && node.next) {
          node = node.next
        } else {
          node = null
        }
        if (job.delFlag !== true && job.time <= now && job.isRunning !== true) {
          this.remove(job)
          setTimeout(function() {
            job.isRunning = true
            job.run()
          }, 0)
        }
      }
    }

    this.ra = requestAnimationFrame(this.doJob.bind(this))
  }
  run() {
    if (!this.ra) {
      this.ra = requestAnimationFrame(this.doJob.bind(this))
    } else {
      console.log('Scheduler is running!!!')
    }
  }
  stop() {
    cancelAnimationFrame(this.ra)
    this.ra = null
  }
}

export {
  Job,
  AjaxJob,
  Scheduler
}

// test
// this.Scheduler = new Scheduler()
// this._job1 = new Job(1000, () => {
//   console.log(new Date(this._job1.time).toLocaleString(), this._job1.interval / 1000, JSON.stringify({ "a": 1 }))
// }, 1)
// this.Scheduler.add(this._job1)
// this._job1.on('run', () => {
//   setTimeout(() => {
//     this._job1.delete()
//   }, 3000)
// })
