import Vue from 'vue';
import Vuex from 'vuex';
import LoginSignup from './modules/LoginSignup';
import Room from './modules/Room';
import Calendar from './modules/Calendar';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    LoginSignup: LoginSignup,
    Room: Room,
    Calendar: Calendar,
  },
  state: {
    // userId: getUserFromCookie() || '',
    // token: getAuthFromCookie() || ''
  },
  mutations: {},
  actions: {},
  getters: {},
});
