import axios, { type AxiosInstance } from 'axios'

export type Payload<T> = {
  params?: Record<string, unknown>
  data?: T
  headers?: Record<string, string>
  responseType?: 'json' | 'blob' | 'text'
}

export type Response<U> = {
  data: U | null
  errors?: unknown
  warnings?: unknown
}

export class DummyJsonApi {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://dummyjson.com',
      timeout: 15000,
    })
  }

  async get<T, U>(url: string, pay?: Payload<T>): Promise<Response<U>> {
    try {
      const res = await this.axios.get(url, {
        params: pay?.params,
        headers: pay?.headers,
        responseType: pay?.responseType,
      })

      return { data: res.data as U, errors: undefined, warnings: undefined }
    } catch (e) {
      throw e
    }
  }
}
