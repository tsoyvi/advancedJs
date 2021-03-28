<template>

    <div class="items shadow">
     <img  :src="require(`../assets/img/${product.img}`)" :alt ="product.img">
        <p class="items-name">{{product.product_name}}</p>
        <p class="items-price">${{product.price}}</p>
        <div class="items-overlay">
           <button class="items-button-cart">
           <img src="@/assets/img/cart-white.png" alt="cart-white.png"
           class="items-button-cart-img">
           Add to cart
           </button>
        </div>
    </div>

</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
};
</script>
