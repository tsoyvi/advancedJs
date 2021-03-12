Vue.component('error', {

    data() {
        return {
            showVisible: false,
        }
    },

    methods: {
        showError() {
            this.showVisible = true;
        },

        unShowError() {
            this.showVisible = false;
        },

    },

    template: `
    <div class="error" v-show="showVisible">
        Ошибка подключения к серверу! 
        <button @click="unShowError"> Ok </button>
    </div>
    `
});


