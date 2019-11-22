import api from '../index'
import urls from './url'
export default {
  initData (params) {
    // return出去了一个promise
    return api.get(urls.banners, params)
  }
}