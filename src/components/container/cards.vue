<template>
  <div class="containerImages">
    <card
      v-for="item in $store.state._sellers"
      :data="item"
      :key="item.identification"
    />
  </div>
</template>

<script>
import "../item/card.vue";
import card from "../item/card.vue";
export default {
  name: "cards",
  props: {},
  components: {
    card,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getSellersAlegra");
  },
  methods: {},
};
</script>

<style scoped>
.containerImages {
  width: 100%;
  min-height: calc(100vh - 270px);
  display: none;
  overflow-y: scroll;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.containerImages::-webkit-scrollbar {
  width: 0;
}
@media all and (min-width: 960px) {
  .containerImages {
    min-height: calc(100vh - 300px);
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    display: none;
  }
}
@media all and (max-width: 479px) {
  .containerImages {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    display: none;
  }
}
</style>
