<template>
  <header class="header">
    <div class="containerHeader">
      <router-link to="/" class="logo">
        <img src="../../assets/logo.svg" alt="" />
        <span>Fab</span>
      </router-link>
      <avatar />
    </div>
  </header>
</template>

<script>
import avatar from '../global/avatar.vue';
export default {
  name: "wiHeader",
  props: {},
  components:{
    avatar
  }
};
</script>

<style scoped>
header {
  background-color: var(--bg-primary);
  width: 100vw;
  height: 60px;
}
.containerHeader{
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;  
}
a {
  text-decoration: none;
  color: var(--white);
}
.logo {
  display: flex;
  gap: 10px;
  align-items: center;
}
.logo img {
  height: 40px;
}
.logo span {
  font-size: 35px;
  line-height: 35px;
}
@media all and (min-width: 960px) {
  .containerHeader {
    width: 60vw;
  }
}
@media all and (min-width: 768px) and (max-width: 959px) {
  .containerHeader {
    width: 70vw;
  }
}
@media all and (min-width: 480px) and (max-width: 767px) {
  .containerHeader {
    width: 85vw;
  }
}
@media all and (max-width: 479px) {
  .containerHeader {
    width: 90vw;
  }
}
</style>
