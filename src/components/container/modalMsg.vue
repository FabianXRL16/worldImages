<template>
  <div class="modalMsg">
    <div class="contentMsg">
      <h1 v-if="$store.state.modalText">Lo lamento, ya voto por esta imagen</h1>
      <h1 v-else>Lo lamento, ya busco esa palabra</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalMsg",
  props: {},
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
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transform: translateY(-150px);
  animation: 2s showMsg 0.5s ease-in-out;
}
@keyframes showMsg {
  0%,
  100% {
    transform: translateY(-150px);
  }
  20%,
  80% {
    transform: translateY(100px);
  }
}
@media all and (max-width: 479px) {
  @keyframes showMsg {
    0%,
    100% {
      transform: translateY(-150px);
    }
    20%,
    80% {
      transform: translateY(85px);
    }
  }
}
.contentMsg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.modalMsg .contentMsg h1 {
  font-size: 20px;
  line-height: 30px;
  margin: 0;
}
@media all and (min-width: 960px) {
  .modalMsg .contentMsg h1 {
    font-size: 22px;
    line-height: 30px;
  }
}
</style>
