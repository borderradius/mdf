<template>
  <div>
    <!-- <Header /> -->
    <navbar />
    <accountDropdown />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import Header from '../components/header.vue';
import navbar from '../components/navbar.vue';
import accountDropdown from '../components/accountDropdown.vue';

@Component({
  components: {
    // Header,
    navbar,
    accountDropdown,
  },
})
export default class extends Vue {}
</script>

<style scoped></style>
