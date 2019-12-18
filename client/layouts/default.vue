<template>
  <div>
    <!-- <Header /> -->
    <navbar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import Header from '../components/header.vue';
import navbar from '../components/navbar.vue';

@Component({
  components: {
    // Header,
    navbar,
  },
})
export default class extends Vue {}
</script>

<style scoped></style>
