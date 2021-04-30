import Job from './Job.js'
export default class AjaxJob extends Job {
  constructor(interval, params, now) {
    super(interval, params, now)
    this.ajax = null
  }

  run() {
    // do ajax
    console.log("Job", this.id, this.time, this.params)
  }
}
