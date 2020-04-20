<template>
  <div>
    <h5
      class="mb-4 text-gray-500 uppercase tracking-wide font-bold text-sm px-4"
    >
      Contents
    </h5>
    <ul class="overflow-hidden">
      <li v-if="lists.length === 0">
        <noData />
      </li>
      <li
        v-for="(contentInfo, index) in lists"
        v-else="lists.length"
        :key="index"
        class="w-1/4 px-4 float-left mb-6 h-380"
      >
        <!-- 즐겨찾기만 보여주기
        :class="{ hidden: !contentInfo.isFavor }" -->
        <card
          :contentInfo="contentInfo"
          :idx="index"
          v-on:showPopup="detailView"
        />
      </li>
      <!-- v-on:addFavor="addFavor" -->
    </ul>
    <modal width="90%" height="100%" name="contents-detail">
      <customModal :contentInfo="popupContentInfo" v-on:close="closeModal" />
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
import { mapState } from 'vuex';
import card from '../components/card.vue';
import customModal from '../components/customModal.vue';
import noData from '../components/nodata.vue';
// eslint-disable-next-line no-unused-vars
import { take, L, go, add, reduce, map, flatten } from '../plugins/fx';

export default {
  components: {
    card,
    customModal,
    noData,
  },
  data() {
    return {
      property: [],
      popupContentInfo: {},
    };
  },
  computed: {
    ...mapState({
      lists: state => state.contents.lists,
    }),
  },
  async asyncData({ store }) {
    await store.dispatch('contents/lists');
  },
  mounted() {
    // await this.$store.dispatch('contents/lists');
    console.log(this.lists);
  },
  methods: {
    detailView(contentInfo) {
      this.popupContentInfo = contentInfo;
      this.$modal.show('contents-detail');
    },
    closeModal() {
      this.$modal.hide('contents-detail');
    },
    // addFavor(content) {
    //   console.log(content);
    //   console.log(this.lists);
    // },
    // setBodyScroll(scrollable = true) {
    //   const body = document.querySelector('body');
    //   if (scrollable) {
    //     body.style.position = '';
    //     body.style.overflow = '';
    //     body.style.width = '';
    //     body.style.height = '';
    //   } else {
    //     body.style.position = 'fixed';
    //     body.style.overflow = 'hidden';
    //     body.style.width = '100%';
    //     body.style.height = '100%';
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped></style>
