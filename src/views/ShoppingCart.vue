<template>
  <div>

    <bread-crumbs-block></bread-crumbs-block>
    <shopping-cart-table></shopping-cart-table>

  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';
import BreadCrumbsBlock from '@/components/blocks/BreadCrumbsBlock.vue';
import ShoppingCartTable from '@/components/ShoppingCartTable.vue';

export default {
  components: {
    BreadCrumbsBlock,
    ShoppingCartTable,

  },
};
</script>
