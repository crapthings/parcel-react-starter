import Axios from 'axios'

const instance = Axios.create({
  baseURL: '/api',
  // token goes here
  headers: {},
})

instance.interceptors.response.use(function (res) {
  return res.data
})

export const axios = Axios

export default instance
