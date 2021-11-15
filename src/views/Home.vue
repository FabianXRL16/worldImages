<template>
  <div class="home">
    <div class="container" ref="container">
      <h1 :class="showResults ? 'empyTitle' : 'title'" ref="msg">A buscar!</h1>
      <search @noShowTitle="hideTitle" />
      <cards :results="showResults" />
    </div>
  </div>
</template>

<script>
import search from "../components/container/search.vue";
import cards from "../components/container/cards.vue";
export default {
  name: "Home",
  components: {
    search,
    cards,
  },
  data() {
    return {
      showResults: false,
    };
  },
  methods: {
    hideTitle() {
      this.$refs.container.style.placeContent = "flex-start";
      this.showResults = true;
    },
  },
};
</script>

<style scoped>
.home {
  background-color: var(--bg-primary-light);
  width: 100%;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  display: grid;
  place-content: center;
}
.container {
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.title {
  margin: -50px 0 0;
  font-size: 60px;
  line-height: 60px;
}
.empyTitle {
  display: none;
}
@media all and (min-width: 960px) {
  .container {
    width: 60vw;
    gap: 50px;
  }
  .title {
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
  .title {
    font-size: 50px;
    line-height: 50px;
  }
}
</style>
