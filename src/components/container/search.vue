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
      let that = this
      if (
        this.valueInput.trim() &&
        !this.historySearch.includes(this.valueInput.toLowerCase())
      ) {
        this.$store.dispatch("sendImages", this.valueInput);
        this.$store.dispatch("updateStateSeller");
        this.historySearch.push(this.valueInput.toLowerCase());
        this.$emit("noShowTitle");
      }else{
        that.$store?.dispatch("showModalMsg");
        that.$store?.dispatch("showModalText");
        setTimeout(function () {
          that.$store?.dispatch("showModalText");
          that.$store?.dispatch("showModalMsg");
        }, 2500);
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
