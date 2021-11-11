import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalImage: false,
    modalMsg: false,
    modalLogin: false,
  },
  getters: {
    getModalImage: (state) => state.modalImage,
    getModalMsg: (state) => state.modalMsg,
    getModalLogin: (state) => state.modalLogin,
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
  },
});
