<template>
<section class="section">
    <div class="product container">

        <product-aside></product-aside>

        <div class="option-selected">
            <product-filter></product-filter>
            <filter-sort-block></filter-sort-block>

            <div class="items-arr">
                <product-item v-for="(product, index) of productsFiltered"
                  :product="product" :key="index">
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
  props: ['gender'],
  data() {
    return {

    };
  },

  computed: {
    ...mapGetters(['products', 'productsFiltered']),
  },
  methods: {
    ...mapActions(['getProductsList', 'getGenderProductsList']),
  },
  created() {
    // console.log(JSON.stringify(this.products));
    this.getProductsList(this.gender);
  },
  mounted() {

  },

};
</script>

<style scoped lang="scss">
</style>
