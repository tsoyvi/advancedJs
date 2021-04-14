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
      find.quantity += +product.quantity;
    },

    INSERT_TO_CART(state, product) {
      state.cartItems.push({ ...product });
    },

    REMOVE_FROM_CART(state, product) {
      state.cartItems[state.cartItems.indexOf(product)].quantity -= 1;
    },

    DELETE_FROM_CART(state, product) {
      state.cartItems.splice(state.cartItems.indexOf(product), 1);
    },
  },

  // все ссылки настроены на работу через сервер nodejs
  // для работы необходимо собрать проект (npm run build)
  // запустить nodejs сервер (nodemon server/server.js)
  //
  // возникла проблема если выбрать цвет и размер
  // я не учёл что для товара с разным цветом и размером должен быть свой id
  // пришлось говнокодить и находить товар еще и по цветам и размерам
  // так конечно не делается и поиск происходит только по id
  // но это как выход из моей ошибки по созданию БД товаров
  actions: {
    getCartList({ commit }) {
      // const cartItems = await axios.get('/bd/cartlist.json');
      requests.getJson('/api/cart')
        .then((data) => {
          commit('SET_CART_LIST', data);
        });
    },

    addProduct({ state, commit }, product) {
      const find = state.cartItems.find((el) => (el.id_product === product.id_product)
        && (el.color === product.color) && (el.size === product.size));
      if (find) {
        requests.putJson(`/api/cart/${product.id_product}`,
          { quantity: +product.quantity, color: product.color, size: product.size })
          .then((data) => {
            if (data.result === 1) {
              commit('ADD_TO_CART', product);
            }
          });
      } else {
        requests.postJson('/api/cart', product)
          .then((data) => {
            if (data.result === 1) {
              commit('INSERT_TO_CART', product);
            }
          });
      }
    },

    removeProduct({ commit }, product) {
      if (product.quantity > 1) {
        requests.putJson(`/api/cart/${product.id_product}`,
          { quantity: -1, color: product.color, size: product.size })
          .then((data) => {
            if (data.result === 1) {
              commit('REMOVE_FROM_CART', product);
            }
          });
      } else {
        requests.deleteJson(`/api/cart/${product.id_product}`,
          { params: { color: product.color, size: product.size } })
          .then((data) => {
            if (data.result === 1) {
              commit('DELETE_FROM_CART', product);
            }
          });
      }
    },
  },
};
