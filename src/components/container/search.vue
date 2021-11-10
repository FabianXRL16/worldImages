<template>
  <div class="search">
    <input-search @hideMsg="hideText" />
    <btn-base @hideMsg="hideText">
      <template v-slot:icon>
        <i class="fas fa-search"></i>
      </template>
    </btn-base>
  </div>
</template>

<script>
import inputSearch from "../global/inputSearch.vue";
import btnBase from "../global/btnBase.vue";
export default {
  name: "search",
  props: {},
  components: {
    inputSearch,
    btnBase,
  },
  methods:{
      hideText(){
          this.$emit('noShowTitle')
      }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 50px;
  position: relative;
}
</style>
