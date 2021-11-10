<template>
    <input type="text" @keyup.13="searchEnter" placeholder="To Search image!">
</template>

<script>
export default {
  name: "inputSearch",
  props: {},
  methods:{
      searchEnter(){
          this.$emit('hideMsg')
      }
  }
};
</script>

<style scoped>
input {
  background-color: white;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  float: left;
  padding: 0 55px 0 20px;
  box-sizing: border-box;
  font-size: 20px;
  color: #21d3b5;
}
input::placeholder{
    color: #21d3b5af;
}
</style>