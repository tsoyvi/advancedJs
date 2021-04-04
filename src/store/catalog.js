import axios from 'axios';

export default {
  state: {
    products: [],
    productsFiltered: [],
  },
  getters: {
    products(state) {
      return state.products;
    },
    productsFiltered(state) {
      return state.productsFiltered;
    },
  },
  mutations: {
    SET_PRODUCTS_LIST(state, products) {
      state.products = products;
    },

    SET_FILTERED_PRODUCTS(state, productsFiltered) {
      state.productsFiltered = productsFiltered;
    },
  },

  actions: {
    async getProductsList({ commit }, gender) {
      const { data: products } = await axios.get('/bd/catalog.json');
      const productsGender = products.filter((el) => el.gender === gender);

      commit('SET_PRODUCTS_LIST', products);
      commit('SET_FILTERED_PRODUCTS', productsGender);
    },

    search({ commit, state }, searchString) {
      const regexp = new RegExp(searchString, 'i');
      const productsFiltered = state.products.filter((el) => regexp.test(el.product_name));
      commit('SET_FILTERED_PRODUCTS', productsFiltered);
    },

  },
};
