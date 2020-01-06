<template>
  <div id="leftMenu" class="w-1/6 h-screen bg-gray-800">
    <div
      id="leftMenu-header"
      class="px-4 py-3 h-16 bg-white text-white border-r border-gray-300"
    >
      <!-- <h1 class="font-bold text-center text-2xl uppercase">
        mdf logo
      </h1> -->
      <img
        class="h-full object-center m-auto"
        src="~assets/img/logo.jpeg"
        alt="logo"
      />
    </div>
    <div id="leftMenu-content" class="overflow-y-auto">
      <!-- <div class="overflow-y-auto"> -->
      <div class="border-b border-gray-900 py-4">
        <ul class="px-2">
          <li class="py-1 px-2 rounded-lg hover:bg-gray-600">
            <label
              class="inline-flex items-center text-gray-500 font-bold cursor-pointer hover:text-white"
            >
              <input
                @change="getFavorList"
                type="checkbox"
                class="form-checkbox"
                name="favorite"
              />
              <span class="ml-2 text-sm uppercase">favorite</span>
            </label>
          </li>
          <!-- <li
            v-for="(p, index) in project"
            :key="index"
            class="py-1 px-2 rounded-lg hover:bg-gray-600"
          >
            <label
              class="inline-flex items-center text-gray-500 font-bold cursor-pointer hover:text-white"
            >
              <input
                @change="checkChange"
                :value="p"
                type="checkbox"
                class="form-checkbox project"
                name="project"
              />
              <span class="ml-2 text-sm uppercase">{{ p }}</span>
            </label>
          </li> -->
        </ul>
      </div>
      <div class="border-b border-gray-900 py-4">
        <h5
          class="mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm px-4"
        >
          project
        </h5>
        <ul class="px-2">
          <li class="py-1 px-2 rounded-lg hover:bg-gray-600">
            <label
              class="inline-flex items-center text-gray-500 font-bold cursor-pointer hover:text-white"
            >
              <input
                @change="allCheckChange"
                type="checkbox"
                class="form-checkbox"
                name="project"
                value="all"
              />
              <span class="ml-2 text-sm uppercase">all</span>
            </label>
          </li>
          <li
            v-for="(p, index) in project"
            :key="index"
            class="py-1 px-2 rounded-lg hover:bg-gray-600"
          >
            <label
              class="inline-flex items-center text-gray-500 font-bold cursor-pointer hover:text-white"
            >
              <input
                @change="checkChange"
                :value="p"
                type="checkbox"
                class="form-checkbox project"
                name="project"
              />
              <span class="ml-2 text-sm uppercase">{{ p }}</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="border-b border-gray-900 py-4">
        <h5
          class="mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm px-4"
        >
          contents type
        </h5>
        <ul class="px-2">
          <li class="py-1 px-2 rounded-lg hover:bg-gray-600">
            <label
              class="inline-flex items-center text-gray-500 font-bold cursor-pointer hover:text-white"
            >
              <input
                @change="allCheckChange"
                type="checkbox"
                class="form-checkbox"
                name="contentsType"
              />
              <span class="ml-2 text-sm uppercase">all</span>
            </label>
          </li>
          <li
            v-for="(t, index) in contentsType"
            :key="index"
            class="py-1 px-2 rounded-lg hover:bg-gray-600"
          >
            <label
              class="inline-flex items-center text-gray-500 font-bold cursor-pointer hover:text-white"
            >
              <input
                @change="checkChange"
                :value="t"
                type="checkbox"
                class="form-checkbox contentsType"
                name="contentsType"
              />
              <span class="ml-2 text-sm uppercase">{{ t }}</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="border-b border-gray-900 py-4">
        <h5
          class="mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm px-4"
        >
          contents elements
        </h5>
        <ul class="px-2">
          <li class="py-1 px-2 rounded-lg hover:bg-gray-600">
            <label
              class="inline-flex items-center text-gray-500 font-bold cursor-pointer hover:text-white"
            >
              <input
                @change="allCheckChange"
                type="checkbox"
                class="form-checkbox"
                name="contentsElements"
              />
              <span class="ml-2 text-sm uppercase">all</span>
            </label>
          </li>
          <li
            v-for="(e, index) in contentsElements"
            :key="index"
            class="py-1 px-2 rounded-lg hover:bg-gray-600"
          >
            <label
              class="inline-flex items-center text-gray-500 font-bold cursor-pointer hover:text-white"
            >
              <input
                @change="checkChange"
                :value="e"
                type="checkbox"
                class="form-checkbox contentsElements"
                name="contentsElements"
              />
              <span class="ml-2 text-sm uppercase">{{ e }}</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="border-b border-gray-900 py-4">
        <h5
          class="mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm px-4"
        >
          contents fields
        </h5>
        <ul class="px-2">
          <li class="py-1 px-2 rounded-lg hover:bg-gray-600">
            <label
              class="inline-flex items-center text-gray-500 font-bold cursor-pointer hover:text-white"
            >
              <input
                @change="allCheckChange"
                type="checkbox"
                class="form-checkbox"
                name="contentsFields"
              />
              <span class="ml-2 text-sm uppercase">all</span>
            </label>
          </li>
          <li
            v-for="(f, index) in contentsFields"
            :key="index"
            class="py-1 px-2 rounded-lg hover:bg-gray-600"
          >
            <label
              class="inline-flex items-center text-gray-500 font-bold cursor-pointer hover:text-white"
            >
              <input
                @change="checkChange"
                :value="f"
                type="checkbox"
                class="form-checkbox contentsFields"
                name="contentsFields"
              />
              <span class="ml-2 text-sm uppercase">{{ f }}</span>
            </label>
          </li>
        </ul>
      </div>
      <!-- </div> -->
    </div>
    <div
      id="leftMenu-footer"
      class="absolute h-16 bottom-0 bg-gray-900 w-full py-3 px-4"
    >
      <button
        @click="goSearch"
        class="block text-white bg-indigo-500 px-4 py-2 rounded-lg w-full font-semibold tracking-wider hover:bg-indigo-400 focus:outline-none focus:shadow-outline"
      >
        Search Contents
      </button>
    </div>
  </div>
