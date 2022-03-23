import request from '@/utils/request'

export function getLinesData(data) {
  return request({
    url: '/api/line',
    method: 'post',
    data
  })
}

