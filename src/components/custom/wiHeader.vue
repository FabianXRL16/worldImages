<template>
  <header class="header">
    <router-link to="/" class="logo">
      <img src="../../assets/logo.svg" alt="">
      <span>Fab</span>
    </router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/admin">Error</router-link>
  </header>
</template>

<script>
export default {
  name: "wiHeader",
  props: {},
};
</script>

<style scoped>
header {
  background-color: #21d3b5;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: #fff;
}
.logo{
  display: flex;
  gap: 10px;
  align-items: center;
}
.logo img{
  height: 40px;
}
.logo span{
  font-size: 35px;
  line-height: 35px;
}
</style>
