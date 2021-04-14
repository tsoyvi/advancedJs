<template>
    <nav class="main-menu-nav container">
    <ul class="main-menu">
        <li>
            <router-link to="/" class="main-menu-link">Home</router-link>
        </li>
        <li>
            <router-link :to="{name: 'ProductsMan',}"
                class="main-menu-link">Man
            </router-link>
        </li>
        <li>
            <router-link :to="{name: 'ProductsWomen',}"
                class="main-menu-link">Women
            </router-link>
        </li>
        <li>
            <router-link to="/kids" class="main-menu-link">Kids</router-link>
        </li>
        <li>
            <router-link to="/accoseriese" class="main-menu-link">Accoseriese</router-link>
        </li>
        <li>
            <router-link to="/featured" class="main-menu-link">Featured</router-link>
        </li>
        <li>
            <router-link to="/hotDeals" class="main-menu-link">Hot Deals</router-link>
        </li>
    </ul>
</nav>
</template>
