import LinkedList from './LinkedList.js'
export default class JobList extends LinkedList {
  constructor() {
    super((a, b) => {
      const normalizedA = a || { id: null, time: null }
      const normalizedB = b || { id: null, time: null }

      if (normalizedA.id === normalizedB.id) {
        return 0
      }

      return normalizedA.time < normalizedB.time ? -1 : 1
    })
  }
}
