<template>
    <div class="product-filter">
      <brend-selector ></brend-selector>
      <size-selector></size-selector>
      <price-selector></price-selector>
    </div>
</template>

<script>
import BrendSelector from './blocks/BrendSelector.vue';
import SizeSelector from './blocks/SizeSelector.vue';
import PriceSelector from './blocks/PriceSelector.vue';

export default {
  components: {
    BrendSelector,
    SizeSelector,
    PriceSelector,
  },
};
</script>
