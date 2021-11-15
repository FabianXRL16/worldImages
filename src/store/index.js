import Vue from "vue";
import Vuex from "vuex";

import getImagesGoogle from "../../api/google";

import getSellers from "../../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: false,
    modalImage: false,
    _item: {},
    _images: [],
    _sellers: [],
    _user: {},
    _stateSeller: false,
  },
  getters: {
    getModal: (state) => state.modal,
    getModalImage: (state) => state.modalImage,
    getData: (state) => state._data,
    getItem: (state) => state._item,
    getImages: (state) => state._images,
    getSellers: (state) => state._sellers,
    getUser: (state) => state._user,
    getStateSeller: (state) => state._stateSeller,
  },
  actions: {
    showModal({ commit }) {
      commit("CHANGE_STATE_MODAL");
    },
    showModalImage({ commit }) {
      commit("CHANGE_STATE_MODAL_IMAGE");
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
    sendImages({ commit }, nameImage) {
      commit("SEND_IMAGES", nameImage);
    },
    getSellersAlegra({ commit }) {
      commit("GET_SELLERS");
    },
    getUserAlegra({ commit }) {
      commit("GET_USER");
    },
    updateStateSeller({ commit }) {
      commit("UPDATE_STATE_SELLER");
    },
  },
  mutations: {
    CHANGE_STATE_MODAL(state) {
      state.modal = !state.modal;
    },
    CHANGE_STATE_MODAL_IMAGE(state) {
      state.modalImage = !state.modalImage;
    },
    SEND_DATA_ITEM(state, identification) {
      state._item = {};
      state._item = state._sellers.find(
        (item) => item.identification === identification
      );
    },
    CHANGE_SCORE_DATA(state, id) {
      state._sellers[id].score += 3;
    },
    ADD_COUNT_USER(state, id) {
      state._sellers[id].state = true;
    },
    UPDATE_STATE_SELLER(state) {
      state._sellers.map((seller) => (seller.state = false));
    },
    async SEND_IMAGES(state, nameImage) {
      let img = await getImagesGoogle(nameImage);
      state._images = img.map((i) => i.link);
    },
    async GET_SELLERS(state) {
      let arr = await getSellers();
      arr
        .filter((i) => i.type.includes("provider"))
        .map((seller, i) =>
          state._sellers.push({
            name: seller.name,
            identification: seller.identification,
            score: 0,
            state: false,
            id: i,
          })
        );
    },
    async GET_USER(state) {
      let arr = await getSellers();
      arr
        .filter((i) => i.type.includes("client"))
        .map(
          (user) =>
            (state._user = {
              name: user.name,
              identification: user.identification,
            })
        );
    },
  },
});
