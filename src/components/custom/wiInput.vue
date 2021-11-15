<template>
  <input
    type="text"
    v-model="inputModel"
    @keyup.enter="keyUpCustom"
    placeholder="To Search image!"
  />
</template>

<script>
export default {
  name: "inputSearch",
  props: {
    value: {
      type: String,
    },
  },
  computed: {
    inputModel: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    keyUpCustom() {
      this.$emit("actionInput");
    },
  },
};
</script>

<style scoped>
input {
  background-color: var(--white);
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  float: left;
  padding: 0 55px 0 20px;
  box-sizing: border-box;
  font-size: 20px;
  color: var(--bg-primary);
}
input::placeholder {
  color: var(--bg-primary-extralight);
}
</style>
