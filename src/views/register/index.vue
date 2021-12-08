<template>
  <transition name="slide" mode="out-in">
    <div class="reg">
      <van-nav-bar
        style="background: #d33a31"
        left-text="手机号注册"
        left-arrow
        @click="$router.back(-1)"
      />
      <van-cell-group>
        <van-field
          v-model="value1"
          label="+86"
          left-icon="phone"
          placeholder="请输入手机号"
        />
        <van-field
          type="password"
          v-model="value2"
          clearable
          left-icon="lock"
          placeholder="设置登录密码不少于6位"
        />
      </van-cell-group>
      <van-button round type="info" color="#d33a31" @click="regApi"
        >下一步</van-button
      >
      <van-divider>其他注册方式</van-divider>
    </div>
  </transition>
</template>

<script>
// import { regApi } from "../../utils/request";
import axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      value1: "", //phone
      value2: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    async regApi() {
      /*  const result = await regApi({
        phone: this.value1,
      }); */
      const result = await axios.get(
        "http://120.55.162.133:3000/captcha/sent",
        {
          params: {
            phone: this.value1,
          },
        }
      );
      console.log(result);
      console.log(this.value1);
      //   if (result) {
      this.$router.push({
        path: "/yzcode",
        query: {
          phone: this.value1,
        },
      });
      //   }
    },
    /*   back() {
      this.$router.go(-1);
    }, */
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  beforeDestroy() {},
};
</script> 
<style>
.reg .van-nav-bar__text,
.reg .van-nav-bar .van-icon {
  color: #fefcfc;
}
.reg .van-icon-phone,
.van-icon-lock {
  color: #999;
}
.reg .van-field__label {
  width: 1.5rem;
  color: #999;
}
.reg .van-button {
  margin: 30px 17px;
  width: 90%;
  height: 34px;
}
.reg .van-field__control {
  caret-color: #d33a31;
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
