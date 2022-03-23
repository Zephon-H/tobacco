<template>
  <div>
    <div style="width: 90%;margin: 0 auto;background: white">
      <div class="user-all">
        <Personal />
      </div>
      <el-tabs style="border-top: none;" type="border-card">
        <el-tab-pane label="修改信息">
          <UserManagement />
        </el-tab-pane>
        <el-tab-pane label="修改密码">
          <Password />
        </el-tab-pane>
      </el-tabs>
      <!--        <Personal1/>-->
      <!--&lt;!&ndash;        <Manage v-if="this.jurisdiction==0" />&ndash;&gt;-->
      <!--        <Pwd/>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import UserManagement from './components/UserManagement'
import Personal from './components/Personal'
import Password from './components/Password'

export default {
  name: 'Index',
  components: {
    Password,
    UserManagement,
    // Manage,
    Personal
    // Pwd
  },
  data() {
    return {
      // jurisdiction:JSON.parse(localStorage.getItem('bdi_iot_user')).jurisdiction
    }
  }
}
</script>

<style scoped>
.user-all {
  padding: 1rem 3rem 1rem 3rem;
}
</style>
