<template>
  <div>

    <bread-crumbs-block></bread-crumbs-block>
    <div v-if="product">
        <single-slider :productImage="product.img"></single-slider>
        <single-description :product="product"></single-description>
    </div>
    <div v-else class="container container-items">
        <img src="@/assets/img/rectangle_23.png" alt ="rectangle_23.png">
        <h1>Товар не найден</h1>
        <router-link to="/products" class="">К списку товаров</router-link>
    </div>
  </div>
</template>

<script>

import BreadCrumbsBlock from '@/components/blocks/BreadCrumbsBlock.vue';
import SingleSlider from '@/components/blocks/SingleSlider.vue';
import SingleDescription from '@/components/SingleDescription.vue';

export default {
  name: 'SinglePage',
  props: ['product'],
  components: {
    BreadCrumbsBlock,
    SingleSlider,
    SingleDescription,

  },

};
</script>
