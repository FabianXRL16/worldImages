import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: false,
    modalImage: false,
    modalWin: false,
    _data: [
      {
        id: 0,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
        state: false,
      },
      {
        id: 1,
        name: "Andres Bautista",
        score: 0,
        img: "https://image.freepik.com/foto-gratis/hermoso-camino-madera-que-impresionantes-arboles-coloridos-bosque_181624-5840.jpg",
        state: false,
      },
      {
        id: 2,
        name: "Mateo Campos",
        score: 0,
        img: "https://bptfotografia.com/wp-content/uploads/2021/06/fotografia-de-paisaje-que-es.jpg",
        state: false,
      },
      {
        id: 3,
        name: "Luciana Bautista",
        score: 0,
        img: "https://www.dzoom.org.es/wp-content/uploads/2019/09/paisajes-expresivos-734x489.jpg",
        state: false,
      },
      {
        id: 4,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://conceptodefinicion.de/wp-content/uploads/2013/07/22390-green-wallpaper-nature-pc-wallpaper-free-nature-green-wallpapers_531x331-1.jpg",
        state: false,
      },
      {
        id: 5,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
        state: false,
      },
      {
        id: 6,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
        state: false,
      },
      {
        id: 7,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
        state: false,
      },
      {
        id: 8,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
        state: false,
      },
      {
        id: 9,
        name: "Fabian Pacherres",
        score: 0,
        img: "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
        state: false,
      },
    ],
    _item: {},
  },
  getters: {
    getModal: (state) => state.modal,
    getModalImage: (state) => state.modalImage,
    getModalWin: (state) => state.modalWin,
    getData: (state) => state._data,
    getItem: (state) => state._item,
  },
  actions: {
    showModal({ commit }) {
      commit("CHANGE_STATE_MODAL");
    },
    showModalImage({ commit }) {
      commit("CHANGE_STATE_MODAL_IMAGE");
    },
    showModalWin({ commit }) {
      commit("CHANGE_STATE_MODAL_WIN");
    },
    sendDataItem({ commit }, id) {
      commit("SEND_DATA_ITEM", id);
    },
    addScoreSeller({ commit }, id) {
      commit("CHANGE_SCORE_DATA", id);
    },
    addCountUser({ commit }, id) {
      commit("ADD_COUNT_USER", id);
    },
  },
  mutations: {
    CHANGE_STATE_MODAL(state) {
      state.modal = !state.modal;
    },
    CHANGE_STATE_MODAL_IMAGE(state) {
      state.modalImage = !state.modalImage;
    },
    CHANGE_STATE_MODAL_WIN(state) {
      state.modalWin = !state.modalWin;
    },
    SEND_DATA_ITEM(state, id) {
      state._item = {};
      state._item = state._data.find((item) => item.id === id);
    },
    CHANGE_SCORE_DATA(state, id) {
      state._data[id].score += 3;
    },
    ADD_COUNT_USER(state, id) {
      state._data[id].state = true;
    },
  },
});
