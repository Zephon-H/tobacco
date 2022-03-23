import axios from 'axios'

// import { url } from './main'

const api = '/static'

// 获取全国JSON
export const getChinaJson = (params) => axios.get(api + `/map/china.json`, params)
export const getProvinceJSON = (path, params) => axios.get(api + `/map/province/${path}.json`, params)
export const getCityJSON = (path, params) => axios.get(api + `/map/city/${path}.json`, params)

// 获取省JSON
// export const getProvinceJSON = (path, params) => request.get(api + `/map/province/${path}.json`, params)
//
// // 获取市JSON
// export const getCityJSON = (path, params) => request.get(api + `/map/city/${path}.json`, params)
//
// // 获取天气
// export const getWeather = (params) => request.get(`https://api.asilu.com/weather_v2/`, params)

// export const getMapData = (params) => request.post(url+`/HomePage/Home/MapData/${params['areaCode']}`, params)

