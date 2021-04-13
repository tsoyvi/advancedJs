import requests from './requests';

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

  // все ссылки настроены на работу через сервер nodejs
  // для работы необходимо собрать проект (npm run build)
  // запустить nodejs сервер (nodemon server/server.js)
  //
  actions: {
    getCartList({ commit }) {
      // const cartItems = await axios.get('/bd/cartlist.json');
      requests.getJson('/api/cart')
        .then((data) => {
          commit('SET_CART_LIST', data);
        });
    },

    addProduct({ state, commit }, product) {
      const find = state.cartItems.find((el) => el.id_product === product.id_product);
      if (find) {
        console.log(product.quantity);
        requests.putJson(`/api/cart/${product.id_product}`, { quantity: +product.quantity })
          .then((data) => {
            if (data.result === 1) {
              commit('ADD_TO_CART', product);
            }
          });
      } else {
        requests.postJson('/api/cart', product)
          .then((data) => {
            if (data.result === 1) {
              commit('ADD_TO_CART', product);
            }
          });
      }
    },

    removeProduct({ commit }, product) {
      console.log(product.quantity);
      if (product.quantity > 1) {
        requests.putJson(`/api/cart/${product.id_product}`, { quantity: -1 })
          .then((data) => {
            if (data.result === 1) {
              commit('REMOVE_FROM_CART', product);
            }
          });
      } else {
        requests.deleteJson(`/api/cart/${product.id_product}`)
          .then((data) => {
            if (data.result === 1) {
              commit('REMOVE_FROM_CART', product);
            }
          });
      }
    },
  },
};
