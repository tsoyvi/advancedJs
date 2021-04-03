<template>
  <div class="login">

        <button class="basket button" type="button" @click="showCart = !showCart">
            <img src="/img/basket.png" alt="img/basket.png">
        </button>

            <div class="cart-button-block">
                <button class="account_button" @click="showCart = !showCart">
                    My Account <i class="fa fa-caret-down" aria-hidden="true"></i>
                </button>

                <div class="cart-button-menu-block">

                <div v-show="showCart">
                    <p v-if="!cartItems.length" class="cart-item">
                       Корзина пуста
                    </p>

                    <cart-item v-for="(item, index) of cartItems"
                        :key="index"
                        :cartItem="item"
                        @remove="remove">
                    </cart-item>

                    <div v-if="cartItems.length" class="cart-button-menu-price cart-button-menu">
                        <p>TOTAL</p>
                        <p>${{sumPrice}}</p>
                    </div>

                    <div class="cart-button-menu-button cart-button-menu">
                        <div>
                            <router-link to="/checkout" class="cart-button-menu-checkout button">
                                Checkout
                            </router-link>
                        </div>
                        <div>
                          <router-link to="/Cart"
                              class="cart-button-menu-checkout go-to-cart button">
                                Go to cart
                          </router-link>
                        </div>
                    </div>

                </div>

             </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import CartItem from './CartItem.vue';

export default {
  name: 'CartList',
  components: {
    CartItem,
  },
  data() {
    return {
      showCart: false,
    };
  },

  computed: {

    ...mapGetters(['cartItems', 'sumPrice']),
  },

  methods: {

    ...mapActions(['getCartList', 'remove']),

  },
  created() {
    this.getCartList();
  },

};

</script>
