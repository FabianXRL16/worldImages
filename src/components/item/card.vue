<template>
  <button @click="watch" class="card">
    <div class="img"></div>
    <div class="seller">
      <i class="fas fa-user"></i>
      <span>Fabian Pacherres sad as dasdddddddddddddddd as d as</span>
    </div>
  </button>
</template>

<script>
export default {
  name: "card",
  props: {},
  components: {},
  methods: {
      watch(){
          console.log("hola")
      }
  },
};
</script>

<style scoped>
.card {
  transform: scale(0.9);
  transition: 0.3s;
  border-radius: 8px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  color: white;
}
.img {
  background-image: url(https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: calc(100% - 50px);
  width: 100%;
  border-radius: 8px 8px 0 0;
}
.card:hover {
  transform: scale(1);
  transition: 0.3s;
}
.seller {
  width: 100%;
  height: 50px;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #21d3b5;
  padding: 0 20px;
  box-sizing: border-box;
}
i {
  font-size: 18px;
}
span {
  font-size: 18px;
  width: calc(100% - 20px);
  font-weight: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
}
@media all and (min-width: 960px) {
  .card {
    height: 350px;
  }
}
@media all and (max-width: 479px) {
  .card {
    height: 170px;
  }
  i {
    font-size: 16px;
  }
  span {
    font-size: 16px;
  }
}
</style>
