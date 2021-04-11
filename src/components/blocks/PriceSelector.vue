<template>
            <ul>
            <li class="selector">
                <p class="selector-header">
                    pRICE
                </p>
                    <div class="range-slider">
                        <input type="range"
                        min="0"
                        :max="maxPriceProducts"
                        step="0.01"
                        v-model.number="minPrice"
                        @change ="setRangeSlider(), filterPrice({ minPrice, maxPrice})"
                        >
                        <input type="range"
                        min="0"
                        :max="maxPriceProducts"
                        step="0.01"
                        v-model.number="maxPrice"
                        @change ="setRangeSlider(), filterPrice({ minPrice, maxPrice})"
                        >
                    </div>
                <div class="selector-price">
                    <p class="selector-price-numbers">${{minPrice}}</p>
                    <p class="selector-price-numbers">${{maxPrice}}</p>
                </div>
            </li>
        </ul>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PriceSelector',
  data() {
    return {
      minPrice: 0,
      maxPrice: 'max',
    };
  },
  computed: {
    ...mapGetters(['maxPriceProducts']),
  },
  methods: {
    ...mapActions(['filterPrice']),
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
  },
  created() { // здесь говно код,
  // с помощью итеравала ждем пока подгрузится массив продуктов и опрееиться maxPriceProducts
  // это нужно чтобы сдвинуть полузунок на мамксимальное значение renge-а
    const Interval = setInterval(() => {
      if (this.maxPrice !== 'max') {
        clearInterval(Interval);
      } else {
        this.maxPrice = this.maxPriceProducts;
      }
    }, 50);
  },

};
</script>
