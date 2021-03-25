<template>
  <div>
    <h1>productsList</h1>
    <product-item v-for="(product, index) of products" :product="product" :key="index">
    </product-item>
  </div>
</template>

<script>

import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  name: 'ProductsList',
  data() {
    return {
      products: [
        {
          id_product: 124,
          product_name: 'Mango People T-shirt',
          price: 100.00,
          img: 'Image_placeholder_1.png',

        },
        {
          id_product: 457,
          product_name: 'Mango People T-shirt',
          price: 325.60,
          img: 'Image_placeholder_2.png',
        },
        {
          id_product: 123,
          product_name: 'Mango People T-shirt',
          price: 22.60,
          img: 'Image_placeholder_3.png',
        },
        {
          id_product: 413,
          product_name: 'Mango People T-shirt',
          price: 34.32,
          img: 'Image_placeholder_4.png',
        },
        {
          id_product: 456,
          product_name: 'Mango People T-shirt',
          price: 34.32,
          img: 'Image_placeholder_5.png',
        },
        {
          id_product: 413,
          product_name: 'Mango People T-shirt',
          price: 24.90,
          img: 'Image_placeholder_6.png',
        },
        {
          id_product: 331,
          product_name: 'Mango People T-shirt',
          price: 53.03,
          img: 'Image_placeholder_7.png',
        },
        {
          id_product: 952,
          product_name: 'Mango People T-shirt',
          price: 5.99,
          img: 'Image_placeholder_8.png',
        },
        {
          id_product: 3414,
          product_name: 'Mango People T-shirt',
          price: 52.92,
          img: 'Image_placeholder_9.png',
        },

      ],

    };
  },

};
</script>

<style scoped lang="scss">
</style>
