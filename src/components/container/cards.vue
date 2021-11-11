<template>
  <div class="containerImages">
    <card v-for="item in data" :data="item" :key="item.id" />
  </div>
</template>

<script>
import "../item/card.vue";
import card from "../item/card.vue";
export default {
  name: "images",
  props: {},
  components: {
    card,
  },
  data(){
    return{
      data:[
        {
          id: 0,
          name: 'Fabian Pacherres',
          score: 0,
          img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg"
        },
        {
          id: 1,
          name: 'Andres Bautista',
          score: 0,
          img: "https://image.freepik.com/foto-gratis/hermoso-camino-madera-que-impresionantes-arboles-coloridos-bosque_181624-5840.jpg"
        },
        {
          id: 2,
          name: 'Mateo Campos',
          score: 0,
          img: "https://bptfotografia.com/wp-content/uploads/2021/06/fotografia-de-paisaje-que-es.jpg"
        },
        {
          id: 3,
          name: 'Luciana Bautista',
          score: 0,
          img: "https://www.dzoom.org.es/wp-content/uploads/2019/09/paisajes-expresivos-734x489.jpg"
        },
        {
          id: 4,
          name: 'Fabian Pacherres',
          score: 0,
          img: "https://conceptodefinicion.de/wp-content/uploads/2013/07/22390-green-wallpaper-nature-pc-wallpaper-free-nature-green-wallpapers_531x331-1.jpg"
        },
        {
          id: 5,
          name: 'Fabian Pacherres',
          score: 0,
          img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg"
        },
        {
          id: 6,
          name: 'Fabian Pacherres',
          score: 0,
          img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg"
        },
        {
          id: 7,
          name: 'Fabian Pacherres',
          score: 0,
          img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg"
        },
        {
          id: 8,
          name: 'Fabian Pacherres',
          score: 0,
          img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg"
        },
        {
          id: 9,
          name: 'Fabian Pacherres',
          score: 0,
          img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg"
        }
      ]
    }
  },
  methods: {},
};
</script>

<style scoped>
.containerImages {
  width: 100%;
  min-height: calc(100vh - 270px);
  display: none;
  overflow-y: scroll;
  /* display: grid; */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.containerImages::-webkit-scrollbar {
  width: 0;
}
@media all and (min-width: 960px) {
  .containerImages {
    min-height: calc(100vh - 300px);
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    display: none;
    /* display: grid; */
  }
}
@media all and (max-width: 479px) {
  .containerImages {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    display: none;
    /* display: grid; */
  }
}
</style>
