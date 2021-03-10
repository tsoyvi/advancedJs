Vue.component('component-one', {
    template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias animi delectus ducimus ex in laudantium, nam qui sunt temporibus veritatis vitae. Aliquam eaque et ipsam nemo odit similique voluptate!</div>`
});
Vue.component('component-two', {
    template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci architecto at aut blanditiis culpa cum dignissimos doloribus eaque, esse hic incidunt laboriosam mollitia nihil, placeat quae qui quidem ut!</div></div>`
});
Vue.component('component-three', {
    template: `<div>Lorem ipsum dolor sit amet, ptate!</div>`
});

const childElement = {
    name: 'child-element',
    template: "<p>I'm a child component</p>",
};

Vue.component('some-el', {
    props: ['title', 'counter', 'increase'],
    components: { childElement },
    data() {
        return {
            // title: 'Hello World!',
        };
    },
    mounted() {
        // console.log(this);
    },
    methods: {
        sayHello() {
            // console.log('Hello!');
            // console.log(this.$parent.someStr);
            // console.log(this.$root.someStr);
        },
    },
    template: `<div>
<!--                <slot>-->
                  <div>{{ title }}</div>
                  <child-element></child-element>
<!--                  <button @click="counter++">ClickMe!</button>-->
<!--                  <button @click="$parent.counter++">ClickMe!</button>-->
<!--                  <button @click="$parent.increase()">ClickMe!</button>-->
<!--                  <button @click="increase()">ClickMe!</button>-->
                  <button @click="$emit('parent-increase')">ClickMe!</button>
                  <p>{{ counter }}</p>
<!--                  <slot name="name">-->
<!--                    <p>Default state</p>                  -->
<!--                  </slot>-->
<!--                </slot>-->
                  <slot name="testSlot">qwe</slot>
               </div>`,
});



// import childElement from './child.js'
// export default {
//     name: 'child-element',
//     template: "<p>I'm a child component</p>",
// };
