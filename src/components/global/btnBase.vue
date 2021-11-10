<template>
  <button @click="search">
    <slot name="text" />
    <slot name="icon" />
  </button>
</template>

<script>
export default {
  name: "btnBase",
  props: {},
  data(){
      return{

      }
  },
  methods:{
      search(){
          this.$emit('hideMsg')
      }
  }
};
</script>

<style scoped>
button {
  background: #21d3b5;
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
  transition: .3s;
}
button:hover{
    background-color: #106e5f;
    transition: .3s;
}
i {
  color: white;
  font-size: 20px;
}
</style>
