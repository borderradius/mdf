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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import navbar from '../components/navbar.vue';
import leftMenu from '../components/leftMenu.vue';

@Component({
  components: {
    navbar,
    leftMenu,
  },
})
export default class extends Vue {}
</script>

<style scoped></style>
