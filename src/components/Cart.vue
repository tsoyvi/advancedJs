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

                <div class="cart-block" v-show="showCart">
                    <p v-if="!cartItems.length">Корзина пуста</p>

                    <cart-item class="cart-item"
                        v-for="item of cartItems"
                        :key="item.id_product"
                        :cart-item="item"
                        @remove="remove">
                    </cart-item>

                    <div class="cart-button-menu-price cart-button-menu">
                        <p>TOTAL</p>
                        <p>${{sumPrice()}}</p>
                    </div>

                    <div class="cart-button-menu-button cart-button-menu">
                        <div>
                            <a href="checkout.html" class="cart-button-menu-checkout button">
                                Checkout
                            </a>
                        </div>
                        <div>
                            <a href="shopping-cart.html"
                                class="cart-button-menu-checkout go-to-cart button">
                                Go to cart
                            </a>
                        </div>
                    </div>

                </div>

        </div>
            </div>
    </div>
</template>

<script>

import CartItem from './CartItem.vue';

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      cartItems: [{
        id_product: 124,
        product_name: 'Mango People T-shirt',
        brend: 'Bohemian',
        price: 100,
        img: 'Image_placeholder_1.png',
        size: [
          'XS',
          'M',
          'L',
          'XL',
          'XLL',
        ],
        gender: 'male',
        material: 'polyester',
        color: [
          'red',
          'blue',
          'black',
        ],
        rating: 2.7,
        quantity: 1,
      },
      {
        id_product: 457,
        product_name: 'Mango People T-shirt',
        brend: 'Bohemian',
        price: 325.6,
        img: 'Image_placeholder_2.png',
        size: [
          'XXS',
          'XS',
          'M',
          'L',
          'XL',
        ],
        material: 'cotton',
        color: [
          'red',
          'blue',
          'black',
        ],
        rating: 4.5,
        quantity: 2,
      },
      {
        id_product: 123,
        product_name: 'Mango People T-shirt',
        brend: 'Bohemian',
        price: 22.6,
        img: 'Image_placeholder_3.png',
        size: [
          'XS',
          'M',
          'L',
          'XLL',
        ],
        gender: 'male',
        material: 'polyester',
        color: [
          'red',
          'blue',
          'black',
        ],
        rating: 5,
        quantity: 5,
      }],
      showCart: false,
    };
  },

  methods: {
    sumPrice() {
      return this.cartItems.reduce((sum,
        { price, quantity }) => sum + price * quantity, 0).toFixed(2);
    },
    remove(item) {
      if (item.quantity > 1) {
        console.log(item.quantity);
      } else {
        console.log(item.quantity);
      }
    },

  },
};

</script>
