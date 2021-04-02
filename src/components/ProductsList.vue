<template>
<section class="section">
    <div class="product container">

        <product-aside></product-aside>

        <div class="option-selected">
            <product-filter></product-filter>
            <filter-sort-block></filter-sort-block>

            <div class="items-arr">
                <product-item v-for="(product, index) of products" :product="product" :key="index">
                </product-item>
            </div>
            <pagination-block></pagination-block>
        </div>

    </div>
</section>

</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import ProductItem from './ProductItem.vue';
import ProductFilter from './blocks/ProductFilter.vue';
import FilterSortBlock from './blocks/FilterSortBlock.vue';
import ProductAside from './blocks/Aside.vue';
import PaginationBlock from './blocks/PaginationBlock.vue';

export default {
  components: {

    ProductAside,
    ProductItem,
    ProductFilter,
    FilterSortBlock,
    PaginationBlock,

  },
  name: 'ProductsList',
  data() {
    return {
      /* products: [
        {
          id_product: 124,
          product_name: 'Mango People T-shirt',
          brend: 'Bohemian',
          price: 100.00,
          img: 'Image_placeholder_1.png',
          size: ['XS', 'M', 'L', 'XL', 'XLL'],
          gender: 'male',
          material: 'polyester',
          color: ['red', 'blue', 'black'],
          rating: 4.5,
        },
        {
          id_product: 457,
          product_name: 'Mango People T-shirt',
          brend: 'Bohemian',
          price: 325.60,
          img: 'Image_placeholder_2.png',
          size: ['XXS', 'XS', 'M', 'L', 'XL'],
          material: 'cotton',
          color: ['red', 'blue', 'black'],
          rating: 5.0,
        },
        {
          id_product: 123,
          product_name: 'Mango People T-shirt',
          brend: 'Bohemian',
          price: 22.60,
          img: 'Image_placeholder_3.png',
          size: ['XS', 'M', 'L', 'XLL'],
          gender: 'male',
          material: 'polyester',
          color: ['red', 'blue', 'black'],
          rating: 5.0,
        },
        {
          id_product: 413,
          product_name: 'Mango People T-shirt',
          brend: 'Bohemian',
          price: 34.32,
          img: 'Image_placeholder_4.png',
          size: ['XXS', 'XS', 'M', 'XL', 'XLL'],
          gender: 'male',
          material: 'polyester',
          color: ['red', 'blue', 'black'],
          rating: 4.0,
        },
        {
          id_product: 456,
          product_name: 'Mango People T-shirt',
          brend: 'Bohemian',
          price: 34.32,
          img: 'Image_placeholder_5.png',
          size: ['M'],
          gender: 'male',
          material: 'polyester',
          color: ['red', 'blue', 'black'],
          rating: 3.5,
        },
        {
          id_product: 413,
          product_name: 'Mango People T-shirt',
          brend: 'Bohemian',
          price: 24.90,
          img: 'Image_placeholder_6.png',
          size: ['XXS', 'XS', 'M'],
          gender: 'male',
          material: 'cotton',
          color: ['red', 'blue', 'black'],
          rating: 2.0,
        },
        {
          id_product: 331,
          product_name: 'Mango People T-shirt',
          brend: 'Bohemian',
          price: 53.03,
          img: 'Image_placeholder_7.png',
          size: ['XXS', 'XS', 'M', 'L', 'XLL'],
          gender: 'male',
          material: 'polyester',
          color: ['red', 'blue', 'black'],
          rating: 3.5,
        },
        {
          id_product: 952,
          product_name: 'Mango People T-shirt',
          brend: 'Bohemian',
          price: 5.99,
          img: 'Image_placeholder_8.png',
          size: ['XXS', 'XS', 'M', 'L', 'XL'],
          gender: 'male',
          material: 'polyester',
          color: ['red', 'blue', 'black'],
          rating: 4.0,
        },
        {
          id_product: 3414,
          product_name: 'Mango People T-shirt',
          brend: 'Bohemian',
          price: 52.92,
          img: 'Image_placeholder_9.png',
          size: ['XXS'],
          gender: 'male',
          material: 'polyester',
          color: ['red', 'blue', 'black'],
          rating: 4.5,
        },

        {
          id_product: 3156,
          product_name: 'BLAZE LEGGINGS',
          brend: 'Bohemian',
          price: 41.01,
          img: 'Layer_44.png',
          size: ['XXS', 'XS', 'M', 'L', 'XL'],
          gender: 'female',
          material: 'polyester',
          color: ['red', 'blue', 'black'],
          rating: 4.5,
        },

        {
          id_product: 3131,
          product_name: 'ALEXA SWEATER',
          brend: 'Bohemian',
          price: 50.00,
          img: 'Layer_45.png',
          size: ['XXS', 'XS', 'M', 'L', 'XL'],
          gender: 'female',
          material: 'cotton',
          color: ['red', 'blue', 'black'],
          rating: 4.0,
        },
        {
          id_product: 325,
          product_name: 'AGNES TOP',
          brend: 'Bohemian',
          price: 53.91,
          img: 'Layer_46.png',
          size: ['XXS', 'XS', 'M', 'L', 'XL'],
          gender: 'female',
          material: 'polyester',
          color: ['red', 'blue', 'black'],
          rating: 5.0,
        },
        {
          id_product: 3357,
          product_name: 'SYLVA SWEATER',
          brend: 'Bohemian',
          price: 57.10,
          img: 'Layer_47.png',
          size: ['XXS', 'XS', 'M', 'L', 'XL'],
          gender: 'female',
          material: 'cotton',
          color: ['red', 'blue', 'black'],
          rating: 4.0,
        },
      ], */

    };
  },
  computed: {
    ...mapGetters(['products']),
  },
  methods: {
    ...mapActions(['getProductsList']),
  },
  created() {
    // console.log(JSON.stringify(this.products));
    this.getProductsList();
  },
  mounted() {

  },

};
</script>

<style scoped lang="scss">
</style>
