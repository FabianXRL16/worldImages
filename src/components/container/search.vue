<template>
  <div class="search">
    <wi-input @actionInput="search" v-model="valueInput" />
    <btn-float @actionInput="search">
      <template v-slot:icon>
        <i class="fas fa-search"></i>
      </template>
    </btn-float>
  </div>
</template>

<script>
import wiInput from "../custom/wiInput.vue";
import btnFloat from "../global/btnFloat.vue";
export default {
  name: "search",
  props: {},
  data() {
    return {
      valueInput: "",
    };
  },
  components: {
    wiInput,
    btnFloat,
  },
  methods: {
    search() {
      this.$emit("noShowTitle");
      this.valueInput = "";
    },
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 50px;
  position: relative;
}
</style>