</template>

<script>
import {
  project,
  contentsType,
  contentsElements,
  contentsFields,
} from '../static/leftMenu.js';

// eslint-disable-next-line no-unused-vars
import { filter, go, map, join } from '../plugins/fx.js';

export default {
  data() {
    return {
      project,
      contentsType,
      contentsElements,
      contentsFields,
      searchParam: {},
    };
  },

  methods: {
    /**
     * 모든체크박스 이벤트
     */
    allCheckChange(e) {
      const iter = document.getElementsByName(e.target.name);
      for (const a of iter) {
        a.checked = e.target.checked;
      }
      this.setSearchParam(e.target, true);
    },
    /**
     * 개별체크박스 이벤트
     */
    checkChange(e) {
      const elements = document.getElementsByName(e.target.name);
      const iter = elements[Symbol.iterator]();
      iter.next();
      const trueLength = filter(c => c.checked, iter).length;

      if (trueLength === elements.length - 1) {
        elements[0].checked = true;
      } else {
        elements[0].checked = false;
      }
      this.setSearchParam(e.target, false);
    },
    /**
     * 검색조건 세팅
     */
    setSearchParam(target, isAll) {
      const iter = document.getElementsByClassName(target.name);

      this.searchParam[`${target.name}`] = go(
        iter,
        filter(p => p.checked),
        map(p => p.value),
        join(','),
      );
      if (isAll && !target.checked) delete this.searchParam[`${target.name}`];
    },
    /**
     * 검색버튼 클릭
     */
    async goSearch() {
      await this.$store.dispatch('contents/search', this.searchParam);
    },
    /**
     * 즐찾리스트
     */
    async getFavorList(e) {
      e.target.checked
        ? await this.$store.dispatch('contents/favorList')
        : this.goSearch();
    },
  },
};
</script>

<style scoped lang="sass"></style>
