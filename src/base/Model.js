import EventBus from './EventBus'

class Model extends EventBus {
  constructor(options) {
    super() // EventBus#constructor()
    const keys = ['data', 'update', 'create', 'delete', 'get']
    keys.forEach((key) => {
      if(key in options) {
        this[key] = options[key]
      }
    })
  }
  create() {
    // ?. 可选链 (Optional Chaining)
    // console?.error?.('You have not implement create yet')
    console && console.error && console.error('You have not implement create yet')
  }
  delete() {
    console && console.error && console.error('You have not implement delete yet')
  }
  update() {
    console && console.error && console.error('You have not implement update yet')
  }
  get() {
    console && console.error && console.error('You have not implement get yet')
  }
}

export default Model