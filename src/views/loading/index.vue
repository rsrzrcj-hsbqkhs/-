<template>
  <div>
    <van-button round type="info" block @click="goLog">手机号登录</van-button>
    <van-button round type="info" block @click="goReg">注册</van-button>
    <van-divider>文字</van-divider>
  </div>
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
<style scoped>
</style>
