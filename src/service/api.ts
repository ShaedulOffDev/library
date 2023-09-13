import axios from 'axios'

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/volumes'
axios.interceptors.request.use((config) => {
  const authorization = `key=AIzaSyCr76vdu4IkS5IkVQVjtyNGOwcmeeUhQ4Q`;
  config.headers.Authorization = authorization;
  return config;
});
export default axios