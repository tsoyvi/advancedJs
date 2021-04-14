<template>
  <div class="">
      <ul class="cart-button-menu">
    <li class="cart-button-menu-li">
        <img :src="require(`@/assets/img/${cartItem.img}`)"
        :alt ="cartItem.img" class="cart-button-menu-img">
        <div class="cart-button-menu-block-text">
            <p class="cart-button-menu-block-header">
                {{cartItem.product_name}}
            </p>

            <p class="cart-button-menu-block-price">
                {{cartItem.size}}
            </p>
            <p class="cart-button-menu-block-price">
                {{cartItem.color}}
            </p>

            <p class="stars"> <!--Рейтинг звездочки-->
            <i class="fa fa-star" aria-hidden="true"
                v-for="(star, index) in Math.floor(cartItem.rating)"
                :key="index"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"
                v-if="cartItem.rating % 1"></i>
            </p>

            <p class="cart-button-menu-block-price">
                {{cartItem.quantity}} x ${{cartItem.price.toFixed(2)}}
            </p>
        </div>
        <div>
            <button class="cart-button-menu-button-cancel"
                @click="removeProduct(cartItem)">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
        </div>
    </li>
  </ul>

 </div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CartItem',
  props: ['cartItem'],
  methods: {
    ...mapActions(['removeProduct']),
  },
};

</script>
