<template>
  <div id="app">
    <Header />
    <Breadcrumb />
    <el-main><router-view /></el-main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import Breadcrumb from '@/components/layouts/Breadcrumb'
import Footer from '@/components/layouts/Footer'

export default {
  components: {
    Header,
    Breadcrumb,
    Footer
  }
}
</script>

<style lang="less" scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
}

body {
  // margin: 0 !important;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  text-align: left;
  background-color: #f5f7fa;
}

.el-main {
  padding-top: 0;
  padding-bottom: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #d1d1d2 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 16px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #d1d1d2;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>
