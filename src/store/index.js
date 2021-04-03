import Vue from 'vue';
import Vuex from 'vuex';
import cart from './cart';
import catalog from './catalog';
import single from './single';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    catalog,
    single,
  },
});
