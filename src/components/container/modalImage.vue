<template>
  <div class="containerModalImage">
    <div class="contentModal">
      <div class="image"></div>
      <div class="avatar"></div>
      <div class="description">
        <h1>Fabian Pacherres</h1>
        <span>12 <i class="fas fa-heart"></i></span>
        <div class="actions">
          <btn-primary :like="true" @clickBtn="addLike">
            <template v-slot:icon>
              <i class="fas fa-heart"></i>
            </template>
            <template v-slot:text>
              <span class="text">Me gusta</span>
            </template>
          </btn-primary>
          <btn-primary :like="false">
            <template v-slot:icon>
              <i class="fas fa-times"></i>
            </template>
            <template v-slot:text>
              <span class="text">Cancelar</span>
            </template>
          </btn-primary>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btnPrimary from "../global/btnPrimary.vue";
export default {
  name: "modalImage",
  components: {
    btnPrimary,
  },
  methods: {
    addLike() {
      console.log("hola");
      let canvaModal = document.querySelector(".containerModalImage");
      let modal = document.querySelector(".contentModal");
      setTimeout(() => {
        canvaModal.style.background = "transparent";
        modal.style.transform = "scale(0)";
        modal.style.transition = ".3s";
        setTimeout(() => {
          this.$store.dispatch("showModalImage");
        }, 250);
      }, 1000);
    },
  },
};
</script>

<style scoped>
.containerModalImage {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.5);
  backdrop-filter: blur(8px);
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transition: 0.3s;
}
.contentModal {
  width: 400px;
  height: 600px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #21d3b5;
  box-shadow: rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.image {
  background-image: url(https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 400px;
}
.avatar {
  background-image: url(https://i.pinimg.com/originals/e4/01/2c/e4012c936590b56462a9c6ea8d4fd1fc.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  bottom: 155px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 8px solid #21d3b5;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
}
.description {
  width: 100%;
  height: 200px;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 30px;
}
h1 {
  font-size: 30px;
  line-height: 36px;
  width: 100%;
  margin: 0;
}
span {
  color: #485250;
  margin: 2px 0 10px 0;
  font-size: 14px;
}
span i {
  font-size: 13px;
}
.actions {
  display: flex;
  gap: 20px;
}
@media all and (max-width: 479px) {
  .contentModal {
    width: 85%;
    height: 80%;
  }
  .image {
    width: 100%;
    height: 65%;
  }
  .description {
    width: 100%;
    height: 35%;
  }
  h1 {
    font-size: 25px;
    line-height: 30px;
  }
  .actions {
    gap: 10px;
  }
  .avatar {
    bottom: 150px;
  }
}
</style>
