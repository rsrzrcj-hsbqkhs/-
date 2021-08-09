<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer>
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
