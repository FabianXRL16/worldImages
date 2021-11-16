import Vue from "vue";
import Vuex from "vuex";

import getImagesGoogle from "../../api/google";

import getContact from "../../api/api";
import getNewFacture from "../../api/factura";
import getSellers from "../../api/sellers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: false,
    modalImage: true,
    modalMsg:false,
    modalText:true,
    _item: {},
    _images: [],
    _sellers: [],
    _user: {},
    _stateSeller: false,
    _facture: {},
  },
  getters: {
    getModal: (state) => state.modal,
    getModalImage: (state) => state.modalImage,
    getModalMsg: (state) => state.modalMsg,
    getModalText: (state) => state.modalText,
    getData: (state) => state._data,
    getItem: (state) => state._item,
    getImages: (state) => state._images,
    getSellers: (state) => state._sellers,
    getUser: (state) => state._user,
    getStateSeller: (state) => state._stateSeller,
    getFacture: (state) => state._facture,
  },
  actions: {
    showModal({ commit }) {
      commit("CHANGE_STATE_MODAL");
    },
    showModalImage({ commit }) {
      commit("CHANGE_STATE_MODAL_IMAGE");
    },
    showModalMsg({ commit }) {
      commit("CHANGE_STATE_MODAL_MSG");
    },
    showModalText({ commit }) {
      commit("CHANGE_STATE_MODAL_TEXT");
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
    getFacture({ commit }, data) {
      commit("GET_FACTURE", data);
    },
  },
  mutations: {
    CHANGE_STATE_MODAL(state) {
      state.modal = !state.modal;
    },
    CHANGE_STATE_MODAL_IMAGE(state) {
      state.modalImage = !state.modalImage;
    },
    CHANGE_STATE_MODAL_MSG(state) {
      state.modalMsg = !state.modalMsg;
    },
    CHANGE_STATE_MODAL_TEXT(state) {
      state.modalText = !state.modalText;
    },
    SEND_DATA_ITEM(state, id) {
      state._item = {};
      state._item = state._sellers.find((item) => item.id === id);
    },
    CHANGE_SCORE_DATA(state, id) {
      state._sellers.map((i) => {
        if (i.id === id) {
          i.score += 3;
        }
      });
    },
    ADD_COUNT_USER(state, id) {
      state._sellers.map((i) => {
        if (i.id === id) {
          i.state = true;
        }
      });
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
        .map((seller, index) =>
          state._sellers.push({
            name: seller.name,
            identification: seller.identification,
            score: 0,
            state: false,
            id: seller.id,
            link: index,
          })
        );
    },
    async GET_USER(state) {
      let arr = await getContact();
      arr
        .filter((i) => i.type.includes("client"))
        .map(
          (user) =>
            (state._user = {
              name: user.name,
              identification: user.identification,
              id: user.id
            })
        );
    },
    async GET_FACTURE(state, data) {
      let facture = await getNewFacture(data);
      state._facture = facture;
    },
  },
});
