<template>
  <div>

    <bread-crumbs-block></bread-crumbs-block>
    <shopping-cart-table v-if="cartItems.length"></shopping-cart-table>

    <div v-else class="cart-empty">
        <h1>Корзина пока пуста</h1>
        <router-link to="/products" class="">
        <img src="@/assets/img/rectangle_23.png" alt ="rectangle_23.png"><br>
        К списку товаров</router-link>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BreadCrumbsBlock from '@/components/blocks/BreadCrumbsBlock.vue';
import ShoppingCartTable from '@/components/ShoppingCartTable.vue';

export default {
  components: {
    BreadCrumbsBlock,
    ShoppingCartTable,

  },
  computed: {
    ...mapGetters(['cartItems']),
  },
};
</script>
