<template>
  <div class="contentModalImage">
    <div
      class="image"
      :style="`background-image:url(${
        $store.state._images[$store.state._item.link]
      });`"
    ></div>
    <div class="avatar"></div>
    <div class="description">
      <h1>{{ $store.state._item.name }}</h1>
      <span>{{ $store.state._item.score }} <i class="fas fa-star"></i></span>
      <div class="plusThreePoints" ref="plusPoint">
        <span>+3 <i class="fas fa-star"></i></span>
      </div>
      <div class="actions">
        <btn-primary @clickBtn="addLike" :disabled="btnDisabled">
          <template v-slot:icon>
            <i class="fas fa-heart"></i>
          </template>
          <template v-slot:text>
            <span class="text">Me gusta</span>
          </template>
        </btn-primary>
        <btn-primary
          :primary="false"
          @clickBtn="closedModal"
          :disabled="btnDisabled"
        >
          <template v-slot:icon>
            <i class="fas fa-chevron-left"></i>
          </template>
          <template v-slot:text>
            <span class="text">Regresar</span>
          </template>
        </btn-primary>
      </div>
    </div>
  </div>
</template>

<script>
import btnPrimary from "../custom/btnPrimary.vue";
export default {
  name: "modalImage",
  components: {
    btnPrimary,
  },
  data() {
    return {
      btnDisabled: false,
    };
  },
  methods: {
    addLike() {
      this.animationPoint();

      setTimeout(() => {
        this.closedModal();
      }, 500);
    },
    closedModal() {
      setTimeout(() => {
        if (this.$store.state._item.score >= 20) {
          this.$store.dispatch("showModalImage");
        } else {
          this.$store.dispatch("showModal");
        }
      }, 250);
    },
    animationPoint() {
      this.$store.dispatch("addScoreSeller", this.$store.state._item.id);
      this.$store.dispatch("addCountUser", this.$store.state._item.id);
      this.$refs.plusPoint.style.transform = "translateY(-120px)";
      this.$refs.plusPoint.style.transition = "1s";
      this.btnDisabled = true;
    },
  },
};
</script>

<style scoped>
.contentModalImage {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 400px;
}
.avatar {
  background-image: url("../../assets/avatar.svg");
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
  border: 8px solid var(--bg-primary);
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
  color: var(--yellow);
  margin: 2px 0 10px 0;
  font-size: 14px;
}
span i {
  font-size: 13px;
}
.actions {
  display: flex;
  gap: 20px;
  position: relative;
}
.plusThreePoints {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding-right: 145px;
  transform: translateY(12px);
  transition: 0.3s;
}
.plusThreePoints span,
.plusThreePoints span i {
  font-size: 45px;
  color: var(--yellow);
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 1);
}
@media all and (max-width: 479px) {
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
  .plusThreePoints {
    transform: translate(10px, 10px);
  }
  .plusThreePoints span,
  .plusThreePoints span i {
    font-size: 35px;
  }
}
</style>
