<template>
  <div>
    <van-nav-bar
      style="color: #fefcfc; background: #d33a31"
      left-text="手机号验证"
      left-arrow
    />
    <van-cell-group>
      <p>你会收到一条待验证码的短信，请输入验证码:</p>

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
</template>

<script>
// import axios from "axios";
import { Dialog } from "vant";

export default {
  props: {},
  components: {},
  data() {
    return {
      //手机上收到的验证码
      value2: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    regYzApi() {
      /*  const result = axios.get("http://120.55.162.133:3000/captcha/verify", {
        params: {
          // phone:,
          captcha: this.value2,
        },
      });
      console.log(result); */
      Dialog({ message: "提示" });
    },
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  beforeDestroy() {},
};
</script> 
<style scoped>
div .van-nav-bar .van-icon {
  color: #fefcfc;
}
</style>
