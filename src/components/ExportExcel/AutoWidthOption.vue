<template>
  <div style="display:inline-block;">
    <label class="radio-label">自动单元格宽度: </label>
    <el-radio-group v-model="autoWidth">
      <el-radio :label="true" border>
        开启
      </el-radio>
      <el-radio :label="false" border>
        关闭
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    autoWidth: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
