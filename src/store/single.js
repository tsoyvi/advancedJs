export default {
  state: {
    singleProduct: [{
      id_product: null,
      product_name: null,
      brend: null,
      price: null,
      img: null,
      size: null,
      gender: null,
      material: null,
      color: null,
      rating: null,
      quantity: null,
    },
    ],
  },
  getters: {
    singleProduct(state) {
      return state.singleProduct;
    },
  },

  mutations: {
    SET_SETTINGS_PRODUCT(state, product) {
      state.singleProduct = { ...product };
      [state.singleProduct.color] = product.color;
      [state.singleProduct.size] = product.size;
      state.singleProduct.quantity = 1;
    },

    SET_SELECTOR(state, selector) {
      state.singleProduct.[selector.id] = selector.selected;
    },
  },

  actions: {
    loadProduct({ commit }, product) {
      // console.log(product);
      commit('SET_SETTINGS_PRODUCT', product);
    },

    selectorRefresh({ commit }, selector) {
      commit('SET_SELECTOR', selector);
    },

  },
};
