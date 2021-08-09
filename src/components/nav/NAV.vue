<template>
  <div>
    <van-search
      v-model="value"
      show-action
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #left>
        <van-icon class="search_l" name="wap-nav" size="1.5rem" />
      </template>
      <template #action>
        <div @click="onSearch">右右</div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      value: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSearch() {
      console.log(111);
    },
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  beforeDestroy() {},
};
</script> 
<style scoped>
.search_l {
  margin-right: 12px;
}
</style>
