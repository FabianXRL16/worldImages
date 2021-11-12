<template>
  <div id="app">
    <wiHeader />
    <router-view/>
    <modal-image v-if="$store.state.modal" />
  </div>
</template>

<script>
import wiHeader from './components/custom/wiHeader.vue';
import modalImage from './components/container/modalContainer.vue';
export default {
  name: "App",
  components:{
    wiHeader, modalImage
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;600&display=swap');
body{
  margin: 0;
  width: 100%;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
}
:root{
  --bg-primary: #21d3b5;
  --bg-primary-dark: #106e5f;
  --bg-primary-light: #21d3b565;
}
#app {
  text-align: center;
  color: #ffffff;
  position: relative;
}
</style>
