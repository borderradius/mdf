<template>
  <div>
    <div class="relative pb-5/6">
      <!-- not support IE11 -->
      <img
        :src="houseInfo.imageUrl"
        :alt="houseInfo.imageAlt"
        class="absolute h-full w-full object-cover rounded-lg shadow-md"
      />
    </div>
    <!-- support IE11 -->
    <!-- <div
      :style="{ backgroundImage: `url('${property.imageUrl}')` }"
      class="h-48 bg-cover bg-center"
    /> -->
    <!-- <div class="relative px-4 -mt-16">
      <div class="p-6 bg-white rounded-lg shadow-lg">
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
    </div> -->
    <div class="relative px-2 -mt-16">
      <div class="p-4 bg-white rounded-lg shadow-lg">
        <div class="flex items-center">
          <!-- <span
            class="inline-block mr-2 bg-teal-200 text-teal-800 text-xs px-2 rounded-full font-semibold uppercase tracking-wide"
            >Video</span
          >
          <span
            class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full font-semibold uppercase tracking-wide"
            >Animation</span
          > -->
          <div
            class="text-gray-600 text-sm uppercase font-semibold tracking-wide"
          >
            <!-- {{ houseInfo.beds }} beds &bull; {{ houseInfo.baths }} baths -->
            musical english
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
          <!-- {{ houseInfo.title }} -->
          Sentence Building
        </h4>
        <div class="mt-1 text-gray-500 text-xs">
          Video / Animation
          <!-- {{ houseInfo.formattedPrice }}
          <span class="text-gray-600 text-sm">/ wk</span> -->
        </div>
        <div class="mt-2">
          <!-- <svg
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
          > -->
          <!-- <div>
            <span
              class="inline-block mr-1 bg-purple-200 text-teal-800 text-xs px-2 rounded-lg"
              >L</span
            >
            <span
              class="inline-block mr-1 bg-purple-200 text-teal-800 text-xs px-2 rounded-lg"
              >R</span
            >
            <span
              class="inline-block mr-1 bg-purple-200 text-teal-800 text-xs px-2 rounded-lg"
              >G</span
            >
            <span
              class="inline-block mr-1 bg-purple-200 text-teal-800 text-xs px-2 rounded-lg"
              >S</span
            >
          </div> -->
          <div class="mt-1 leading-tight">
            <span class="inline mr-1 text-xs text-gray-600">#Phonics</span>
            <span class="inline mr-1 text-xs text-gray-600">#Vocabulary</span>
            <span class="inline mr-1 text-xs text-gray-600">#Sentence</span>
            <span class="inline mr-1 text-xs text-gray-600">#Paragraph</span>
          </div>
        </div>
        <div class="border-t border-gray-400 pt-2 mt-3 overflow-hidden">
          <div>
            <span
              class="inline-block mr-1 bg-teal-200 text-teal-800 text-xs px-2 rounded"
              >L</span
            >
            <span
              class="inline-block mr-1 bg-teal-200 text-teal-800 text-xs px-2 rounded"
              >R</span
            >
            <span
              class="inline-block mr-1 bg-teal-200 text-teal-800 text-xs px-2 rounded"
              >G</span
            >
            <span
              class="inline-block mr-1 bg-teal-200 text-teal-800 text-xs px-2 rounded"
              >S</span
            >
          </div>
          <button
            @click="show"
            class="inline-block uppercase text-xs font-semibold p-1 px-2 rounded-lg hover:text-white hover:bg-indigo-400 float-right focus:outline-none"
          >
            view
          </button>
        </div>
      </div>
    </div>
    <!-- <modal name="hello-world">
      Hello, world!
    </modal> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Prop } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import { House } from '../types/index';

@Component({})
export default class Test extends Vue {
  @Prop({ type: Number }) private idx!: Number;
  @PropSync('property', { type: Object }) houseInfo!: House;

  show() {
    if (this.idx === 1) {
      this.$modal.show('hello-world');
    }
  }
}
</script>

<style scoped></style>
