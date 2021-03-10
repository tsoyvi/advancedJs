const app = new Vue({
    el: '#app',
    data: {
        someStr: 'Hello World!!!',
        counter: 0,
        tabs: ['one', 'two', 'three'],
        currentTab: 'one',
    },
    methods: {
        clickHandler() {
            // console.log('click!');
        },
        increase() {
          this.counter++;
        },
    },
    computed: {
        currentComponent() {
            // return `component-${this.currentTab}`;

            switch (this.currentTab) {
                case 'one': return 'component-one';
                case 'two': return 'component-two';
                case 'three': return 'component-three';
                default: return 'component-one';
            }
        },
    },
    mounted() {
        // console.log(this);
        // this.$refs.someEl.sayHello();
    },
});
