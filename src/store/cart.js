import axios from 'axios';

export default {
  state: {
    cartItems: [],
  },
  getters: {

    cartItems(state) {
      return state.cartItems;
    },

    sumPrice(state) {
      return state.cartItems.reduce((sum,
        { price, quantity }) => sum + price * quantity, 0).toFixed(2);
    },

  },
  mutations: {
    SET_CART_LIST(state, cartItems) {
      state.cartItems = cartItems;
    },

    ADD_TO_CART(state, product) {
      const find = state.cartItems.find((el) => (el.id_product === product.id_product)
        && (el.color === product.color) && (el.size === product.size));
      if (find) {
        console.log(find.quantity);
        find.quantity += +product.quantity;
      } else {
        state.cartItems.push({ ...product });
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

    /*    addProduct({ commit }, product) {
          // const prod = { quantity: 1, ...product };
          console.log('add');
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
    */

    addProduct({ commit }, product) {
      // const prod = { quantity: 1, ...product };
      console.log('add');
      commit('ADD_TO_CART', product);
    },

    remove({ commit }, product) {
      commit('REMOVE_FROM_CART', product);
    },

  },
};
