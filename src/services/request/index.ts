// 新代码 +ts
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

import type { AxiosInstance } from 'axios'
import type { HYRequestConfig } from './type'

// 拦截器: 蒙版Loading/token/修改配置

class HYRequest {
  instance: AxiosInstance

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    // 针对特定的hyRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // T 响应结果类型
  request<T = any>(config: HYRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单词响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default new HYRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

// 旧代码
// import axios from 'axios'
// import { BASE_URL, TIMEOUT } from './config'

// class HYRequest {
//   constructor(baseURL, timeout) {
//     this.instance = axios.create({
//       baseURL,
//       timeout
//     })

//     this.instance.interceptors.response.use(
//       (res) => {
//         return res.data
//       },
//       (err) => {
//         return err
//       }
//     )
//   }

//   request(config) {
//     return this.instance.request(config)
//   }

//   get(config) {
//     return this.request({ ...config, method: 'get' })
//   }

//   post(config) {
//     return this.request({ ...config, method: 'post' })
//   }
// }

// export default new HYRequest(BASE_URL, TIMEOUT)
