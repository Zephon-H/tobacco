const Mock = require('mockjs')

module.exports = [
  {
    url: '/api/bake/list',
    type: 'get',
    response: () => {
      const tableData = Mock.mock({
        indicators: ['麒麟', '沾益', '马龙', '宣威', '富源', '罗平', '师宗', '陆良', '会泽', '全市合计'],
        items: [
          {
            branch: '点火后至38℃时间大于26小时',
            '0_0': 30, '0_1': 0,
            '1_0': 46, '1_1': 0,
            '2_0': 37, '2_1': 0,
            '3_0': 20, '3_1': 0,
            '4_0': 54, '4_1': 0,
            '5_0': 4, '5_1': 0,
            '6_0': 2, '6_1': 0,
            '7_0': 5, '7_1': 0,
            '8_0': 4, '8_1': 0,
            '9_0': 0, '9_1': 0
          },
          {
            branch: '干球温度38℃时，湿球温度>36.5℃',
            '0_0': 0, '0_1': 0,
            '1_0': 2, '1_1': 0,
            '2_0': 1, '2_1': 0,
            '3_0': 0, '3_1': 0,
            '4_0': 0, '4_1': 0,
            '5_0': 1, '5_1': 0,
            '6_0': 0, '6_1': 0,
            '7_0': 0, '7_1': 0,
            '8_0': 0, '8_1': 0,
            '9_0': 0, '9_1': 0
          },
          {
            branch: '38℃~42℃升温时间<8小时',
            '0_0': 13, '0_1': 0,
            '1_0': 16, '1_1': 0,
            '2_0': 12, '2_1': 0,
            '3_0': 8, '3_1': 0,
            '4_0': 12, '4_1': 0,
            '5_0': 41, '5_1': 0,
            '6_0': 9, '6_1': 0,
            '7_0': 5, '7_1': 0,
            '8_0': 0, '8_1': 0,
            '9_0': 0, '9_1': 0
          },
          {
            branch: '38℃~42℃升温时间<12小时',
            '0_0': 14, '0_1': 0,
            '1_0': 14, '1_1': 0,
            '2_0': 10, '2_1': 0,
            '3_0': 4, '3_1': 0,
            '4_0': 20, '4_1': 0,
            '5_0': 10, '5_1': 0,
            '6_0': 10, '6_1': 0,
            '7_0': 4, '7_1': 0,
            '8_0': 0, '8_1': 0,
            '9_0': 0, '9_1': 0
          },
          {
            branch: '38℃~42℃升温时间<9小时',
            '0_0': 48, '0_1': 0,
            '1_0': 18, '1_1': 0,
            '2_0': 45, '2_1': 0,
            '3_0': 62, '3_1': 0,
            '4_0': 60, '4_1': 0,
            '5_0': 7, '5_1': 0,
            '6_0': 27, '6_1': 0,
            '7_0': 6, '7_1': 0,
            '8_0': 2, '8_1': 0,
            '9_0': 0, '9_1': 0
          },
          {
            branch: '54℃稳温时间<12小时',
            '0_0': 58, '0_1': 0,
            '1_0': 72, '1_1': 0,
            '2_0': 79, '2_1': 0,
            '3_0': 64, '3_1': 0,
            '4_0': 91, '4_1': 0,
            '5_0': 98, '5_1': 0,
            '6_0': 26, '6_1': 0,
            '7_0': 4, '7_1': 0,
            '8_0': 12, '8_1': 0,
            '9_0': 0, '9_1': 0
          },
          {
            branch: '54℃~68℃升温时间<14小时',
            '0_0': 9, '0_1': 0,
            '1_0': 8, '1_1': 0,
            '2_0': 18, '2_1': 0,
            '3_0': 45, '3_1': 0,
            '4_0': 7, '4_1': 0,
            '5_0': 6, '5_1': 0,
            '6_0': 5, '6_1': 0,
            '7_0': 2, '7_1': 0,
            '8_0': 0, '8_1': 0,
            '9_0': 0, '9_1': 0
          },
          {
            branch: '掉温(>2℃)次数=1次',
            '0_0': 14, '0_1': 0,
            '1_0': 13, '1_1': 0,
            '2_0': 10, '2_1': 0,
            '3_0': 40, '3_1': 0,
            '4_0': 25, '4_1': 0,
            '5_0': 15, '5_1': 0,
            '6_0': 6, '6_1': 0,
            '7_0': 4, '7_1': 0,
            '8_0': 4, '8_1': 0,
            '9_0': 0, '9_1': 0
          },
          {
            branch: '掉温(>2℃)次数=2次',
            '0_0': 10, '0_1': 0,
            '1_0': 16, '1_1': 0,
            '2_0': 16, '2_1': 0,
            '3_0': 22, '3_1': 0,
            '4_0': 17, '4_1': 0,
            '5_0': 17, '5_1': 0,
            '6_0': 8, '6_1': 0,
            '7_0': 1, '7_1': 0,
            '8_0': 2, '8_1': 0,
            '9_0': 0, '9_1': 0
          },
          {
            branch: '掉温(>2℃)次数>2次',
            '0_0': 30, '0_1': 0,
            '1_0': 53, '1_1': 0,
            '2_0': 47, '2_1': 0,
            '3_0': 30, '3_1': 0,
            '4_0': 59, '4_1': 0,
            '5_0': 56, '5_1': 0,
            '6_0': 13, '6_1': 0,
            '7_0': 3, '7_1': 0,
            '8_0': 4, '8_1': 0,
            '9_0': 0, '9_1': 0
          },
          {
            branch: '水壶缺水',
            '0_0': 6, '0_1': 0,
            '1_0': 5, '1_1': 0,
            '2_0': 2, '2_1': 0,
            '3_0': 11, '3_1': 0,
            '4_0': 1, '4_1': 0,
            '5_0': 1, '5_1': 0,
            '6_0': 1, '6_1': 0,
            '7_0': 3, '7_1': 0,
            '8_0': 0, '8_1': 0,
            '9_0': 0, '9_1': 0
          }
        ]
      })
      return {
        code: 20000,
        data: tableData
      }
    }
  },
  {
    url: '/api/bake/other',
    type: 'get',
    response: () => {
      const tableData = Mock.mock(
        [
          [
            {
              location: '麒麟区',
              total: 209,
              running: 145,
              ratio: 0
            },
            {
              location: '沾益区',
              total: 157,
              running: 97,
              ratio: 0
            },
            {
              location: '马龙区',
              total: 339,
              running: 186,
              ratio: 0
            },
            {
              location: '宣威市',
              total: 350,
              running: 275,
              ratio: 0
            }
          ],
          [
            {
              location: '会泽县',
              stove: 25,
              totalScore: 2116,
              score: 0
            },
            {
              location: '沾益区',
              stove: 76,
              totalScore: 6389,
              score: 0
            },
            {
              location: '师宗县',
              stove: 94,
              totalScore: 7693,
              score: 0
            },
            {
              location: '宣威市',
              stove: 48,
              totalScore: 3903,
              score: 0
            }
          ],
          [
            {
              location: '会泽县',
              avgScore: 83,
              lineNum: 22,
              avg: 0
            },
            {
              location: '宣威市',
              avgScore: 82.1,
              lineNum: 125,
              avg: 0
            },
            {
              location: '罗平县',
              avgScore: 78,
              lineNum: 103,
              avg: 0
            },
            {
              location: '沾益县',
              avgScore: 75,
              lineNum: 95,
              avg: 0
            }
          ],
          [
            {
              location: '麒麟区',
              total: 446,
              alertNum: 228,
              ratio: 0,
              lossNum: 82,
              lossRatio: 0
            }
          ],
          [
            {
              location: '麒麟区',
              change: 103,
              fix: 190,
              alert: 425
            }
          ],
          [
            {
              location: '麒麟区',
              change1: 4,
              fix1: 4,
              change2: 2,
              fix2: 2
            }
          ],
          [
            {
              location: '麒麟区',
              total: 446,
              lackNum: 35,
              lackTime: 154,
              ratio: 0
            }
          ]
        ])
      const columnList = Mock.mock(
        [
          [
            { field: 'location', key: 'location', title: '产区' },
            { field: 'total', key: 'total', title: '安装总数' },
            { field: 'running', key: 'running', title: '运行总数' },
            { field: 'ratio', key: 'ratio', title: '运行率' }
          ],
          [
            { field: 'location', key: 'location', title: '产区' },
            { field: 'stove', key: 'stove', title: '炉数' },
            { field: 'totalScore', key: 'totalScore', title: '总分' },
            { field: 'score', key: 'score', title: '评价分' }
          ],
          [
            { field: 'location', key: 'location', title: '产区' },
            { field: 'avgScore', key: 'avgScore', title: '工艺平均分' },
            { field: 'lineNum', key: 'lineNum', title: '曲线数量' },
            { field: 'avg', key: 'avg', title: '加权平均' }
          ],
          [
            { field: 'location', key: 'location', title: '产区' },
            { field: 'total', key: 'total', title: '总炕数' },
            { field: 'alertNum', key: 'alertNum', title: '预警炕数' },
            { field: 'ratio', key: 'ratio', title: '预警率' },
            { field: 'lossNum', key: 'lossNum', title: '掉温炕数' },
            { field: 'lossRatio', key: 'lossRatio', title: '掉温率' }
          ],
          [
            { field: 'location', key: 'location', title: '产区' },
            {
              title: '掉温报警',
              children: [
                { field: 'change', key: 'change', title: '变黄阶段' },
                { field: 'fix', key: 'fix', title: '定色阶段' }
              ]
            },
            { field: 'alert', key: 'alert', title: '升温报警' }
          ],
          [
            { field: 'location', key: 'location', title: '产区' },
            {
              title: '掉温报警（℃）',
              children: [
                { field: 'change1', key: 'change1', title: '变黄阶段' },
                { field: 'fix1', key: 'fix1', title: '定色阶段' }
              ]
            },
            {
              title: '升温报警（℃）',
              children: [
                { field: 'change2', key: 'change2', title: '变黄阶段' },
                { field: 'fix2', key: 'fix2', title: '定色阶段' }
              ]
            }
          ],
          [
            { field: 'location', key: 'location', title: '产区' },
            { field: 'total', key: 'total', title: '总炕数' },
            { field: 'lackNum', key: 'lackNum', title: '缺水数' },
            { field: 'lackTime', key: 'lackTime', title: '缺水时间' },
            { field: 'ratio', key: 'ratio', title: '缺水率' }
          ]
        ]
      )
      return {
        code: 20000,
        data: {
          tableData,
          columnList
        }
      }
    }
  }
]

