<template>
  <div>
    <van-nav-bar
      class="header_left"
      style="background: #d33a31"
      left-text="手机号登录"
      left-arrow
      @click="back"
    />
    <van-cell-group>
      <van-field
        v-model="value1"
        label="+86"
        left-icon="phone"
        color="#999"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="value2"
        clearable
        left-icon="lock"
        color="#999"
        placeholder="请输入密码"
        type="password"
      />
    </van-cell-group>
    <van-button round type="info" block color="#d33a31" @click="logApi"
      >登录</van-button
    >
  </div>
</template>

<script>
import "../../assets/common.css";
import axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    //回退
    back() {
      this.$router.go(-1);
    },
    async logApi() {
      const result = await axios.get(
        "http://120.55.162.133:3000/login/cellphone",
        {
          params: {
            phone: this.value1,
            password: this.value2,
          },
        }
      );
      console.log(result);
    },
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  beforeDestroy() {},
};
</script> 
<style  scoped>
.van-nav-bar__left >>> .van-nav-bar {
  color: #fff;
}
.van-nav-bar__text {
  color: #fff !important;
}
</style>
