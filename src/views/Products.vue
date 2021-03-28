<template>
  <div>

    <bread-crumbs-block></bread-crumbs-block>
    <products-list></products-list>

    <benefit-block></benefit-block>

  </div>
</template>

<script>

import ProductsList from '@/components/ProductsList.vue';
import BreadCrumbsBlock from '@/components/blocks/BreadCrumbsBlock.vue';
import BenefitBlock from '@/components/blocks/ВenefitBlock.vue';

export default {
  components: {
    BreadCrumbsBlock,
    ProductsList,
    BenefitBlock,

  },
};
</script>
