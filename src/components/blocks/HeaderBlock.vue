<template>
    <header class="header">
    <div class="container header-container">
        <div class="header-logo">
            <a href="index.html" class="logo">
                <img src="/img/logo.png" alt="logo.png">BRAN<span>D</span></a>
        </div>

        <div class="search">
            <form action="#!" method="post" class="search">
                <div class="browse_button-block">
                    <button class="browse_button">
                        Browse <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </button>

                    <ul class="menu-drop-down">
                        <li>
                            <p class="menu-drop-down-header">Women</p>
                            <ul class="menu-drop-down-sub">
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Dresses
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Tops
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Sweaters/Knits
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Jackets/Coats
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Blazers
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Denim
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Leggings/Pants
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Skirts/Shorts
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Accessories
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Bags/Purses
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Swimwear/Underwear
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">Nightwear</a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">Shoes</a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">Beauty</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p class="menu-drop-down-header">Men</p>
                            <ul class="menu-drop-down-sub">
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Tees/Tank tops
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Shirts/Polos
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Sweaters
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Sweatshirts/Hoodies
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Blazers
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="menu-drop-down-link menu-link">
                                        Jackets/vests
                                    </a>
                                </li>
                            </ul>

                        </li>
                    </ul>

                </div>

                <input type="text" class="browse-input" value="" placeholder="Search for Item...">
                <button class="search_button button">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
        </div>

        <div class="login">

        <button class="btn-cart" type="button" @click="showCart = !showCart">
            <img src="/img/basket.png" alt="img/basket.png">
        </button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item"
                v-for="item of cartItems"
                :key="item.id_product"
                :cart-item="item"
                :img="imgCart"
                @remove="remove">
                </cart-item>
            </div>

            <a href="shopping-cart.html" class="basket button">
                <img src="/img/basket.png" alt="img/basket.png">
            </a>

            <div class="cart-button-block">
                <button class="account_button">
                    My Account <i class="fa fa-caret-down" aria-hidden="true"></i>
                </button>

                <div class="cart-button-menu-block">
                    <ul class="cart-button-menu">
                        <li class="cart-button-menu-li">
                            <img src="img/rectangle-24.png" alt="rectangle-24.png">
                            <div class="cart-button-menu-block-text">
                                <p class="cart-button-menu-block-header">Rebox Zane</p>
                                <p class="stars">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                </p>
                                <p class="cart-button-menu-block-price">1 x $250</p>
                            </div>
                            <div>
                                <button class="cart-button-menu-button-cancel">
                                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                                </button>
                            </div>
                        </li>

                        <li class="cart-button-menu-li">
                            <img src="img/rectangle-24-1.png" alt="rectangle-24-1.png">
                            <div class="cart-button-menu-block-text">
                                <p class="cart-button-menu-block-header">Rebox Zane</p>
                                <p class="stars">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                </p>
                                <p class="cart-button-menu-block-price">1 x $250</p>
                            </div>
                            <div>
                                <button class="cart-button-menu-button-cancel">
                                    <i class="fa fa-times-circle"
                                        aria-hidden="true"></i>
                                </button>
                            </div>
                        </li>
                    </ul>

                    <div class="cart-button-menu-price cart-button-menu">
                        <p>TOTAL</p>
                        <p>$500.00</p>
                    </div>

                    <div class="cart-button-menu-button cart-button-menu">
                        <div>
                            <a href="checkout.html" class="cart-button-menu-checkout button">
                                Checkout
                            </a>
                        </div>
                        <div>
                            <a href="shopping-cart.html"
                                class="cart-button-menu-checkout go-to-cart button">
                                Go to cart
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
      showCart: false,
    };
  },
};
</script>
