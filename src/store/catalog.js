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
    async getProductsList({ commit }, gender) {
      const { data: products } = await axios.get('/bd/catalog.json');
      const positiveArr = products.filter((el) => el.gender === gender);

      commit('SET_PRODUCTS_LIST', positiveArr);
    },
  },
};
