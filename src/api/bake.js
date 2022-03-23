import request from '@/utils/request'

export function getBakeData(query) {
  return request({
    url: '/api/bake/list',
    method: 'get',
    params: query
  })
}
export function getOtherData(query) {
  return request({
    url: '/api/bake/other',
    method: 'get',
    params: query
  })
}
