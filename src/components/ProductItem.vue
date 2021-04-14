<template>

    <div class="items shadow">
     <img  :src="require(`../assets/img/${product.img}`)" :alt ="product.img">
        <p class="items-name">{{product.product_name}}</p>
        <p class="items-price">${{product.price.toFixed(2)}}</p>
        <div class="items-overlay">
           <!--<button class="items-button-cart" @click="addProduct(product)">
           </button> :to="{name: 'historyId', params: {id: historyItem.id, date: historyItem.date}}"
            -->
            <router-link :to="{name: 'SinglePage', params: {product: product}}"
                class="items-button-cart">
               <img src="@/assets/img/cart-white.png" alt="cart-white.png"
                class="items-button-cart-img">
                Add to cart
            </router-link>

        </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductItem',
  props: ['product'],

  methods: {
    ...mapActions(['addProduct']),
  },
};
</script>
