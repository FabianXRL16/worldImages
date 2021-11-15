<template>
  <div :class="results ? 'containerImages' : 'containerEmpy'">
    <card
      v-for="(item, i) in $store.state._sellers"
      :data="item"
      :i="i"
      :key="item.identification"
    />
  </div>
</template>

<script>
import card from "../item/card.vue";
export default {
  name: "cards",
  props: {
    results: {
      type: Boolean,
      default: false,
    },
  },
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
.containerEmpy {
  display: none;
}
.containerImages {
  width: 100%;
  min-height: calc(100vh - 270px);
  display: grid;
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
  }
}
@media all and (max-width: 479px) {
  .containerImages {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>
