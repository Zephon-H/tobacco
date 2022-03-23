<!--
  文件描述：
  创建时间：2022/3/23 13:01
  创建人：Zephon
-->
<template>
  <div class="">
    <ve-table :columns="columns" :table-data="tableData" />
  </div>
</template>

<script>
// 例如：import uploadFile from '@/components/uploadFile/uploadFile'

export default {
  name: 'MyTable',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    value: {
      type: Array
    }
  },
  data() {
    // 这里存放数据
    return {

      tableData: [
        {
          name: 'John',
          date: '1900-05-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Shanghai'
        },
        {
          name: 'Dickerson',
          date: '1910-06-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Beijing'
        },
        {
          name: 'Larsen',
          date: '2000-07-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Chongqing'
        },
        {
          name: 'Geneva',
          date: '2010-08-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Xiamen'
        },
        {
          name: 'Jami',
          date: '2020-09-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Shenzhen'
        }
      ]
    }
  },
  // 监听属性 类似于data概念
  computed: {
    // tableData: {
    //   get() {
    //     return this.value
    //   },
    //   set(val) {
    //     this.$emit('input', val)
    //   }
    // }
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(this.tableData)
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  // 方法集合
  methods: {}
}
</script>

<style scoped lang="scss">
//@import url(); 引入公共css类
</style>
