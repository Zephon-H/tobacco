<template>
  <div class="app-container">
    <div class="location-search">
      <el-tooltip class="item" effect="dark" content="输入设备编号" placement="top">
        <el-input v-model="dryBallTemp" placeholder="干球温度" />
        <el-input
          v-model="deviceId"
          placeholder="点击或输入搜索设备"
        />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="输入干球最大温度，可为空" placement="top">
        <el-input v-model="dryBallTemp" placeholder="干球温度" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="输入干球最大目标，可为空" placement="top">
        <el-input v-model="dryBallTarget" placeholder="干球目标" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="输入湿球最大温度，可为空" placement="top">
        <el-input v-model="wetBallTemp" placeholder="湿球温度" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="输入湿球最大目标，可为空" placement="top">
        <el-input v-model="wetBallTarget" placeholder="湿球目标" />
      </el-tooltip>
      <el-button class="query" @click="getData">查询</el-button>
    </div>
    <div>
      <FilenameOption v-model="filename" />
      <BookTypeOption v-model="bookType" />
      <el-button
        :loading="downloadLoading"
        style="margin:0 0 20px 20px;"
        type="primary"
        icon="el-icon-document"
        @click="exportExcel"
      >
        导出Excel
      </el-button>
      <el-button
        style="margin:0 0 20px 20px;"
        type="primary"
        icon="el-icon-s-marketing"
        @click="dialogTableVisible=true"
      >
        显示曲线
      </el-button>
    </div>
    <ve-table
      id="table"
      max-height="620px"
      :columns="columns"
      :table-data="tableData"
      :footer-data="footerData"
      :sort-option="sortOption"
    />
    <el-dialog width="55%" top="0" title="曲线展示" :visible.sync="dialogTableVisible">
      <DataLine :table-data="tableData" />
    </el-dialog>
  </div>
</template>

<script>
import FilenameOption from '@/components/ExportExcel/FilenameOption'
import BookTypeOption from '@/components/ExportExcel/BookTypeOption'
import DataLine from './components/DataLine'
import { dataMonitoringRequest } from '@/api/home'

export default {
  name: 'Qdata',
  components: { DataLine, FilenameOption, BookTypeOption },
  data() {
    return {
      dialogTableVisible: false,
      deviceId: '',
      wetBallTarget: '',
      wetBallTemp: '',
      dryBallTarget: '',
      dryBallTemp: '',
      downloadLoading: false,
      filename: '',
      bookType: 'xlsx',
      selectTab: '1',
      selectionTabs: [],
      columns: [
        { field: 'produce_date', key: 'produce_date', title: '时间', sortBy: '' },
        { field: 'dryBallTemp', key: 'dryBallTemp', title: '干球温度', sortBy: '' },
        { field: 'wetBallTemp', key: 'wetBallTemp', title: '湿球温度', sortBy: '' },
        { field: 'dryBallTarget', key: 'dryBallTarget', title: '干球目标', sortBy: '' },
        { field: 'wetBallTarget', key: 'wetBallTarget', title: '湿球目标', sortBy: '' }
      ],
      tableData: [],
      sortOption: {
        sortChange: (params) => {
          this.sortChange(params)
        }
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    initFooterData() {
      for (let i = 0; i < this.tableData.length; i++) {
        this.footerData[i] = [{
          rowkey: 0,
          location: '合计'
        }]
        this.tableData[i].forEach(dd => {
          for (const key in dd) {
            if (key === 'location') continue
            if (this.footerData[i][0][key] !== undefined) {
              this.footerData[i][0][key] += parseFloat(dd[key])
            } else {
              this.footerData[i][0][key] = 0
            }
          }
        })
      }
    },
    fetchData(p) {
      this.listLoading = true
      dataMonitoringRequest(p).then(response => {
        this.tableData = response.data
      })
    },
    handleSelectionChange(p) {
      this.selectionTabs = p
    },
    exportExcel() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        excel.exportExcel({
          documentId: '#table',
          filename: this.filename,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    getData() {
      let dryBallTempList = []
      if (this.dryBallTemp.indexOf('-') !== -1) {
        dryBallTempList = this.dryBallTemp.split('-')
      } else {
        dryBallTempList = [this.dryBallTemp, this.dryBallTemp]
      }
      let dryBallTargetList = []
      if (this.dryBallTarget.indexOf('-') !== -1) {
        dryBallTargetList = this.dryBallTarget.split('-')
      } else {
        dryBallTargetList = [this.dryBallTarget, this.dryBallTarget]
      }
      let wetBallTempList = []
      if (this.dryBallTemp.indexOf('-') !== -1) {
        wetBallTempList = this.wetBallTemp.split('-')
      } else {
        wetBallTempList = [this.wetBallTemp, this.wetBallTemp]
      }
      let wetBallTargetList = []
      if (this.dryBallTarget.indexOf('-') !== -1) {
        wetBallTargetList = this.wetBallTarget.split('-')
      } else {
        wetBallTargetList = [this.wetBallTarget, this.wetBallTarget]
      }
      const searchData = {
        'location': this.location,
        'equipment_No': this.deviceId,
        'dryBallTemp': dryBallTempList,
        'dryBallTarget': dryBallTargetList,
        'wetBallTemp': wetBallTempList,
        'wetBallTarget': wetBallTargetList
      }
      this.fetchData(searchData)
    },
    sortChange(params) {
      this.tableData.sort((a, b) => {
        if (params.produce_date) {
          if (params.produce_date === 'asc') {
            return new Date(a.produce_date) - new Date(b.produce_date)
          } else if (params.produce_date === 'desc') {
            return new Date(b.produce_date) - new Date(a.produce_date)
          } else {
            return 0
          }
        } else if (params.dryBallTemp) {
          if (params.dryBallTemp === 'asc') {
            return a.dryBallTemp - b.dryBallTemp
          } else if (params.dryBallTemp === 'desc') {
            return b.dryBallTemp - a.dryBallTemp
          } else {
            return 0
          }
        } else if (params.dryBallTemp) {
          if (params.dryBallTemp === 'asc') {
            return a.dryBallTemp - b.dryBallTemp
          } else if (params.dryBallTemp === 'desc') {
            return b.dryBallTemp - a.dryBallTemp
          } else {
            return 0
          }
        } else if (params.dryBallTarget) {
          if (params.dryBallTarget === 'asc') {
            return a.dryBallTarget - b.dryBallTarget
          } else if (params.dryBallTarget === 'desc') {
            return b.dryBallTarget - a.dryBallTarget
          } else {
            return 0
          }
        } else if (params.wetBallTarget) {
          if (params.wetBallTarget === 'asc') {
            return a.wetBallTarget - b.wetBallTarget
          } else if (params.wetBallTarget === 'desc') {
            return b.wetBallTarget - a.wetBallTarget
          } else {
            return 0
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.location-search {
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background: white;
  border-radius: 1rem;
  width: 100%;
}
.item {
  margin-left: 1rem;
}
.query {
  height: 40px;
  width: 50rem;
  display: flex;
  border: none;
  background: #1890ff;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  /*margin: 2rem 1rem 0 0;*/
  margin-left: 3rem;
}
</style>
