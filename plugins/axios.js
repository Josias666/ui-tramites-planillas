import axios from 'axios'
export default function({ $axios }) {
  $axios.onRequest((config) => {
    const token = store.getters['token']
    const roleshash =  window.localStorage.getItem('roleshash')
    if (token) { 
      config.headers['Authorization'] = token
      axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
      axios.defaults.headers.common['token'] = token
      axios.defaults.headers.common['roleshash'] = roleshash    
    }
     config.headers['Authorization'] = `Bearer abc`
     config.headers['X-Requested-With'] = 'XMLHttpRequest'
     config.headers['X-CSRF-TOKEN'] = token
  });
}