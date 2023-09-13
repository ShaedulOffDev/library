import axios from 'axios'

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/volumes'
axios.interceptors.request.use((config) => {
  const authorization = `key=AIzaSyBjg5Xbc9zu8ikluz9q91yXlxHldu7XomY`
  config.headers.Authorization = authorization
  return config
})
export default axios