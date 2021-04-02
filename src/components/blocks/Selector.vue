<template>
  <select :id="id" :class="styleList">
        <option v-for="(item, index) in list" :key="index" v-bind:value="list[index]">
                        {{ item }}
        </option>
  </select>
</template>

<script>
export default {
  name: 'Selector',
  props: ['id', 'styleList', 'list'],
};
</script>
