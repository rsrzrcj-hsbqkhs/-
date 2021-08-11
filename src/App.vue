<template>
  <div id="app">
    <Nav v-show="$route.meta.navShow"></Nav>
    <!-- <Nav></Nav> -->

    <router-view> </router-view>
    <!-- <Footer></Footer> -->
    <Footer v-show="$route.meta.footShow"></Footer>
  </div>
</template>

<script>
import Nav from "./components/nav/NAV.vue";
import Footer from "./components/footer/Footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped>
</style>
