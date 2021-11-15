<template>
  <button @click="watch" class="card">
    <div
      class="img"
      :style="`background-image:url(${$store.state._images[data.id]});`"
    ></div>
    <div class="seller">
      <i class="fas fa-user"></i>
      <span>{{ data.name }}</span>
    </div>
    <div class="countCanvas"></div>
    <div class="countContainer">
      <div class="count">
        <i class="fas fa-star"></i>
        <label class="score">{{ data.score }}</label>
        <div class="rule" :style="styles"></div>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: "card",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    width() {
      const BAR_WIDTH = 80;
      const MAX_SCORE = 20;
      return (BAR_WIDTH / MAX_SCORE) * this.data.score;
    },
    styles() {
      return {
        width: `${this.width}px`,
      };
    },
  },
  methods: {
    watch() {
      if (this.data.state) {
        let $modalMsg = document.querySelector(".modalMsg");
        $modalMsg.style.transform = `${
          screen.width > 485 ? "translateY(100px)" : "translateY(80px)"
        }`;
        $modalMsg.style.transition = ".3s";
        setTimeout(function () {
          $modalMsg.style.transform = "translateY(-150px)";
          $modalMsg.style.transition = ".3s";
        }, 1500);
      } else {
        this.$store.dispatch("showModal");
      }
      this.$store.dispatch(
        "sendDataItem",
        this.data.identification,
        this.index
      );
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
.card:hover .seller {
  background-color: #106e5f;
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
  transition: 0.3s;
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
  width: 0;
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
  font-weight: 600;
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
