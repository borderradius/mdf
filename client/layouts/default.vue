<template>
  <div>
    <!-- <Header /> -->
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from '../components/header.vue';

@Component({
  components: {
    Header,
  },
})
export default class extends Vue {}
</script>

<style scoped></style>
