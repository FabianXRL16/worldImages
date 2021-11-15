<template>
  <button @click="search">
    <slot name="text" />
    <slot name="icon" />
  </button>
</template>

<script>
export default {
  name: "btnFloat",
  props: {},
  data() {
    return {};
  },
  methods: {
    search() {
      this.$emit("actionInput");
    },
  },
};
</script>

<style scoped>
button {
  background: var(--bg-primary);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  margin: 2.5px;
  right: 0;
  z-index: 1;
  overflow: auto;
  transition: 0.3s;
}
button:hover {
  background-color: var(--bg-primary-dark);
  transition: 0.3s;
}
i {
  color: var(--white);
  font-size: 20px;
}
</style>
