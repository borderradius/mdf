<template>
  <div class="bg-white border rounded-lg w-1/4 overflow-hidden">
    <img :src="houseInfo.imageUrl" :alt="houseInfo.imageAlt" />
    <div class="p-6">
      <div class="text-gray-600 text-sm uppercase font-semibold tracking-wide">
        {{ houseInfo.beds }} beds &bull; {{ houseInfo.baths }} baths
      </div>
      <h4 class="font-semibold text-lg leading-tight truncate">
        {{ houseInfo.title }}
      </h4>
      <div class="mt-1">
        {{ houseInfo.formattedPrice }}
        <span class="text-gray-600 text-sm">/ wk</span>
      </div>
      <div class="mt-4">
        <span class="text-teal-600 font-semibold"
          >{{ houseInfo.rating }}/5 start</span
        >
        <span class="text-gray-600 text-sm"
          >(based on {{ houseInfo.reviewCount }} reviews)</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import { House } from '../types/index';

@Component({})
export default class Test extends Vue {
  // @Prop({ type: Object }) private property!: House;
  @PropSync('property', { type: Object }) houseInfo!: House;
}
</script>

<style scoped></style>
