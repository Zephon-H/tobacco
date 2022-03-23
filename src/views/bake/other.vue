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
    <el-tabs
      v-model="selectTab"
      tab-position="left"
      style="height: 48rem"
    >
      <el-tab-pane
        v-for="(d, index) in tableData"
        :key="index"
        :label="tabList[index].name"
        :name="index+1+''"
      >
        <ve-table
          :columns="columnList[index]"
          :table-data="d"
          :footer-data="footerData[index]"
        />
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-table
        ref="multipleTable"
        :data="tabList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          align="center"
          type="selection"
          width="55"
        />
        <el-table-column
          prop="name"
          label="表格名称"
        />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="exportExcel">导出</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import FilenameOption from '@/components/ExportExcel/FilenameOption'
import AutoWidthOption from '@/components/ExportExcel/AutoWidthOption'
import BookTypeOption from '@/components/ExportExcel/BookTypeOption'
import { getOtherData } from '@/api/bake'

export default {
  name: 'Other',
  components: { FilenameOption, AutoWidthOption, BookTypeOption },
  data() {
    return {
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx',
      selectTab: '1',
      selectionTabs: [],
      dialogVisible: false,
      columnList: [],
      tabList: [{ 'name': '设备安装统计', 'id': 1 }, { 'name': '产区排序', 'id': 2 },
        { 'name': '烘烤工艺执行率评价', 'id': 3 }, { 'name': '掉温率统计', 'id': 4 },
        { 'name': '报警次数统计', 'id': 5 }, { 'name': '温度报警幅度统计', 'id': 6 },
        { 'name': '烘烤缺水统计', 'id': 7 }],
      tableData: [],
      footerData: []
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
    fetchData() {
      this.listLoading = true
      getOtherData().then(response => {
        console.log(response)
        this.tableData = response.data.tableData
        this.columnList = response.data.columnList
        this.listLoading = false
        this.initFooterData()
      })
    },
    handleSelectionChange(p) {
      this.selectionTabs = p
    },
    handleDownload() {
      this.dialogVisible = true
    },
    exportExcel() {
      this.dialogVisible = false
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        excel.exportMultiExcel({
          documentId: '#table',
          selectionTabs: this.selectionTabs,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    }
  }
}
</script>

<style scoped>
</style>
