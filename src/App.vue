<template>
  <div id="app">
    <wiHeader />
    <router-view />
    <modal-image v-if="$store.state.modal" />
    <modal-msg />
  </div>
</template>

<script>
import wiHeader from "./components/custom/wiHeader.vue";
import modalImage from "./components/container/modalContainer.vue";
import modalMsg from "./components/container/modalMsg.vue";
export default {
  name: "App",
  components: {
    wiHeader,
    modalMsg,
    modalImage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;600&display=swap");
body {
  margin: 0;
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
}
:root {
  --bg-primary: #21d3b5;
  --bg-primary-dark: #106e5f;
  --bg-primary-light: #21d3b565;
  --bg-primary-extralight: #21d3b5af;

  --white: #fff;
  --gray: #485250;
  --yellow: #ff9800;

  --pink: #f6264d;
  --pink-dark: #be0e2e;
}
#app {
  text-align: center;
  color: var(--white);
  position: relative;
}
</style>
