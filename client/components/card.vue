<template>
  <div>
    <div class="relative pb-5/6">
      <!-- not support IE11 -->
      <img
        :src="require(`@/assets/img/${contentInfo.thumbnailFileName}`)"
        :alt="contentInfo.contentsName"
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
            {{ property.beds }} beds &bull; {{ property.baths }} baths
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
          {{ property.title }}
        </h4>
        <div class="mt-1">
          {{ property.formattedPrice }}
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
            >{{ property.reviewCount }} reviews</span
          >
        </div>
      </div>
    </div> -->
    <div class="relative px-2 -mt-16">
      <a
        @click="toggleFavor"
        href="javascript:;"
        class="absolute w-5 h-5 top-0 right-0 text-center favorite"
      >
        <svg
          ref="favorBtn"
          :class="isFavor ? 'text-yellow-400' : 'text-gray-400'"
          class="h-5 w-5 fill-current m-auto"
          viewBox="0 0 20 20"
        >
          <path
            d="M10,1.3l2.388,6.722H18.8l-5.232,3.948l1.871,6.928L10,14.744l-5.438,4.154l1.87-6.928L1.199,8.022h6.412L10,1.3z"
          />
        </svg>
      </a>
      <div class="p-4 bg-white rounded-lg shadow-lg">
        <div class="flex items-center">
          <div
            class="text-gray-600 text-sm uppercase font-semibold tracking-wide"
          >
            <!-- {{ property.beds }} beds &bull; {{ property.baths }} baths -->
            {{ contentInfo.projectName }}
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
          {{ contentInfo.contentsName }}
        </h4>
        <div class="mt-1 text-gray-500 text-xs">
          {{ strContentsType }}
          <!-- {{ property.formattedPrice }}
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
            >{{ property.reviewCount }} reviews</span
          > -->
          <div class="mt-1 leading-tight">
            <span
              v-for="(item, index) in contentInfo.contentsElements"
              :key="index"
              class="inline-block mr-1 text-xs text-gray-600"
              >#{{ item }}</span
            >
          </div>
        </div>
        <div class="border-t border-gray-400 pt-2 mt-3 overflow-hidden">
          <div>
            <span
              v-for="(item, index) in contentInfo.contentsFields"
              :key="index"
              class="inline-block mr-1 bg-teal-200 text-teal-800 text-xs px-2 rounded"
              >{{ item }}</span
            >
            <!-- <span
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
            > -->
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
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { join } from '../plugins/fx';

export default {
  props: {
    contentInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  data() {
    return {
      isFavor: this.contentInfo.isFavor,
    };
  },

  computed: {
    ...mapState({
      isLoggedIn: state => state.auth.loggedIn,
    }),
    strContentsType() {
      return join('/', this.contentInfo.contentsType);
    },
  },

  methods: {
    show() {
      const popW = 1000;
      let popH;
      this.contentInfo.projectName === 'Musical English'
        ? (popH = Math.ceil((popW / 79) * 50))
        : (popH = Math.ceil((popW / 6.2) * 4.13));

      const winW = window.screen.width;
      const winH = window.screen.height;
      const popX = winW / 2 - popW / 2;
      const popY = winH / 2 - popH / 2;

      window.open(
        this.contentInfo.dataUrl,
        '_blank',
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=${popW}, height=${popH}, left=${popX} top=${popY}`,
      );
      // if (!this.isLoggedIn) {
      //   alert('required login!');
      //   return false;
      // }
      // this.$emit('showPopup', this.contentInfo);
    },

    /**
     * 즐찾상태이면 즐찾해제
     * 즐찾해제상태면 즐찾추가
     */
    toggleFavor() {
      let goPath;
      this.isFavor = !this.isFavor;
      // console.log(this.isFavor);
      // const favorBtn = this.$refs.favorBtn;
      // const favorState = favorBtn.classList.contains('text-yellow-400');
      // 없으면 주고 있으면 빼.
      if (!this.isFavor) {
        // favorBtn.classList.remove('text-yellow-400');
        goPath = 'delete';
      } else {
        // favorBtn.classList.add('text-yellow-400');
        goPath = 'add';
      }
      // 즐찾 add, delete 해
      this.$store.dispatch(`contents/${goPath}Favor`, {
        projectName: this.contentInfo.projectName,
        contentsNo: this.contentInfo.contentsNo,
      });
    },
  },
};
</script>

<style scoped></style>
