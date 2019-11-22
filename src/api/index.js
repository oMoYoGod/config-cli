import axios from './axios'
let instance = axios()
export default {
    get(url, params) {
        let options = {}
        if (params) {
            options.params = params
        }
        return instance.get(url, options)
    },
    post(url, params) {
        let options = {}

        return instance.post(url, params, options)
    },
    put(url, params) {
        let options = {}
        return instance.put(url, params, options)
    },
    delete(url, params) {
        let options = {}
        if (params) {
            options.params = params
        }
        return instance.delete(url, options)
    }
}