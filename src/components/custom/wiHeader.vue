<template>
  <header class="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </header>
</template>

<script>
export default {
  name: "wiHeader",
  props: {},
};
</script>

<style scoped>
header {
  background-color: #21d3b5;
  width: 100%;
  height: 60px;
}
</style>
