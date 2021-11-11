<template>
  <button @click="watch" class="card">
    <div class="img"></div>
    <div class="seller">
      <i class="fas fa-user"></i>
      <span>Fabian Pacherres sad as dasdddddddddddddddd as d as</span>
    </div>
    <div class="countCanvas"></div>
    <div class="countContainer">
      <div class="count">
        <i class="fas fa-star"></i>
        <label class="score">0</label>
        <div class="rule"></div>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: "card",
  props: {},
  components: {},
  methods: {
    watch() {
      let points = document.querySelector(".rule");
      let score = document.querySelector(".score");
      if (parseInt(score.innerHTML) <= 18) {
        points.style.width = `${points.offsetWidth + 9.833}px`;
        score.innerHTML =
          score.innerHTML === "18" ? "20" : parseInt(score.innerHTML) + 3;
      }
    },
  },
};
</script>

<style scoped>
.card {
  transform: scale(0.95);
  transition: transform 0.3s linear;
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
  position: relative;
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
  transform: scale(0.98);
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
.countCanvas {
  position: absolute;
  width: 100px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  bottom: 60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 10px;
  backdrop-filter: blur(4px);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  pointer-events: none;
}
.countContainer {
  background-color: #485250;
  width: 80px;
  height: 12px;
  border-radius: 8px;
  position: absolute;
  bottom: 64px;
  left: 0;
  right: 0;
  margin: 0 auto;
  pointer-events: none;
}
.count {
  width: 80px;
  height: 12px;
  border-radius: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: relative;
  overflow: hidden;
}
.rule {
  height: 12px;
  width: 12px;
  border-radius: 6px;
  position: absolute;
  left: 0;
  background: #ff9800;
  z-index: 0;
}
.count i,
.count label {
  font-size: 12px;
  line-height: 12px;
  z-index: 1;
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
