import axios from 'axios'
import { apiConfig } from '../config'

class Http {
    instance
    accessToken
    constructor() {
        this.instance = axios.create({
            baseURL: apiConfig.baseUrl,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.instance.interceptors.request.use(
            (config) => {
                if (this.accessToken && config.headers) {
                    config.headers.authorization = this.accessToken
                    return config
                }
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )
        this.instance.interceptors.response.use(
            (response) => {
                const { url } = response.config
                // if (url === path.login || url === path.register) {
                //     const data = response.data
                //     this.accessToken = (response.data).data?.access_token
                // } else if (url === path.logout) {
                //     this.accessToken = ''
                // }
                return response?.data
            },
            function (error) {
                // if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
                //     const data = error.response?.data
                //     const message = data.message || error.message
                //     toast.error(message)
                // }
                // return Promise.reject(error)
            }
        )
    }
}

const http = new Http().instance

export default http