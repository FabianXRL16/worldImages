<template>
  <div class="avatar">
    <!-- <h2>{{ $store.state._user.name.split(' ').slice(0,1).join(' ') }}</h2> -->
    <h2>Fabian</h2>
    <img src="../../assets/user.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "avatar",
  props: {},
  created() {
    this.$store.dispatch("getUserAlegra");
  },
};
</script>

<style scoped>
.avatar {
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
}
h2 {
  margin: 0;
  font-size: 24px;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid #fff;
}
@media all and (max-width: 479px) {
  .avatar {
    gap: 10px;
  }
}
</style>
