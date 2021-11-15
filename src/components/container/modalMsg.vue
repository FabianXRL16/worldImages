<template>
  <div class="modalMsg">
    <h1>Lo lamento, ya voto por esta imagen</h1>
  </div>
</template>

<script>
export default {
  name: "modalMsg",
  props: {},
  methods: {},
};
</script>

<style scoped>
.modalMsg {
  background-color: var(--bg-primary);
  max-width: 500px;
  width: 80%;
  height: auto;
  padding: 40px 10px;
  box-sizing: border-box;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transform: translateY(-150px);
  transition: 0.3s;
}
.modalMsg h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 0;
}
@media all and (min-width: 960px) {
  .modalMsg h1 {
  font-size: 22px;
  line-height: 30px;
}
}
</style>
