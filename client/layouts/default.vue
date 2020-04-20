<template>
  <div class="flex">
    <div class="w-1/6">
      <leftMenu />
    </div>
    <div class="w-5/6">
      <navbar />
      <div v-on:contextmenu.prevent="ctxStop" class="container p-4">
        <nuxt />
      </div>
      <mainFooter />
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue';
import mainFooter from '../components/mainFooter.vue';
import leftMenu from '../components/leftMenu.vue';

export default {
  components: {
    navbar,
    mainFooter,
    leftMenu,
  },
  methods: {
    ctxStop() {
      // console.log('??');
    },
  },
};
</script>

<style scoped></style>
