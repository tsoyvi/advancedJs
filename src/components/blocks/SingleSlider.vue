<template>
  <div class="slider-single-page">
     <button class="slider-arrow-button button">
         <i class="fa fa-chevron-left" aria-hidden="true"></i>
     </button>
     <img :src="require(`@/assets/img/${productImage}`)" :alt ="productImage">
     <button class="slider-arrow-button button">
         <i class="fa fa-chevron-right" aria-hidden="true"></i>
     </button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  name: 'ProductItem',
  props: ['productImage'],

};
</script>
