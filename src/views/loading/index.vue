<template>
  <transition name="fade" mode="in-out">
    <div class="reg_loading">
      <img src="../../../public/img/logo.png" alt="" />
      <van-button plain round block type="info" color="#e20000" @click="goLog"
        >手机号登录</van-button
      >
      <van-button plain round type="info" block color="#e20000" @click="goReg"
        >注册111</van-button
      >
      <van-divider>其他登录方式</van-divider>
    </div>
  </transition>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    goLog() {
      this.$router.push("/login");
    },
    goReg() {
      this.$router.push("/register");
    },
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  beforeDestroy() {},
};
</script> 
<style  scoped>
.reg_loading img {
  display: flex;
  /* justify-content: center; */
  margin: 60px auto;
  width: 20%;
}
.reg_loading .van-button {
  margin: 20px 27px;
  width: 85%;
  height: 34px;
}
/* 过渡 */

.fade-enter-actifadee,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
