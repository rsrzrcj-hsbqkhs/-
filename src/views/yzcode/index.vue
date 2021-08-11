<template>
  <transition name="slide" mode="out-in">
    <div class="reg">
      <van-nav-bar
        style="color: #fefcfc; background: #d33a31"
        left-text="手机号验证"
        left-arrow
        @click="$router.back(-1)"
      />
      <van-cell-group>
        <p style="margin-left: 16px; font-size: 14px; color: #646666">
          你会收到一条待验证码的短信，请输入验证码:
        </p>
        <van-field
          type="password"
          v-model="value2"
          clearable
          left-icon="phone"
          placeholder="请输入验证码"
        />
      </van-cell-group>
      <van-button round type="info" block color="#d33a31" @click="regYzApi"
        >下一步</van-button
      >
    </div>
  </transition>
</template>

<script>
import axios from "axios";
// import { Dialog } from "vant";

export default {
  props: {},
  components: {},
  data() {
    return {
      //手机上收到的验证码
      value2: "",
      phone: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    async regYzApi() {
      this.phone = this.$route.query.phone;
      const result = await axios.get(
        "http://120.55.162.133:3000/captcha/verify",
        {
          params: {
            phone: this.phone,
            captcha: this.value2,
          },
        }
      );
      console.log(result);
      if (result.code == 200 && result.data == "true") {
        this.$router.push("/zhuce");
      }
      // Dialog({ message: "提示" });
    },
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  beforeDestroy() {},
};
</script> 
<style>
.reg .van-nav-bar__text,
.van-nav-bar .van-icon {
  color: #fefcfc;
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
