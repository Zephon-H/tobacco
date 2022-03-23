const Mock = require('mockjs')

module.exports = [
  {
    url: '/api/line',
    type: 'post',
    response: () => {
      const data = Mock.mock({
        'red': [28, 30, 34, 38, 38, 38, 40, 40, 42, 42, 42, 42, 42, 44, 44, 48, 48, 54, 54, 60, 60, 67, 67, 67],
        'blue': [28, 30, 33.5, 36, 36, 36, 35.5, 35.5, 35, 35, 35, 35, 35, 35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 39],
        'time': ['2021-09-10 00:00:00', '2021-09-10 01:00:00', '2021-09-10 02:00:00', '2021-09-10 03:00:00',
          '2021-09-10 04:00:00', '2021-09-10 05:00:00', '2021-09-10 06:00:00', '2021-09-10 07:00:00',
          '2021-09-10 08:00:00', '2021-09-10 09:00:00', '2021-09-10 10:00:00', '2021-09-10 11:00:00',
          '2021-09-10 12:00:00', '2021-09-10 13:00:00', '2021-09-10 14:00:00', '2021-09-10 15:00:00',
          '2021-09-10 16:00:00', '2021-09-10 17:00:00', '2021-09-10 18:00:00', '2021-09-10 19:00:00',
          '2021-09-10 20:00:00', '2021-09-10 21:00:00', '2021-09-10 22:00:00', '2021-09-10 23:00:00']
      })
      return {
        code: 20000,
        data: data
      }
    }
  }
]
