<template>
 <section class="">
    <!--<form action="#" method="post">-->
        <div class="cart-table-block container">
            <table class="cart-table">
                <tr>
                    <td>Product Details</td>
                    <td>Product Details</td>
                    <td>unite Price</td>
                    <td>Quantity</td>
                    <td>shipping</td>
                    <td>Subtotal</td>
                    <td>ACTION</td>
                </tr>
                <shopping v-for="item of cartItems"
                        :key="item.id_product"
                        :cartItem="item"
                        @remove="remove">
                </shopping>

            </table>

            <div class="table-buttons">
                <button class="button">cLEAR SHOPPING CART</button>
                <button class="button">cONTINUE sHOPPING</button>
            </div>

            <div class="table-forms-block">

                <div class="table-forms-address">
                    <p class="table-forms-block-header">Shipping Adress</p>
                    <select name="country" id="country" class="table-forms-input select-update">
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Russia">Russia</option>
                        <option value="USA">USA</option>
                    </select>

                    <input type="text" name="State" id="State"
                    placeholder="State" class="table-forms-input">
                    <input type="text" name="Postcode" id="Postcode" placeholder="Postcode / Zip"
                        class="table-forms-input">
                    <div>
                        <button class="table-forms-button button">get a quote</button>
                    </div>
                </div>

                <div class="table-forms-address">
                    <p class="table-forms-block-header">coupon discount</p>
                    <p class="table-forms-block-text">Enter your coupon code if you have one</p>
                    <input type="text" name="discount" id="discount" placeholder="State"
                    class="table-forms-input">
                    <div>
                        <button class="table-forms-button button">Apply coupon</button>
                    </div>
                </div>

                <div class="table-forms-proceed-checkout-block">
                    <div class="table-forms-proceed-checkout-block-sub">
                        <p class="sub-total">Sub total <span>${{sumPrice}}</span> </p>
                        <p class="grand-total">GRAND TOTAL <span>${{sumPrice}}</span></p>
                        <button class="proceed-checkout-button button-magenta">
                            proceed to checkout
                        </button>
                    </div>
                </div>
            </div>

        </div>

    <!--</form>-->

</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Shopping from './blocks/Shopping.vue';

export default {
  components: {
    // BreadCrumbsBlock,
    // ShoppingCartTable,
    Shopping,

  },

  computed: {
    ...mapGetters(['cartItems', 'sumPrice']),
  },

  methods: {
    ...mapActions(['getCartList', 'remove']),

  },

  created() {
    // this.getCartList();
  },
};
</script>
