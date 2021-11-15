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
import btnFloat from "../custom/btnFloat.vue";
export default {
  name: "search",
  props: {},
  data() {
    return {
      valueInput: "",
      historySearch: [],
    };
  },
  components: {
    wiInput,
    btnFloat,
  },
  created() {},
  methods: {
    search() {
      if (
        this.valueInput.trim() &&
        !this.historySearch.includes(this.valueInput)
      ) {
        this.$store.dispatch("sendImages", this.valueInput);
        this.$store.dispatch("updateStateSeller");
        this.historySearch.push(this.valueInput);
        this.$emit("noShowTitle");
      }
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
