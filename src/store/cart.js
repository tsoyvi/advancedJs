import axios from 'axios';

export default {
  state: {
    cartItems: [],
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
  },
  mutations: {
    SET_CART_LIST(state, cartItems) {
      state.cartItems = cartItems;
    },

    ADD_TO_CART(state, product) {
      const find = state.cartItems.find((el) => el.id_product === product.id_product);
      if (find) {
        find.quantity += 1;
      } else {
        state.cartItems.push({ quantity: 1, ...product });
      }
    },

    REMOVE_FROM_CART(state, product) {
      if (product.quantity > 1) {
        state.cartItems[state.cartItems.indexOf(product)].quantity -= 1;
      } else {
        state.cartItems.splice(state.cartItems.indexOf(product), 1);
      }
    },

  },

  actions: {
    async getCartList({ commit }) {
      const cartItems = await axios.get('/bd/cartlist.json');
      commit('SET_CART_LIST', cartItems.data);
    },

    addProduct({ commit }, product) {
      // const prod = { quantity: 1, ...product };
      axios.get('/bd/addToBasket.json') //
        .then((res) => {
          if (res.data.result === 1) {
            commit('ADD_TO_CART', product);
          }
        })
        .catch((err) => {
          console.log(`ошибка: ${err}`);
        });
    },

    remove({ commit }, product) {
      commit('REMOVE_FROM_CART', product);
    },

    test({ commit }, product) {
      console.log(product);
      commit('ADD_TO_CART', 1);
    },

  },
};
