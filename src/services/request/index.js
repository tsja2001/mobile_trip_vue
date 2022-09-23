import { useMainStore } from '@/store/modules/main'
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

const mainStore = useMainStore()

class TsjaRequest {
  constructor(baseURL = BASE_URL, timeout = TIMEOUT) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        mainStore.isLoading = true
        return config
      },
      (err) => {
        return err
      }
    )
    // 相应拦截器
    this.instance.interceptors.response.use(
      (config) => {
        mainStore.isLoading = false
        return config
      },
      (err) => {
        mainStore.isLoading = false
        return err
      }
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      // 显示加载

      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new TsjaRequest(BASE_URL, TIMEOUT)
