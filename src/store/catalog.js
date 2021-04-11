import axios from 'axios';

export default {
  state: {
    products: [],
    productsFiltered: [],
    filtersList: {
      brend: null,
      size: [],
      minPrice: 0,
      maxPrice: 0,
      searchString: '',
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

    maxPriceProducts(state) { // получаем максимальное значение  стоимости товаров
      if (!state.products.length) {
        return 'max';
      }
      return state.products.reduce((max, { price }) => (max > price ? max : price));
    },
  },

  mutations: {
    SET_PRODUCTS_LIST(state, products) {
      state.products = products;
    },

    SET_MAX_PRICE(state) {
      state.filtersList.maxPrice = state.products.reduce((max,
        { price }) => (max > price ? max : price));
    },

    SET_SEARCH_STRING(state, searchString) {
      state.filtersList.searchString = searchString;
    },

    SET_FILTERED_PRODUCTS(state) {
      const regexp = new RegExp(state.filtersList.searchString, 'i');
      state.productsFiltered = state.products.filter((el) => regexp.test(el.product_name));

      if (state.filtersList.brend) {
        state.productsFiltered = state.productsFiltered.filter((el) => el.brend
          === state.filtersList.brend);
      }

      if (state.filtersList.size.length) {
        state.productsFiltered = state.productsFiltered.filter(({ size }) => size.some(
          (sizeProduct) => state.filtersList.size.includes(sizeProduct),
        ));
      }

      state.productsFiltered = state.productsFiltered.filter(({ price }) => price
        <= state.filtersList.maxPrice && price >= state.filtersList.minPrice);
    },

    SET_FILTER_BREND(state, { brend }) {
      state.filtersList.brend = brend;
    },

    SET_FILTER_SIZE(state, { size }) {
      state.filtersList.size = [...size];
    },

    SET_FILTER_PRICE(state, { minPrice, maxPrice }) {
      state.filtersList.minPrice = minPrice;
      state.filtersList.maxPrice = maxPrice;
    },

  },

  actions: {
    async getProductsList({ commit }, gender) {
      console.log(gender);
      const { data: products } = await axios.get(`/bd/catalog_${gender}.json`);

      commit('SET_PRODUCTS_LIST', products);
      commit('SET_MAX_PRICE');
      commit('SET_FILTERED_PRODUCTS');
    },

    search({ commit }, searchString) {
      commit('SET_SEARCH_STRING', searchString);
      commit('SET_FILTERED_PRODUCTS', searchString);
    },

    filterBrend({ commit }, param) {
      commit('SET_FILTER_BREND', param);
      commit('SET_FILTERED_PRODUCTS');
    },

    filterSize({ commit }, param) {
      commit('SET_FILTER_SIZE', param);
      commit('SET_FILTERED_PRODUCTS');
    },

    filterPrice({ commit }, param) {
      commit('SET_FILTER_PRICE', param);
      commit('SET_FILTERED_PRODUCTS');
    },
  },
};
