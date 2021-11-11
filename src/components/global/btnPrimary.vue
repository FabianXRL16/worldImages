<template>
  <button
    @click="action"
    :style="`${
      like ? 'background-color: #21d3b5;' : 'background-color: #f6264d;'
    }`"
  >
    <slot name="icon" />
    <slot name="text" />
  </button>
</template>

<script>
export default {
  name: "btnPrimary",
  props: {
    like: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    action() {
      this.like ? this.$emit("clickBtn") : this.closedModal();
    },
    closedModal() {
      let canvaModal = document.querySelector(".containerModal");
      let modal = document.querySelector(".containerM");
      setTimeout(() => {
        canvaModal.style.background = "transparent";
        modal.style.transform = "scale(0)";
        modal.style.transition = ".3s";
        setTimeout(() => {
          this.$store.dispatch("showModalImage");
        }, 250);
      }, 300);
    },
  },
};
</script>

<style scoped>
button {
  width: auto;
  height: 45px;
  border-radius: 22.5px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0 20px;
}
i,
.text {
  color: white;
  font-size: 20px;
}
.text {
  margin-left: 10px;
}
@media all and (max-width: 479px) {
  i,
  .text {
    color: white;
    font-size: 14px;
  }
  .text {
    margin-left: 5px;
  }
}
</style>
