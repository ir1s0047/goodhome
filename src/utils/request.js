import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 3000
})

// 添加请求拦截器
request.interceptors.request.use(
  // config 本次请求的配置
  // 必须要返回去
  (config) => {
    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
