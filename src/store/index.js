import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalImage: false,
    modalMsg: false,
    modalLogin: false,
    _data: [
      {
        id: 0,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
      },
      {
        id: 1,
        name: "Andres Bautista",
        score: 0,
        img: "https://image.freepik.com/foto-gratis/hermoso-camino-madera-que-impresionantes-arboles-coloridos-bosque_181624-5840.jpg",
      },
      {
        id: 2,
        name: "Mateo Campos",
        score: 0,
        img: "https://bptfotografia.com/wp-content/uploads/2021/06/fotografia-de-paisaje-que-es.jpg",
      },
      {
        id: 3,
        name: "Luciana Bautista",
        score: 0,
        img: "https://www.dzoom.org.es/wp-content/uploads/2019/09/paisajes-expresivos-734x489.jpg",
      },
      {
        id: 4,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://conceptodefinicion.de/wp-content/uploads/2013/07/22390-green-wallpaper-nature-pc-wallpaper-free-nature-green-wallpapers_531x331-1.jpg",
      },
      {
        id: 5,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
      },
      {
        id: 6,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
      },
      {
        id: 7,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
      },
      {
        id: 8,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
      },
      {
        id: 9,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
      },
    ],
    _item: {},
    _count: 0
  },
  getters: {
    getModalImage: (state) => state.modalImage,
    getModalMsg: (state) => state.modalMsg,
    getModalLogin: (state) => state.modalLogin,
    getData: (state) => state._data,
    getItem: (state) => state._item,
    getCount: (state) => state._count,
  },
  actions: {
    showModalImage({ commit }) {
      commit("CHANGE_STATE_MODAL_IMAGE");
    },
    showModalMsg({ commit }) {
      commit("CHANGE_STATE_MODAL_MSG");
    },
    showModalLogin({ commit }) {
      commit("CHANGE_STATE_MODAL_LOGIN");
    },
    sendDataItem({ commit }, id) {
      commit("SEND_DATA_ITEM", id);
    },
    addScoreSeller({ commit }, id) {
      commit("CHANGE_SCORE_DATA", id);
    },
    addCountUser({ commit }) {
      commit("ADD_COUNT_USER");
    },
  },
  mutations: {
    CHANGE_STATE_MODAL_IMAGE(state) {
      state.modalImage = !state.modalImage;
    },
    CHANGE_STATE_MODAL_MSG(state) {
      state.modalMsg = !state.modalMsg;
    },
    CHANGE_STATE_MODAL_LOGIN(state) {
      state.modalLogin = !state.modalLogin;
    },
    SEND_DATA_ITEM(state, id) {
      state._item = {}
      state._item = state._data.find((item) => item.id === id);
    },
    CHANGE_SCORE_DATA(state, id) {
      // state._data.find((item) => {
      //   if (item.id === id) {
      //     item.id += 3;
      //     console.log(id);
      //   }
      // });
      state._data[id].score += 3
    },
    ADD_COUNT_USER(state) {
      state._count+= 1;
    },
  },
});
