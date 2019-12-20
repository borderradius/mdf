<template>
  <div class="flex">
    <div class="w-1/6">
      <leftMenu />
    </div>
    <div class="w-5/6">
      <navbar />
      <div class="container p-4">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue';
import leftMenu from '../components/leftMenu.vue';

export default {
  components: {
    navbar,
    leftMenu,
  },
};
</script>

<style scoped></style>
