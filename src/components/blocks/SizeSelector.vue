<template>
    <ul>
            <li class="selector">
                <p class="selector-header">Size</p>
                <div class="selector-size">

                    <div v-for="(size, index) of sizesList" :key="index">
                        <label :for="size"><input :id="size" type="checkbox"
                            @change="filterSize({ size: sizeChecked })"
                            v-bind:value="size"
                            v-model="sizeChecked">
                         {{size}}
                        </label>
                    </div>
                </div>
          </li>
    </ul>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

// v-model="selectedUsers"

export default {
  name: 'SizeSelector',
  data() {
    return {
      sizeChecked: [],
    };
  },
  computed: {
    ...mapGetters(['sizesList']),
  },
  methods: {
    ...mapActions(['filterSize']),
  },
  created() {
  },
};
</script>
