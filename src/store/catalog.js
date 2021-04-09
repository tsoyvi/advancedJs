import axios from 'axios';

export default {
  state: {
    products: [],
    productsFiltered: [],
    filtersList: {
      gender: null,
      brend: null,
      size: [],
      maxPrice: 0,
      minPrice: 0,
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    productsFiltered(state) {
      return state.productsFiltered;
    },

    brendsList(state) { // получаем уникальные значения брендов для отображения в фильтре
      return [...new Set(state.products.map((obj) => obj.brend))];
    },

    sizesList(state) { // получаем уникальные значения размеров товара для отображения в фильтре
      let sizes = [];
      state.products.forEach(({ size }) => {
        sizes = [...new Set([...sizes, ...size])];
      });
      return sizes.sort();
    },
  },

  mutations: {
    SET_PRODUCTS_LIST(state, products) {
      state.products = products;
    },

    SET_FILTERED_PRODUCTS(state) {
      state.productsFiltered = [...state.products];

      if (state.filtersList.brend) {
        state.productsFiltered = state.productsFiltered.filter((el) => el.brend
          === state.filtersList.brend);
      }

      if (state.filtersList.size.length) {
        state.productsFiltered = state.productsFiltered.filter(({ size }) => size.some(
          (sizeProduct) => state.filtersList.size.includes(sizeProduct),
        ));
      }
    },

    SET_FILTER_BREND(state, { brend }) {
      state.filtersList.brend = brend;
    },

    SET_FILTER_SIZE(state, { size }) {
      state.filtersList.size = [...size];
    },

  },

  actions: {
    async getProductsList({ commit }, gender) {
      const { data: products } = await axios.get(`/bd/catalog_${gender}.json`);

      commit('SET_PRODUCTS_LIST', products);
      commit('SET_FILTERED_PRODUCTS');
    },

    search({ commit, state }, searchString) {
      const regexp = new RegExp(searchString, 'i');
      const productsFiltered = state.products.filter((el) => regexp.test(el.product_name));
      commit('SET_FILTERED_PRODUCTS', productsFiltered);
    },

    filters({ commit }, param) {
      if ('brend' in param) {
        commit('SET_FILTER_BREND', param);
      }

      if ('size' in param) {
        commit('SET_FILTER_SIZE', param);
      }
      commit('SET_FILTERED_PRODUCTS');
    },
  },
};
