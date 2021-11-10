<template>
  <div class="home">
    <div class="container">
      <h1 class="msg">A buscar!</h1>
      <search @noShowTitle='hideTitle' />
      <images />
    </div>
  </div>
</template>

<script>
import search from "../components/container/search.vue";
import images from "../components/container/cards.vue";
export default {
  name: "Home",
  components: {
    search, images
  },
  methods:{
    hideTitle(){
      let $title = document.querySelector('.msg');
      let $container = document.querySelector('.container');
      let $containerImages = document.querySelector('.containerImages');
      $title.style.display = 'none';
      $container.style.justifyContent = 'flex-start'
      $containerImages.style.display = 'grid'
    }
  }
};
</script>

<style scoped>
.home {
  background-color: #21d3b565;
  width: 100%;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  display: grid;
  place-content: center;
}
.container {
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.msg {
  margin: -50px 0 0;
  font-size: 60px;
  line-height: 60px;
}
@media all and (min-width: 960px) {
  .container {
    width: 60vw;
    gap: 50px;
  }
  .msg {
    margin: -50px 0 0;
    font-size: 75px;
  }
}
@media all and (min-width: 768px) and (max-width: 959px) {
  .container {
    width: 70vw;
  }
}
@media all and (min-width: 480px) and (max-width: 767px) {
  .container {
    width: 85vw;
  }
}
@media all and (max-width: 479px) {
  .container {
    width: 90vw;
  }
  .msg {
    font-size: 50px;
    line-height: 50px;
  }
}
</style>
