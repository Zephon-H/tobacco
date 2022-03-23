<template>
  <el-form
    ref="pwd"
    :rules="rules"
    :model="pwd"
    label-position="right"
    label-width="100px"
    style="margin:0 auto;max-width: 460px"
  >
    <el-form-item label="原始密码" prop="oripwd">
      <el-input v-model="pwd.oripwd" show-password/>
    </el-form-item>
    <el-form-item label="新密码" prop="newpwd">
      <el-input v-model="pwd.newpwd" show-password/>
    </el-form-item>
    <el-form-item label="重复密码" prop="conpwd">
      <el-input v-model="pwd.conpwd" show-password/>
    </el-form-item>
    <div style="display: flex">
      <el-button style="width: 150px; margin-left: 22%" type="primary" @click="changePwd">修改</el-button>
      <el-button style="width: 150px; margin-left: 5%" type="normal" @click="clear">清空</el-button>
    </div>
  </el-form>
</template>

<script>
import {changeUserInfo, changeUserPwd} from '@/api/user'

export default {
  name: 'Password',
  data() {
    var checkPwd = (rule, value, callback) => {
      if (this.pwd.newpwd !== value) {
        callback(new Error('请确保与新密码一致'))
      } else {
        callback()
      }
    }
    return {
      pwd: {
        oripwd: '',
        newpwd: '',
        conpwd: ''
      },
      rules: {
        oripwd: [
          {required: true, message: '请输入原密码', trigger: 'blur'},
          {min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur'}
        ],
        newpwd: [
          {required: true, message: '请输入新密码', trigger: 'blur'},
          {min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur'}
        ],
        conpwd: [
          {validator: checkPwd, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    clear() {
      this.pwd = {}
    },
    changePwd() {
      this.$refs['pwd'].validate((v) => {
        if (v) {
          changeUserPwd(this, this.$store.state.user.user_id, this.pwd).then(res => {
            console.log(res)
            if (res.code === 20000) {
              this.$message({message: '修改成功', type: 'success'})
            }
          }).catch(error => {
            this.$message.error('修改失败')
            console.log(error)
          })
        }
        if (!v) {
          this.$message.error('格式存在问题')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
