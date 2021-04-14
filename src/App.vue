<template>
  <div id="app">

    <header-block></header-block>
    <main-menu></main-menu>

      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Product</router-link>-->

    <router-view />
    <subscription-block></subscription-block>
    <footer-block></footer-block>
  </div>
</template>

<script>
import MainMenu from '@/components/blocks/MainMenu.vue';
import HeaderBlock from '@/components/blocks/HeaderBlock.vue';

import SubscriptionBlock from '@/components/blocks/SubscriptionBlock.vue';
import FooterBlock from '@/components/blocks/FooterBlock.vue';

export default {
  components: {
    MainMenu,
    HeaderBlock,

    SubscriptionBlock,
    FooterBlock,

  },
  methods: {

    sumPrice(list) {
      console.log(list);
      return list.reduce((sum,
        { price, quantity }) => sum + price * quantity, 0).toFixed(2);
    },

  },
};

</script>
