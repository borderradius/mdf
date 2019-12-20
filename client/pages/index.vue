<template>
  <div>
    <h5
      class="mb-4 text-gray-500 uppercase tracking-wide font-bold text-sm px-4"
    >
      Contents
    </h5>
    <ul class="overflow-hidden">
      <li
        v-for="(i, index) in property"
        :key="index"
        class="w-1/4 px-4 float-left mb-6"
      >
        <card :property="i" :idx="index" v-on:showPopup="detailView" />
      </li>
      <!-- <li class="w-1/4 px-4">
        <card :property="property" />
      </li>
      <li class="w-1/4 px-4">
        <card :property="property" />
      </li>
      <li class="w-1/4 px-4">
        <card :property="property" />
      </li> -->
    </ul>
    <modal name="hello-world">
      Hello, world!
    </modal>
  </div>
  <!-- <div class="container"> -->
  <!-- <div class="flex bg-gray-100">
      <div
        class="p-8 py-12 bg-white max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
      >
        <div class="xl:max-w-lg">
          <img class="h-10" src="~assets/img/logo.svg" alt="logo" />
          <img
            class="mt-6 rounded-sm shadow-xl sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="~assets/img/beach-work.jpg"
            alt="woman"
          />
          <h1
            class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            You can work from anywhere. <br class="hidden lg:inline" />
            <span class="text-brand-blue">Take advantage of it.</span>
          </h1>
          <p class="mt-2 text-gray-600 sm:text-xl sm:mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptates deleniti, fuga veniam ea eius dolorem animi hic.
            Voluptatum, harum quis. Praesentium dignissimos debitis modi magni
            culpa excepturi nulla voluptate.
          </p>
          <div class="mt-4 sm:mt-6">
            <a href="#!" class="btn">Book you escape</a>
            <a href="#!" class="btn btn-gray ml-2">learn more</a>
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/2 lg:relative">
        <img
          class="absolute inset-0 h-full w-full object-cover object-center"
          src="~assets/img/beach-work.jpg"
          alt="woman"
        />
      </div>
    </div> -->
  <!-- <card :property="property" class="my-3" /> -->
  <!-- <div>
    <h1>{{ title }}</h1>
    <hr />
    <button @click="addInfo" class="btn btn-blue">
      add info
    </button>
    <button class="btn btn-gray">hahah</button>
    <ul>
      <li v-for="(list, index) in lists" :key="index">
        {{ list.name }}, {{ list.tel }}
        <button @click="delInfo(list.no)" class="btn btn-red">
          delete
        </button>
      </li>
    </ul>
  </div> -->
  <!-- </div> -->
</template>

<script>
import { contentsData } from '../static/data.js';
import card from '../components/card.vue';
import customModal from '../components/customModal.vue';

export default {
  components: {
    card,
  },
  data() {
    return {
      property: [],
      // property: {
      // imageUrl:
      //   'http://www.cjem.net/resources/img/201812/english_gem_slider_03.jpg',
      // imageAlt: 'modern house',
      // beds: 3,
      // baths: 2,
      // title: 'Modern exclutive home in the heart of historic Los Angeles',
      // priceInCents: 190000,
      // formattedPrice: '$1,900.00',
      // reviewCount: 34,
      // rating: 4,
      // },
    };
  },
  created() {
    this.property = contentsData;
  },
  methods: {
    detailView(data) {
      console.log('view clicked', data);
      this.$modal.show(customModal, data, {
        clickToClose: false,
        width: '550px',
        height: 'auto',
        name: 'popLayerViewAlbumShot',
        scrollable: true,
        adaptive: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
