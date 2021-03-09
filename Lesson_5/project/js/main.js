const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        imgCatalog: 'https://placehold.it/200x150',
        products: [],
        filterlist: [],
        cartItems: [],
        imgCart: 'https://placehold.it/50x37',
        cartVisible: false,
        searchLine: '',

    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },

        addProduct(product) {

            this.getJson(API + '/addToBasket.json')
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(prod => prod.id_product === product.id_product);

                        if (find) {
                            find.quantity++;
                        } else {

                            /* let prod = {
                                 id_product: product.id_product,
                                 price: +product.price,
                                 product_name: product.product_name,
                                 quantity: 1,
                               };
                             */

                            let prod = Object.assign({ quantity: 1 }, product)
                            this.cartItems.push(prod);
                        }

                    } else {
                        alert('Error');
                    }
                });

        },

        removeProduct(product) {
            this.getJson(API + '/deleteFromBasket.json')
                .then(data => {
                    if (data.result === 1) {

                        let find = this.cartItems.find(prod => prod.id_product === product.id_product);

                        if (find.quantity > 1) { // если товара > 1, то уменьшаем количество на 1
                            find.quantity--;
                        } else { // удаляем
                            this.cartItems.splice(this.cartItems.indexOf(find), 1);
                        }

                    } else {
                        alert('Error');
                    }
                });
        },

        filterGoods(searchField) {
            event.preventDefault();
            let regexp = new RegExp(this.searchLine, 'i');
            this.filterlist = this.products.filter(elem => regexp.test(elem.product_name));
        },


    },

    beforeCreate() {
        // console.log('beforeCreate');
    },

    created() {
        //  console.log('created');
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filterlist.push(el);
                }
            });
    },



    beforeMount() {
        // console.log('beforeMount');
    },
    mounted() {
        // console.log('mounted');
    },
    beforeUpdate() {
        // console.log('beforeUpdate');
    },
    updated() {
        // console.log('updated');
    },
    beforeDestroy() {
        // console.log('beforeDestroy');
    },
    destroyed() {
        // console.log('beforeDestroy');
    }
});
