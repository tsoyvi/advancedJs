<template>
  <div>
    <promo-block></promo-block>
    <in-trend></in-trend>
    <sale-main-page></sale-main-page>
  </div>
</template>

<script>
import PromoBlock from '@/components/blocks/PromoBlock.vue';
import InTrend from '@/components/blocks/InTrend.vue';
import SaleMainPage from '@/components/blocks/SaleMainPage.vue';

export default {
  components: {
    PromoBlock,
    InTrend,
    SaleMainPage,
  },

};
</script>
