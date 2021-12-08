<template>
  <transition name="slide" mode="out-in">
    <div class="reg">
      <van-nav-bar
        style="background: #d33a31"
        left-text="手机号登录"
        left-arrow
        @click="$router.back(-1)"
      />
      <van-cell-group>
        <van-field
          v-model="value1"
          label="+86"
          left-icon="phone"
          placeholder="请输入手机号1"
        />
        <van-field
          v-model="value2"
          clearable
          left-icon="lock"
          placeholder="请输入密码"
          type="password"
        />
      </van-cell-group>
      <van-button round type="info" color="#d33a31" @click="logApi"
        >登录</van-button
      >
    </div>
  </transition>
</template>

<script>
// import "../../assets/common.css";
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
    /*  back() {
      this.$router.go(-1);
    }, */
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
<style>
.reg .van-nav-bar__text {
  color: #fefcfc;
}
.reg .van-button {
  margin: 30px 17px;
  width: 90%;
  height: 34px;
}
/* 过渡 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s ease;
}
.slide-enter-to {
  position: absolute;
  right: 0;
}
.slide-enter-from {
  position: absolute;
  right: -100%;
}
.slide-leave-to {
  position: absolute;
  left: -100%;
}
.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
