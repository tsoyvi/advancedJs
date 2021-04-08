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
      return sizes;
    },
  },
  mutations: {
    SET_PRODUCTS_LIST(state, products) {
      state.products = products;
    },

    SET_FILTERED_PRODUCTS(state) {
      state.productsFiltered = state.products.filter((el) => el.gender
        === state.filtersList.gender);

      if (state.filtersList.brend) {
        state.productsFiltered = state.productsFiltered.filter((el) => el.brend
          === state.filtersList.brend);
      }

      if (state.filtersList.size.length) {
        // let intersection = arrayA.filter(num => arrayB.includes(num));
        // state.productsFiltered
        console.log(state.productsFiltered);

        const arr1 = state.productsFiltered.filter(
          (arr) => arr.size.filter((num) => state.filtersList.size.includes(num)),
        );

        console.log(arr1);

        const arrayA = [1, 3, 4, 5];
        const arrayB = [1, 2, 5, 6, 7];
        console.log(arrayA.filter((num) => arrayB.includes(num)));
      }
    },

    SET_FILTER_BREND(state, { brend }) {
      state.filtersList.brend = brend;
    },

    SET_FILTER_SIZE(state, { size }) {
      state.filtersList.size = [...size];
    },

    SET_FILTER_GENDER(state, gender) {
      state.filtersList.gender = gender;
    },

  },

  actions: {
    async getProductsList({ commit }, gender) {
      const { data: products } = await axios.get('/bd/catalog.json');
      // const productsGender = products.filter((el) => el.gender === gender);

      commit('SET_FILTER_GENDER', gender);
      commit('SET_PRODUCTS_LIST', products);
      commit('SET_FILTERED_PRODUCTS');
    },

    search({ commit, state }, searchString) {
      const regexp = new RegExp(searchString, 'i');
      const productsFiltered = state.products.filter((el) => regexp.test(el.product_name));
      commit('SET_FILTERED_PRODUCTS', productsFiltered);
    },

    filters({ commit }, param) {
      // console.log(param);

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
