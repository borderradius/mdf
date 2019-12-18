<template>
  <div class="bg-white border rounded-lg w-1/4 overflow-hidden">
    <img :src="houseInfo.imageUrl" :alt="houseInfo.imageAlt" />
    <div class="p-6">
      <div class="flex items-center">
        <span
          class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full font-semibold uppercase tracking-wide"
          >New</span
        >
        <div
          class="ml-2 text-gray-600 text-sm uppercase font-semibold tracking-wide"
        >
          {{ houseInfo.beds }} beds &bull; {{ houseInfo.baths }} baths
        </div>
      </div>
      <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
        {{ houseInfo.title }}
      </h4>
      <div class="mt-1">
        {{ houseInfo.formattedPrice }}
        <span class="text-gray-600 text-sm">/ wk</span>
      </div>
      <div class="mt-2 flex items-center">
        <svg
          v-for="i in 5"
          :key="i"
          :class="i <= property.rating ? 'text-teal-400' : 'text-gray-300'"
          class="h-4 w-4 fill-current"
          viewBox="0 0 20 20"
        >
          <path
            d="M10,1.3l2.388,6.722H18.8l-5.232,3.948l1.871,6.928L10,14.744l-5.438,4.154l1.87-6.928L1.199,8.022h6.412L10,1.3z"
          />
        </svg>
        <span class="ml-2 text-gray-600 text-sm"
          >{{ houseInfo.reviewCount }} reviews</span
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
