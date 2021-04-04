<template>
    <header class="header">
    <div class="container header-container">
        <div class="header-logo">
            <router-link to="/" class="logo">
                <img src="/img/logo.png" alt="logo.png">BRAN<span>D</span>
            </router-link>
        </div>

        <div class="search">
            <!--<form action="#!" method="post" class="search">-->
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
                            </ul>

                        </li>
                    </ul>

                </div>

                <input type="text" class="browse-input" value=""
                    placeholder="Search for Item..." v-model="seachString"
                    @input="search(seachString)">
                <button class="search_button button" @click="search(seachString)">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            <!--</form>-->
        </div>
        <cart></cart>

    </div>
</header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Cart from '../CartList.vue';

export default {
  components: {
    Cart,
  },

  data() {
    return {
      seachString: null,
    };
  },

  computed: {
    ...mapGetters(['products']),
  },

  methods: {
    ...mapActions(['search']),
  },

};
</script>
