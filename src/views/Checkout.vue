<template>
  <div>

    <bread-crumbs-block></bread-crumbs-block>
    <checkout-form></checkout-form>
  </div>
</template>

<script>

import BreadCrumbsBlock from '@/components/blocks/BreadCrumbsBlock.vue';
import CheckoutForm from '@/components/CheckoutForm.vue';

export default {
  name: 'Checkout',
  components: {
    BreadCrumbsBlock,
    CheckoutForm,

  },
};
</script>
