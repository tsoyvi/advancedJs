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
        <cart></cart>

    </div>
</header>
</template>

<script>
import Cart from '../CartList.vue';

export default {
  components: {
    Cart,
  },

};
</script>
