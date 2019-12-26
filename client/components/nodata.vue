<template>
  <div class="h-screen">
    <Lottie :options="defaultOptions" :height="300" :width="400" />
    <div class="w-300 m-auto">
      <h1 class="text-3xl font-semibold text-red-500">Ooops No data</h1>
      <p class="text-gray-500">There's no content you're looking for.</p>
      <p class="text-gray-500">Sorry : (</p>
    </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie';
import * as animationData from '../assets/lottie/nodata.json';

export default {
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
    };
  },
};
</script>

<style lang="scss" scoped></style>
