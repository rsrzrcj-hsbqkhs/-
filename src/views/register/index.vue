<template>
  <div>
    <van-nav-bar
      style="color: #fefcfc; background: #d33a31"
      left-text="手机号注册"
      left-arrow
      @click="back"
    />
    <van-cell-group>
      <van-field
        v-model="value1"
        label="+86"
        left-icon="smile-o"
        placeholder="请输入手机号"
      />
      <van-field
        type="password"
        v-model="value2"
        clearable
        left-icon="music-o"
        placeholder="设置登录密码不少于6位"
      />
    </van-cell-group>
    <van-button round type="info" block color="#d33a31" @click="regApi"
      >下一步</van-button
    >
    <van-divider>其他注册方式</van-divider>
  </div>
</template>

<script>
// import { regApi } from "../../utils/request";
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
      //   if (result) {
      this.$router.push("/register/yzcode");
      //   }
    },
    back() {
      this.$router.go(-1);
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
