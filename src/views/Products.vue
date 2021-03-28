<template>
  <div>
    <header-block></header-block>
    <bread-crumbs-block></bread-crumbs-block>
    <products-list></products-list>

    <section class="new-section">
    <benefit-block></benefit-block>
    <subscription-block></subscription-block>
    </section>
    <footer-block></footer-block>

  </div>
</template>

<script>

import ProductsList from '@/components/ProductsList.vue';
import HeaderBlock from '@/components/blocks/HeaderBlock.vue';
import BreadCrumbsBlock from '@/components/blocks/BreadCrumbsBlock.vue';
import BenefitBlock from '@/components/blocks/ВenefitBlock.vue';
import SubscriptionBlock from '@/components/blocks/SubscriptionBlock.vue';
import FooterBlock from '@/components/blocks/FooterBlock.vue';

export default {
  components: {
    HeaderBlock,
    BreadCrumbsBlock,
    ProductsList,
    BenefitBlock,
    SubscriptionBlock,
    FooterBlock,

  },
};
</script>
