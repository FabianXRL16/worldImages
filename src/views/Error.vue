<template>
  <div class="error">
    <div class="msgContainer">
      <h1 class="noFound">404</h1>
      <div class="msgError">
        <h2>Lo siento!</h2>
        <p>No se encontró la página que busca</p>
      </div>
    </div>
    <router-link to="/" class="back">
      <i class="fas fa-chevron-left"></i>Regresar
    </router-link>
  </div>
</template>

<script>
export default {
  name: "error",
  props: {},
};
</script>

<style scoped>
.error {
  width: 100%;
  height: calc(100vh - 60px);
  color: #21d3b5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.msgContainer {
  display: flex;
  gap: 10px;
}
.msgContainer h1 {
  margin: 0;
  font-size: 220px;
  line-height: 250px;
  font-weight: 500;
}
.msgError {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-left: 2px solid #21d3b5;
  padding-left: 20px;
}
.msgError h2,
.msgError p {
  margin: 0;
}
.msgError h2 {
  font-size: 50px;
  line-height: 50px;
}
.msgError p {
  font-size: 22px;
  line-height: 35px;
  width: 280px;
  text-align: start;
}
.back {
  text-decoration: none;
  color: #21d3b5;
  font-size: 20px;
  transition: 0.3s;
}
.back i {
  margin-right: 10px;
}
.back:hover {
  color: #106e5f;
  transition: 0.3s;
}
@media all and (min-width: 480px) and (max-width: 959px) {
  .error {
    gap: 50px;
  }
  .msgContainer h1 {
    font-size: 100px;
    line-height: 110px;
  }
  .msgError {
    padding: 0;
    gap: 10px;
    padding-left: 15px;
  }
  .msgError h2 {
    font-size: 35px;
    line-height: 35px;
  }
  .msgError p {
    font-size: 16px;
    line-height: 25px;
    width: 240px;
  }
}
@media all and (max-width: 479px) {
  .msgContainer {
    display: flex;
    flex-direction: column;
  }
  .msgContainer h1 {
    font-size: 100px;
    line-height: 110px;
  }
  .msgError {
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    gap: 20px;
  }
  .msgError h2 {
    font-size: 35px;
    line-height: 35px;
  }
  .msgError p {
    text-align: center;
    font-size: 16px;
    line-height: 25px;
  }
}
</style>
