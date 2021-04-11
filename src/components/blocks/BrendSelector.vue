<template>
    <ul>
            <li class="selector">
                <p class="selector-header">Trending now</p>
                <div class="selector-trending">
                    <div class="selector-trending-button">
                        <div v-for="(brend, index) of brendsList" :key="index">
                            <button class="trending-now-select button"
                            @click="filterBrend({ brend })">
                                {{brend}}
                            </button>
                        </div>

                        <div>
                            <button class="trending-now-select button"
                                @click="filterBrend({ brend: null})">
                                Reset
                            </button></div>
                       <!--<div><button class="trending-now-select button">Lace</button></div>-->
                    </div>
                </div>
            </li>
    </ul>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BrendSelector',

  computed: {
    ...mapGetters(['brendsList']),
  },
  methods: {
    ...mapActions(['filterBrend']),
  },
};
</script>
