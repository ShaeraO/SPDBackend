import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:443/'   
})

// 45.84.225.49

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance