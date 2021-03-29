<template>
    <div class="">
              <!--  <div class="product-bio">
                    <img :src="img" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{cartItem.product_name}}</p>
                        <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
                        <p class="product-single-price">{{cartItem.price}}₽ за единицу</p>
                    </div>
                </div>

                <div class="right-block">
                    <p class="product-price">{{cartItem.quantity*cartItem.price}}₽</p>
                    <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                </div> -->

                    <ul class="cart-button-menu">
                        <li class="cart-button-menu-li">
                            <img :src="require(`../assets/img/${cartItem.img}`)"
                            :alt ="cartItem.img" class="cart-button-menu-img">
                            <div class="cart-button-menu-block-text">
                                <p class="cart-button-menu-block-header">Rebox Zane</p>

                                <p class="stars"> <!--Рейтинг звездочки-->
                                <i class="fa fa-star" aria-hidden="true"
                                    v-for="(star, index) in Math.floor(cartItem.rating)"
                                    :key="index"></i>
                                <i class="fa fa-star-half-o" aria-hidden="true"
                                    v-if="cartItem.rating % 1"></i>
                                </p>

                                <p class="cart-button-menu-block-price">
                                    {{cartItem.quantity}} x ${{cartItem.price.toFixed(2)}}
                                </p>
                            </div>
                            <div>
                                <button class="cart-button-menu-button-cancel"
                                    @click="$emit('remove', cartItem)">
                                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                                </button>
                            </div>
                        </li>

                    </ul>

    </div>

</template>

<script>

export default {
  name: 'CartItem',
  props: ['cartItem'],
};

</script>
