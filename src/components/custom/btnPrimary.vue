<template>
  <button @click="action" :class="primary ? 'primary' : 'secondary'">
    <slot name="icon" />
    <slot name="text" />
  </button>
</template>

<script>
export default {
  name: "btnPrimary",
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    action() {
      this.$emit("clickBtn");
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
.primary {
  background-color: var(--bg-primary);
  transition: 0.3s;
}
.primary:hover {
  background-color: var(--bg-primary-dark);
  transition: 0.3s;
}
.secondary {
  background-color: var(--pink);
  transition: 0.3s;
}
.secondary:hover {
  background-color: var(--pink-dark);
  transition: 0.3s;
}
i,
.text {
  color: var(--white);
  font-size: 20px;
}
.text {
  margin-left: 10px;
}
@media all and (max-width: 479px) {
  i,
  .text {
    color: var(--white);
    font-size: 14px;
  }
  .text {
    margin-left: 5px;
  }
}
</style>
