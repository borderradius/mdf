<template>
  <div id="leftMenu" class="w-1/6 h-screen bg-gray-800">
    <div
      id="leftMenu-header"
      class="px-4 py-3 h-16 bg-gray-900 text-white border-b border-gray-900"
    >
      <h1 class="font-bold text-center text-2xl uppercase">mdf logo</h1>
      <!-- <img
        class="h-8 w-full object-center"
        src="~assets/img/logo.svg"
        alt="logo"
      /> -->
    </div>
    <div id="leftMenu-content" class="overflow-y-auto">
      <!-- <div class="overflow-y-auto"> -->
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
                type="checkbox"
                class="form-checkbox"
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
                type="checkbox"
                class="form-checkbox"
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
                type="checkbox"
                class="form-checkbox"
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

export default {
  data() {
    return {
      project,
      contentsType,
      contentsElements,
      contentsFields,
    };
  },

  methods: {
    filter(iter, f) {
      const res = [];
      for (const a of iter) {
        if (f(a)) res.push(a);
      }
      return res;
    },
    /**
     * allCheck button click event
     */
    allCheckChange(e) {
      const iter = document.getElementsByName(e.target.name);
      for (const a of iter) {
        a.checked = e.target.checked;
      }
    },
    /**
     * individualCheck button click event
     */
    checkChange(e) {
      const elements = document.getElementsByName(e.target.name);
      const iter = elements[Symbol.iterator]();
      iter.next();
      const trueLength = this.filter(iter, c => c.checked).length;

      if (trueLength === elements.length - 1) {
        elements[0].checked = true;
      } else {
        elements[0].checked = false;
      }
    },
  },
};
</script>

<style scoped lang="sass"></style>
