<template>
    <tr>
                    <td><img :src="require(`@/assets/img/${cartItem.img}`)"
                            :alt ="cartItem.img">
                    </td>
                    <td>
                        <p class="cart-table-product-name">{{cartItem.product_name}}</p>
                        <p class="cart-table-product-description">
                            Color: <span>{{cartItem.color}}</span>
                        </p>
                        <p class="cart-table-product-description">Size: <span>
                            {{cartItem.size}}</span>
                        </p>
                    </td>

                    <td>{{cartItem.price}}</td>
                    <td><input type="number" name="num0" v-model.number="cartItem.quantity"
                        class="cart-table-product-count" max="99" min="1">
                    </td>
                    <td>FREE</td>
                    <td> {{(cartItem.quantity * cartItem.price).toFixed(2)}}</td>
                    <td>
                        <button>
                            <i class="fa fa-times-circle" aria-hidden="true"
                                @click="$emit('remove', cartItem)">
                            </i>
                        </button>
                    </td>
                </tr>
</template>

<script>

export default {
  name: 'ShoppingRow',
  props: ['cartItem'],
};

</script>
