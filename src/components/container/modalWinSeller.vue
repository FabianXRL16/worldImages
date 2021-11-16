<template>
  <div class="modalWiSeller">
    <img class="user" src="../../assets/avatar.svg" alt="" />
    <h1>{{ $store.state._item.name }}</h1>
    <p>Primero en llegar a!</p>
    <div class="scoreFinal"><span>20</span><i class="fas fa-star"></i></div>
    <button @click="getFacture">
      <i class="fas fa-file-invoice"></i>Generar Factura
    </button>
  </div>
</template>

<script>
export default {
  name: "modalContainer",
  components: {},
  methods: {
    getFacture() {
      this.$store.dispatch("getFacture", {
        date: `${this.getDate()}`,
        dueDate: `${this.getDate(false)}`,
        idUser: this.$store.state._user.id,
        items: [
          {
            id: 1,
            price: this.$store.state._sellers.reduce((a, b) => {
              return a + b.score;
            }, 0),
            quantity: 1,
            description: "Imagenes",
          },
        ],
        idSeller: this.$store.state._item.id,
        operationType: "INTERNAL_SALE",
      });
    },
    getDate(today = true) {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      if (!today) {
        if (month + 1 === 13) {
          month = 1;
          year += 1;
        } else {
          month += 1;
        }
      }
      if (month < 10) {
        return `${year}-0${month}-${day}`;
      } else {
        return `${year}-${month}-${day}`;
      }
    },
  },
};
</script>

<style scoped>
.modalWiSeller {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 8px solid var(--bg-primary);
}
h1 {
  width: 75%;
  margin: 30px 0 0;
  font-size: 50px;
  line-height: 60px;
  font-weight: 600;
}
p {
  color: var(--yellow);
  font-size: 20px;
  font-weight: 500;
  margin: 15px 0 0;
}
.scoreFinal {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--yellow);
  gap: 2px;
}
.scoreFinal span {
  font-size: 35px;
}
.scoreFinal i {
  font-size: 25px;
  line-height: 25px;
  padding-bottom: 2px;
}
button {
  outline: none;
  cursor: pointer;
  border: none;
  font-weight: 500;
  background-color: var(--bg-primary);
  color: var(--white);
  padding: 0 40px;
  height: 50px;
  border-radius: 25px;
  font-size: 20px;
  margin-top: 20px;
  transition: 0.3s;
}
button i {
  margin-right: 12px;
}
button:hover {
  background-color: var(--bg-primary-dark);
  transition: 0.3s;
}
@media all and (max-width: 479px) {
  h1 {
    font-size: 40px;
    line-height: 50px;
  }
  button {
    padding: 0 30px;
    border-radius: 25px;
    font-size: 18px;
    margin-top: 15px;
  }
}
</style>
