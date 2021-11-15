<template>
  <div v-if="name" class="avatar">
    <h2>{{ firstName }}</h2>
    <img src="../../assets/user.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "avatar",
  props: {},
  computed: {
    name() {
      return this.$store?.state?._user?.name;
    },
    firstName() {
      return this.name.split(" ").slice(0, 1).join(" ");
    },
  },
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
  border: 3px solid var(--white);
}
@media all and (max-width: 479px) {
  .avatar {
    gap: 10px;
  }
}
</style>
