import axios from 'axios';

export default {
  state: {
    products: [],
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS_LIST(state, products) {
      state.products = products;
      console.log(`=>${products}`);
    },
  },
  actions: {
    async getProductsList({ commit }) {
      const products = await axios.get('https://github.com/GeekBrainsTutorial/online-store-api/blob/master/responses/catalogData.json');
      commit('SET_PRODUCTS_LIST', products);
      console.log('dfsddf');
    },
  },
};
