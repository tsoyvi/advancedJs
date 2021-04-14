<template>
    <div class="product_description container">
        <div class="product_description-container">

            <h4 class="product_description-h4" v-if ="product.gender == 'female'">
                WOMEN COLLECTION
            </h4>
            <h4 class="product_description-h4" v-else>
                MEN COLLECTION
            </h4>
            <h2 class="product_description-h2">Moschino Cheap And Chic</h2>
            <p class="product_description-text">
                Compellingly actualize fully researched processes before proactive outsourcing.
                Progressively syndicate
                collaborative architectures before cutting-edge services.
                Completely visualize parallel core
                competencies rather than exceptional portals.
            </p>

            <div class="product_description-mat-dis">
                MATERIAL: <span>{{singleProduct.material}}</span>
            </div>
            <div class="product_description-mat-dis">
                DESIGNER: <span>{{product.brend}}</span>
            </div>

            <p class="product_description-price">${{product.price}}</p>

            <div class="product_description-selector">
                 <div class="product_description-selector-select">
                 <label for="color">CHOOSE COLOR</label>
                    <selector :id="'color'" :styleList="'select-update'" :list="product.color" >
                    </selector>

                </div>

              <div class="product_description-selector-select">
                    <label for="size">CHOOSE SIZE</label>
                    <selector :id="'size'" :styleList="'select-update'" :list="product.size" >
                    </selector>
                </div>

                <div class="product_description-selector-select">
                    <label for="quantity">QUANTITY</label>
                    <selector :id="'quantity'" :styleList="'select-update'" :list="10">
                    </selector>
                </div>

            </div>

            <div class="add-to-cart-button-div">
                <button class="add-to-cart button" @click="addProduct(singleProduct)">
                    <img src="img/basket.png" alt="basket.png">
                    Add to Cart
                </button>
            </div>

        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Selector from '@/components/blocks/Selector.vue';

export default {
  name: 'SingleDescription',
  props: ['product'],
  components: {
    Selector,
  },
  computed: {
    ...mapGetters(['singleProduct']),
  },

  methods: {
    ...mapActions(['addProduct', 'loadProduct']),
  },

  created() {
    this.loadProduct(this.product);
  },

};
</script>
