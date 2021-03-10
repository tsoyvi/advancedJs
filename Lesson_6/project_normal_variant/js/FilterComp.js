Vue.component('filter-products', {

    data() {
        return {
            //  пока пусто
        }
    },

    methods: {
        // пока методов нет
    },

    template: `
        <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter">
                    <input type="text" class="search-field" v-model="$root.userSearch" >
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
        </form>
    `
});