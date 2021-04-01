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
    },
  },
  actions: {
    async getProductsList({ commit }) {
      const products = await axios.get('/bd/catalog.json');
      // const products = await axios.get('https://github.com/GeekBrainsTutorial/online-store-api/blob/ca57ebba4d8eda5face06b282cc6aaf2e38fa9bf/responses/catalogData.json');
      // console.log(products.data);
      commit('SET_PRODUCTS_LIST', products.data);
    },
  },
};
