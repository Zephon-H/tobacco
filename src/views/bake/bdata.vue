<template>
  <div class="app-container">
    <div>
      <FilenameOption v-model="filename" />
      <AutoWidthOption v-model="autoWidth" />
      <BookTypeOption v-model="bookType" />
      <el-button
        :loading="downloadLoading"
        style="margin:0 0 20px 20px;"
        type="primary"
        icon="el-icon-document"
        @click="handleDownload"
      >
        导出Excel
      </el-button>
    </div>
    <el-table
      id="data-table"
      v-loading="listLoading"
      :data="tableData.items"
      element-loading-text="Loading..."
      border
      fit
      highlight-current-row
      show-summary
      :summary-method="getSummaries"
    >
      <el-table-column align="center" label="指标" prop="branch" />
      <el-table-column
        v-for="(bank, index) in tableData.indicators"
        :key="bank"
        align="center"
        :label="bank"
      >
        <el-table-column width="59" align="center" :prop="`${index}_0`" label="报警次数" />
        <el-table-column width="59" align="center" :prop="`${index}_1`" label="比例" />
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { getBakeData } from '@/api/bake'
// options components
import FilenameOption from './components/FilenameOption'
import AutoWidthOption from './components/AutoWidthOption'
import BookTypeOption from './components/BookTypeOption'

export default {
  name: 'Bdata',
  components: { FilenameOption, AutoWidthOption, BookTypeOption },
  data() {
    return {
      list: null,
      tableData: {},
      listLoading: true,
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      console.log()
      this.listLoading = true
      getBakeData().then(response => {
        this.tableData = response.data
        this.calculate()
        this.listLoading = false
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        excel.exportExcel({ documentId: '#data-table', filename: this.filename, autoWidth: this.autoWidth, bookType: this.bookType })
        this.downloadLoading = false
      })
    },
    calculate() {
      const temp = this.tableData.items
      // eslint-disable-next-line no-unused-vars
      console.log('tt', temp)
      for (let i = 0; i < temp.length; i++) {
        let sum = 0; let max = -1
        for (const k in temp[i]) {
          const t = parseInt(k.split('_')[0])
          if (t < max) break
          else max = t
          if (k.split('_')[1] === '0') {
            sum += temp[i][k]
          }
        }
        temp[i][max + '_0'] = sum
      }
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        sums[index] = values.reduce((prev, curr) => {
          const value = Number(curr)
          if (!isNaN(value)) {
            return prev + curr
          } else {
            return prev
          }
        }, 0)
        sums[index] = Math.round(parseFloat(sums[index]))
      })
      columns.forEach((column, index) => {
        const ss = column.property.split('_')
        index
        if (ss[1] === '1') {
          data.forEach(dd => {
            dd[ss[0] + '_1'] = (dd[ss[0] + '_0'] / sums[(ss[0]) * 2 + 1] * 100).toFixed(2)
            // dd[ss[1]] = dd[ss[0]/sums[0]]
          })
          // ss[1] = data[0][ss[0]]/sums[0]
        }
        // console.log(column.property, index)
        // console.log(data[index][colIndex])
      })
      return sums
    }
  }
}
</script>
