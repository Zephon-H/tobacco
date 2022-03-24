export const mapOption = {
  basicOption: {
    tooltip: {
      trigger: 'item',
      // formatter: '{b}'
      formatter: (p) => {
        if (!isNaN(p.value)) {
          let t = `
                              <div style="text-align:center">${p.name}</div>
                              <div style=" text-align:center">设备数量:${p.data.total}</div>
                              `
          if (p.data.abnormal)t += `<div style="color:rgb(255, 80, 71)">异常数量:${p.data.abnormal}</div>`
          return t
        }
        return '<div>' + p.name + '</div>'
      }
    },
    // 左侧小导航图标
    visualMap: {
      pieces: [
        { min: 0, max: 1000, label: '有设备', color: '#2c9a42' },
        { min: -1, max: 0, label: '有异常设备', color: 'rgb(255, 80, 71)' }
      ],
      textStyle: {
        color: '#000'
      },
      top: 50,
      left: 30
    },
    geo: {
      // top: 100,
      // roam: true,
      // layoutSize: "65%",
      // zoom: 1.5,
      // layoutCenter: ['50%', '50%'],
      // roam: true, //开启鼠标缩放和漫
      // // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
      // layoutSize: 100
      // 设置这两个值后 left/right/top/bottom/width/height 无效。
    }
  },
  seriesOption: {
    type: 'map',
    // roam: false,
    roam: true,
    zoom: 1.2,
    nameMap: {
      'china': '中国'
    },
    label: {
      normal: {
        show: true,
        textStyle: {
          color: '#fff'
        }
      },
      emphasis: {
        show: true,
        textStyle: {
          color: '#fff'
        }
      }
    },
    itemStyle: {
      normal: {
        color: '#ccc',
        areaColor: 'rgb(142, 209, 235)',
        borderColor: '#fff',
        borderWidth: 0.5,
        label: {
          show: true,
          textStyle: {
            color: 'rgb(249, 249, 249)'
          }
        }
      },
      emphasis: {
        // areaColor: true,
        areaColor: 'rgb(25, 144, 255)'
      }
    }
  }
}
