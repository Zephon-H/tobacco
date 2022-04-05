import request from '@/utils/request'

export function dataMonitoringRequest(data) {
  return request({
    url: '/api/query',
    method: 'post',
    data
  })
}

export const getMapData = (params) => request.post(`/api/map`, params)
