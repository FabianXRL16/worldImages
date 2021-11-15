<template>
  <div class="containerModal">
    <div
      class="containerM"
      :class="$store.state.modal ? 'animationOpenModel' : 'animationOffModel'"
    >
      <modalImageContent v-if="$store.state.modalImage" />
      <modalWinSeller v-else />
    </div>
  </div>
</template>

<script>
import modalImageContent from "../container/modalImageContent.vue";
import modalWinSeller from "../container/modalWinSeller.vue";
export default {
  name: "modalContainer",
  components: {
    modalImageContent,
    modalWinSeller,
  },
  methods: {},
};
</script>

<style scoped>
.containerModal {
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
}
.containerM {
  width: 400px;
  height: 600px;
  border-radius: 8px;
  background-color: var(--white);
  color: var(--bg-primary);
  box-shadow: rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px;
}
.animationOpenModel {
  animation: showModal ease-in 0.3s;
}
@keyframes showModal {
  to {
    transform: scale(1);
  }
  from {
    transform: scale(0);
  }
}
.animationOffModel {
  animation: hideModal 0.3s ease-in 2s;
}
@keyframes hideModal {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@media all and (max-width: 479px) {
  .containerM {
    width: 85%;
    height: 80%;
  }
}
</style>
