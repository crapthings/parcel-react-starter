import { proxy } from 'valtio'

const store = proxy({
  list: [1, 2],
  text: null
})

export default store
