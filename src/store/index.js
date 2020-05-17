import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const BASEURL = process.env.VUE_APP_BASEURL;

export const state = {
  user: {},
};

export default new Vuex.Store({
  state,
  modules: {},
});
