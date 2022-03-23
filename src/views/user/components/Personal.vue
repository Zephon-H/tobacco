<template>

  <div>
    <div class="row" >
      <img :src="user.avatar" alt="用户头像" class="user-img">
<!--      <div class="col" style="margin:0 0 0 2rem;">-->
<!--        <div class="user-nname" style="width: 13rem">{{ user.nname }}</div>-->
<!--      </div>-->
      <div class="row" style="margin-top: 2rem; margin-left: 5rem">
        <div class="user-info-container col" style="width: 10rem;">
          <div class="user-info-title">用户编号：</div>
          <div class="user-info-text">{{ user.user_id }}</div>
        </div>
        <div class="user-info-container col" style="width: 10rem">
          <div class="user-info-title">用户昵称：</div>
          <div class="user-info-text">{{ user.name }}</div>
        </div>
<!--        <div class="user-info-container col" style="width: 6rem">-->
<!--          <div class="user-info-title">性别：</div>-->
<!--          <div class="user-info-text">{{ user.gender }}</div>-->
<!--        </div>-->
        <div class="user-info-container col" style="width: 6rem">
          <div class="user-info-title">手机号：</div>
          <div class="user-info-text">{{ user.phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  data() {
    return {
      user: this.$store.state.user
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}

.col {
  display: flex;
  flex-direction: column;
}

.user-img {
  height: 5.81rem;
  width: 5.81rem;
  border-radius: 100%;
}

.user-nname {
  font-size: 1.3rem;
  color: #43425D;
  margin-top: 2rem;
}

.user-info-container {
  margin-left: 3.86rem;
}

.user-info-title {
  color: #4D4F5C;
  font-size: 1rem;
  font-weight: bold;
}

.user-info-text {
  color: #4D4F5C;
  font-size: 0.87rem;
  margin-top: 0.6rem;
}

.user-top-title {
  font-size: 1.89rem;
  color: #43425D;
  margin-bottom: 1.82rem;
}
</style>
