<template>
  <select :id="id" :class="styleList"  @change="selectorRefresh({id,selected})" v-model="selected">
        <option v-for="(item, index) of list" :key="index">
                        {{ item }}
        </option>
  </select>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Selector',
  props: ['id', 'styleList', 'list'],

  data() {
    return {
      selected: null,
    };
  },

  computed: {
    ...mapGetters(['singleProduct']),
  },

  methods: {
    ...mapActions(['addProduct', 'loadProduct', 'selectorRefresh', 'selectRefresh']),
  },

  created() {
    if (Array.isArray(this.list)) {
      [this.selected] = this.list;
    } else {
      this.selected = 1;
    }
  },
};
</script>
