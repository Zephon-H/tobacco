const Mock = require('mockjs')

module.exports = [
  {
    url: '/api/query',
    type: 'post',
    response: config => {
      const data = Mock.mock(
        [{
          'id': 377006,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:44:11',
          'location': '漾濞彝族自治县',
          'equipment_No': '5820'
        }, {
          'id': 377007,
          'dryBallTemp': 44.6,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 10:47:28',
          'location': '漾濞彝族自治县',
          'equipment_No': '5879'
        }, {
          'id': 377008,
          'dryBallTemp': 40.0,
          'wetBallTemp': 35.8,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:47:48',
          'location': '漾濞彝族自治县',
          'equipment_No': '5822'
        }, {
          'id': 377009,
          'dryBallTemp': 37.9,
          'wetBallTemp': 35.8,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:51:01',
          'location': '漾濞彝族自治县',
          'equipment_No': '5314'
        }, {
          'id': 377010,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '5845'
        }, {
          'id': 377011,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '5845'
        }, {
          'id': 377012,
          'dryBallTemp': 25.9,
          'wetBallTemp': 25.1,
          'dryBallTarget': 30.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:54:44',
          'location': '漾濞彝族自治县',
          'equipment_No': '5301'
        }, {
          'id': 377013,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:59:11',
          'location': '漾濞彝族自治县',
          'equipment_No': '5820'
        }, {
          'id': 377014,
          'dryBallTemp': 45.1,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 11:02:28',
          'location': '漾濞彝族自治县',
          'equipment_No': '5879'
        }, {
          'id': 377015,
          'dryBallTemp': 40.1,
          'wetBallTemp': 36.1,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:02:48',
          'location': '漾濞彝族自治县',
          'equipment_No': '5822'
        }, {
          'id': 377016,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '5845'
        }, {
          'id': 377017,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '5845'
        }, {
          'id': 377018,
          'dryBallTemp': 38.3,
          'wetBallTemp': 36.0,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:06:23',
          'location': '漾濞彝族自治县',
          'equipment_No': '5314'
        }, {
          'id': 409894,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:44:11',
          'location': '弥渡',
          'equipment_No': '7841'
        }, {
          'id': 409895,
          'dryBallTemp': 44.6,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 10:47:28',
          'location': '弥渡',
          'equipment_No': '7900'
        }, {
          'id': 409896,
          'dryBallTemp': 40.0,
          'wetBallTemp': 35.8,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:47:48',
          'location': '弥渡',
          'equipment_No': '7843'
        }, {
          'id': 409897,
          'dryBallTemp': 37.9,
          'wetBallTemp': 35.8,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:51:01',
          'location': '弥渡',
          'equipment_No': '7335'
        }, {
          'id': 409898,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '弥渡',
          'equipment_No': '7866'
        }, {
          'id': 409899,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '弥渡',
          'equipment_No': '7866'
        }, {
          'id': 409900,
          'dryBallTemp': 25.9,
          'wetBallTemp': 25.1,
          'dryBallTarget': 30.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:54:44',
          'location': '弥渡',
          'equipment_No': '7322'
        }, {
          'id': 409901,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:59:11',
          'location': '弥渡',
          'equipment_No': '7841'
        }, {
          'id': 409902,
          'dryBallTemp': 45.1,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 11:02:28',
          'location': '弥渡',
          'equipment_No': '7900'
        }, {
          'id': 409903,
          'dryBallTemp': 40.1,
          'wetBallTemp': 36.1,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:02:48',
          'location': '弥渡',
          'equipment_No': '7843'
        }, {
          'id': 409904,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '弥渡',
          'equipment_No': '7866'
        }, {
          'id': 409905,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '弥渡',
          'equipment_No': '7866'
        }, {
          'id': 409906,
          'dryBallTemp': 38.3,
          'wetBallTemp': 36.0,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:06:23',
          'location': '弥渡',
          'equipment_No': '7335'
        }, {
          'id': 442782,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:44:11',
          'location': '云龙',
          'equipment_No': '10841'
        }, {
          'id': 442783,
          'dryBallTemp': 44.6,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 10:47:28',
          'location': '云龙',
          'equipment_No': '10900'
        }, {
          'id': 442784,
          'dryBallTemp': 40.0,
          'wetBallTemp': 35.8,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:47:48',
          'location': '云龙',
          'equipment_No': '10843'
        }, {
          'id': 442785,
          'dryBallTemp': 37.9,
          'wetBallTemp': 35.8,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:51:01',
          'location': '云龙',
          'equipment_No': '10335'
        }, {
          'id': 442786,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '云龙',
          'equipment_No': '10866'
        }, {
          'id': 442787,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '云龙',
          'equipment_No': '10866'
        }, {
          'id': 442788,
          'dryBallTemp': 25.9,
          'wetBallTemp': 25.1,
          'dryBallTarget': 30.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:54:44',
          'location': '云龙',
          'equipment_No': '10322'
        }, {
          'id': 442789,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:59:11',
          'location': '云龙',
          'equipment_No': '10841'
        }, {
          'id': 442790,
          'dryBallTemp': 45.1,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 11:02:28',
          'location': '云龙',
          'equipment_No': '10900'
        }, {
          'id': 442791,
          'dryBallTemp': 40.1,
          'wetBallTemp': 36.1,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:02:48',
          'location': '云龙',
          'equipment_No': '10843'
        }, {
          'id': 442792,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '云龙',
          'equipment_No': '10866'
        }, {
          'id': 442793,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '云龙',
          'equipment_No': '10866'
        }, {
          'id': 442794,
          'dryBallTemp': 38.3,
          'wetBallTemp': 36.0,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:06:23',
          'location': '云龙',
          'equipment_No': '10335'
        }, {
          'id': 475670,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:44:11',
          'location': '漾濞彝族自治县',
          'equipment_No': '3799'
        }, {
          'id': 475671,
          'dryBallTemp': 44.6,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 10:47:28',
          'location': '漾濞彝族自治县',
          'equipment_No': '3858'
        }, {
          'id': 475672,
          'dryBallTemp': 40.0,
          'wetBallTemp': 35.8,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:47:48',
          'location': '漾濞彝族自治县',
          'equipment_No': '3801'
        }, {
          'id': 475673,
          'dryBallTemp': 37.9,
          'wetBallTemp': 35.8,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:51:01',
          'location': '漾濞彝族自治县',
          'equipment_No': '3293'
        }, {
          'id': 475674,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '3824'
        }, {
          'id': 475675,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '3824'
        }, {
          'id': 475676,
          'dryBallTemp': 25.9,
          'wetBallTemp': 25.1,
          'dryBallTarget': 30.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:54:44',
          'location': '漾濞彝族自治县',
          'equipment_No': '3280'
        }, {
          'id': 475677,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:59:11',
          'location': '漾濞彝族自治县',
          'equipment_No': '3799'
        }, {
          'id': 475678,
          'dryBallTemp': 45.1,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 11:02:28',
          'location': '漾濞彝族自治县',
          'equipment_No': '3858'
        }, {
          'id': 475679,
          'dryBallTemp': 40.1,
          'wetBallTemp': 36.1,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:02:48',
          'location': '漾濞彝族自治县',
          'equipment_No': '3801'
        }, {
          'id': 475680,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '3824'
        }, {
          'id': 475681,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '3824'
        }, {
          'id': 475682,
          'dryBallTemp': 38.3,
          'wetBallTemp': 36.0,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:06:23',
          'location': '漾濞彝族自治县',
          'equipment_No': '3293'
        }, {
          'id': 508558,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:44:11',
          'location': '漾濞彝族自治县',
          'equipment_No': '1799'
        }, {
          'id': 508559,
          'dryBallTemp': 44.6,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 10:47:28',
          'location': '漾濞彝族自治县',
          'equipment_No': '1858'
        }, {
          'id': 508560,
          'dryBallTemp': 40.0,
          'wetBallTemp': 35.8,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:47:48',
          'location': '漾濞彝族自治县',
          'equipment_No': '1801'
        }, {
          'id': 508561,
          'dryBallTemp': 37.9,
          'wetBallTemp': 35.8,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:51:01',
          'location': '漾濞彝族自治县',
          'equipment_No': '1293'
        }, {
          'id': 508562,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '1824'
        }, {
          'id': 508563,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '1824'
        }, {
          'id': 508564,
          'dryBallTemp': 25.9,
          'wetBallTemp': 25.1,
          'dryBallTarget': 30.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:54:44',
          'location': '漾濞彝族自治县',
          'equipment_No': '1280'
        }, {
          'id': 508565,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:59:11',
          'location': '漾濞彝族自治县',
          'equipment_No': '1799'
        }, {
          'id': 508566,
          'dryBallTemp': 45.1,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 11:02:28',
          'location': '漾濞彝族自治县',
          'equipment_No': '1858'
        }, {
          'id': 508567,
          'dryBallTemp': 40.1,
          'wetBallTemp': 36.1,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:02:48',
          'location': '漾濞彝族自治县',
          'equipment_No': '1801'
        }, {
          'id': 508568,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '1824'
        }, {
          'id': 508569,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '1824'
        }, {
          'id': 508570,
          'dryBallTemp': 38.3,
          'wetBallTemp': 36.0,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:06:23',
          'location': '漾濞彝族自治县',
          'equipment_No': '1293'
        }, {
          'id': 541446,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:44:11',
          'location': '鹤庆',
          'equipment_No': '11841'
        }, {
          'id': 541447,
          'dryBallTemp': 44.6,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 10:47:28',
          'location': '鹤庆',
          'equipment_No': '11900'
        }, {
          'id': 541448,
          'dryBallTemp': 40.0,
          'wetBallTemp': 35.8,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:47:48',
          'location': '鹤庆',
          'equipment_No': '11843'
        }, {
          'id': 541449,
          'dryBallTemp': 37.9,
          'wetBallTemp': 35.8,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:51:01',
          'location': '鹤庆',
          'equipment_No': '11335'
        }, {
          'id': 541450,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '鹤庆',
          'equipment_No': '11866'
        }, {
          'id': 541451,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '鹤庆',
          'equipment_No': '11866'
        }, {
          'id': 541452,
          'dryBallTemp': 25.9,
          'wetBallTemp': 25.1,
          'dryBallTarget': 30.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:54:44',
          'location': '鹤庆',
          'equipment_No': '11322'
        }, {
          'id': 541453,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:59:11',
          'location': '鹤庆',
          'equipment_No': '11841'
        }, {
          'id': 541454,
          'dryBallTemp': 45.1,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 11:02:28',
          'location': '鹤庆',
          'equipment_No': '11900'
        }, {
          'id': 541455,
          'dryBallTemp': 40.1,
          'wetBallTemp': 36.1,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:02:48',
          'location': '鹤庆',
          'equipment_No': '11843'
        }, {
          'id': 541456,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '鹤庆',
          'equipment_No': '11866'
        }, {
          'id': 541457,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '鹤庆',
          'equipment_No': '11866'
        }, {
          'id': 541458,
          'dryBallTemp': 38.3,
          'wetBallTemp': 36.0,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:06:23',
          'location': '鹤庆',
          'equipment_No': '11335'
        }, {
          'id': 574334,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:44:11',
          'location': '剑川',
          'equipment_No': '13841'
        }, {
          'id': 574335,
          'dryBallTemp': 44.6,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 10:47:28',
          'location': '剑川',
          'equipment_No': '13900'
        }, {
          'id': 574336,
          'dryBallTemp': 40.0,
          'wetBallTemp': 35.8,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:47:48',
          'location': '剑川',
          'equipment_No': '13843'
        }, {
          'id': 574337,
          'dryBallTemp': 37.9,
          'wetBallTemp': 35.8,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:51:01',
          'location': '剑川',
          'equipment_No': '13335'
        }, {
          'id': 574338,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '剑川',
          'equipment_No': '13866'
        }, {
          'id': 574339,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '剑川',
          'equipment_No': '13866'
        }, {
          'id': 574340,
          'dryBallTemp': 25.9,
          'wetBallTemp': 25.1,
          'dryBallTarget': 30.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:54:44',
          'location': '剑川',
          'equipment_No': '13322'
        }, {
          'id': 574341,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:59:11',
          'location': '剑川',
          'equipment_No': '13841'
        }, {
          'id': 574342,
          'dryBallTemp': 45.1,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 11:02:28',
          'location': '剑川',
          'equipment_No': '13900'
        }, {
          'id': 574343,
          'dryBallTemp': 40.1,
          'wetBallTemp': 36.1,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:02:48',
          'location': '剑川',
          'equipment_No': '13843'
        }, {
          'id': 574344,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '剑川',
          'equipment_No': '13866'
        }, {
          'id': 574345,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '剑川',
          'equipment_No': '13866'
        }, {
          'id': 574346,
          'dryBallTemp': 38.3,
          'wetBallTemp': 36.0,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:06:23',
          'location': '剑川',
          'equipment_No': '13335'
        }, {
          'id': 607222,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:44:11',
          'location': '巍山',
          'equipment_No': '15541'
        }, {
          'id': 607223,
          'dryBallTemp': 44.6,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 10:47:28',
          'location': '巍山',
          'equipment_No': '15600'
        }, {
          'id': 607224,
          'dryBallTemp': 40.0,
          'wetBallTemp': 35.8,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:47:48',
          'location': '巍山',
          'equipment_No': '15543'
        }, {
          'id': 607225,
          'dryBallTemp': 37.9,
          'wetBallTemp': 35.8,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:51:01',
          'location': '巍山',
          'equipment_No': '15035'
        }, {
          'id': 607226,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '巍山',
          'equipment_No': '15566'
        }, {
          'id': 607227,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '巍山',
          'equipment_No': '15566'
        }, {
          'id': 607228,
          'dryBallTemp': 25.9,
          'wetBallTemp': 25.1,
          'dryBallTarget': 30.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:54:44',
          'location': '巍山',
          'equipment_No': '15022'
        }, {
          'id': 607229,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:59:11',
          'location': '巍山',
          'equipment_No': '15541'
        }, {
          'id': 607230,
          'dryBallTemp': 45.1,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 11:02:28',
          'location': '巍山',
          'equipment_No': '15600'
        }, {
          'id': 607231,
          'dryBallTemp': 40.1,
          'wetBallTemp': 36.1,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:02:48',
          'location': '巍山',
          'equipment_No': '15543'
        }, {
          'id': 607232,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '巍山',
          'equipment_No': '15566'
        }, {
          'id': 607233,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '巍山',
          'equipment_No': '15566'
        }, {
          'id': 607234,
          'dryBallTemp': 38.3,
          'wetBallTemp': 36.0,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:06:23',
          'location': '巍山',
          'equipment_No': '15035'
        }, {
          'id': 640110,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:44:11',
          'location': '漾濞彝族自治县',
          'equipment_No': '16541'
        }, {
          'id': 640111,
          'dryBallTemp': 44.6,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 10:47:28',
          'location': '漾濞彝族自治县',
          'equipment_No': '16600'
        }, {
          'id': 640112,
          'dryBallTemp': 40.0,
          'wetBallTemp': 35.8,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:47:48',
          'location': '漾濞彝族自治县',
          'equipment_No': '16543'
        }, {
          'id': 640113,
          'dryBallTemp': 37.9,
          'wetBallTemp': 35.8,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:51:01',
          'location': '漾濞彝族自治县',
          'equipment_No': '16035'
        }, {
          'id': 640114,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '16566'
        }, {
          'id': 640115,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '16566'
        }, {
          'id': 640116,
          'dryBallTemp': 25.9,
          'wetBallTemp': 25.1,
          'dryBallTarget': 30.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:54:44',
          'location': '漾濞彝族自治县',
          'equipment_No': '16022'
        }, {
          'id': 640117,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:59:11',
          'location': '漾濞彝族自治县',
          'equipment_No': '16541'
        }, {
          'id': 640118,
          'dryBallTemp': 45.1,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 11:02:28',
          'location': '漾濞彝族自治县',
          'equipment_No': '16600'
        }, {
          'id': 640119,
          'dryBallTemp': 40.1,
          'wetBallTemp': 36.1,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:02:48',
          'location': '漾濞彝族自治县',
          'equipment_No': '16543'
        }, {
          'id': 640120,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '16566'
        }, {
          'id': 640121,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '16566'
        }, {
          'id': 640122,
          'dryBallTemp': 38.3,
          'wetBallTemp': 36.0,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:06:23',
          'location': '漾濞彝族自治县',
          'equipment_No': '16035'
        }, {
          'id': 672998,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:44:11',
          'location': '漾濞彝族自治县',
          'equipment_No': '17741'
        }, {
          'id': 672999,
          'dryBallTemp': 44.6,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 10:47:28',
          'location': '漾濞彝族自治县',
          'equipment_No': '17800'
        }, {
          'id': 673000,
          'dryBallTemp': 40.0,
          'wetBallTemp': 35.8,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:47:48',
          'location': '漾濞彝族自治县',
          'equipment_No': '17743'
        }, {
          'id': 673001,
          'dryBallTemp': 37.9,
          'wetBallTemp': 35.8,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 10:51:01',
          'location': '漾濞彝族自治县',
          'equipment_No': '17235'
        }, {
          'id': 673002,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '17766'
        }, {
          'id': 673003,
          'dryBallTemp': 35.9,
          'wetBallTemp': 33.6,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:51:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '17766'
        }, {
          'id': 673004,
          'dryBallTemp': 25.9,
          'wetBallTemp': 25.1,
          'dryBallTarget': 30.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 10:54:44',
          'location': '漾濞彝族自治县',
          'equipment_No': '17222'
        }, {
          'id': 673005,
          'dryBallTemp': 54.7,
          'wetBallTemp': 37.5,
          'dryBallTarget': 55.0,
          'wetBallTarget': 38.0,
          'produce_date': '2021-09-10 10:59:11',
          'location': '漾濞彝族自治县',
          'equipment_No': '17741'
        }, {
          'id': 673006,
          'dryBallTemp': 45.1,
          'wetBallTemp': 34.6,
          'dryBallTarget': 45.0,
          'wetBallTarget': 34.5,
          'produce_date': '2021-09-10 11:02:28',
          'location': '漾濞彝族自治县',
          'equipment_No': '17800'
        }, {
          'id': 673007,
          'dryBallTemp': 40.1,
          'wetBallTemp': 36.1,
          'dryBallTarget': 40.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:02:48',
          'location': '漾濞彝族自治县',
          'equipment_No': '17743'
        }, {
          'id': 673008,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '17766'
        }, {
          'id': 673009,
          'dryBallTemp': 35.6,
          'wetBallTemp': 33.5,
          'dryBallTarget': 36.0,
          'wetBallTarget': 35.0,
          'produce_date': '2021-09-10 11:06:19',
          'location': '漾濞彝族自治县',
          'equipment_No': '17766'
        }, {
          'id': 673010,
          'dryBallTemp': 38.3,
          'wetBallTemp': 36.0,
          'dryBallTarget': 38.0,
          'wetBallTarget': 36.0,
          'produce_date': '2021-09-10 11:06:23',
          'location': '漾濞彝族自治县',
          'equipment_No': '17235'
        }]
      )
      return {
        code: 20000,
        data: data
      }
    }
  },
  {
    url: '/api/map',
    type: 'post',
    response: config => {
      const data = Mock.mock(
        {
        // location: 位置对应的编码，device：对应的设备数量(total总数量，abnormal异常数量)
        // parent：省级位置，如大理白族自治州对应的671200；children：市级，同
          'parent': [{ 'location': '671200', 'device': { 'total': 7, 'abnormal': 1 }},
            { 'location': '650100', 'device': { 'total': 11, 'abnormal': 0 }}],
          'children': [{ 'location': '672503', 'device': { 'total': 3 }},
            { 'location': '672700', 'device': { 'total': 5, 'abnormal': 1 }},
            { 'location': '650118', 'device': { 'total': 11 }}]
        }
      )
      return {
        code: 20000,
        data: data
      }
    }
  }
]
