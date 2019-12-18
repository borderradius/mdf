<template>
  <header class="bg-gray-900">
    <div class="flex items-center justify-between px-4 py-2">
      <div>
        <img class="h-8" src="~assets/img/logo.svg" alt="logo" />
      </div>
      <div>
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg id="Menu" class="h-6 w-6 fill-current" viewBox="0 0 20 20">
            <path
              v-if="isOpen"
              d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0
	c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697c0.469-0.469,1.228-0.469,1.697,0
	L10,8.183l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0c0.469,0.469,0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15
	C14.817,13.62,14.817,14.38,14.348,14.849z"
            />
            <path
              v-if="!isOpen"
              d="M16.4,9H3.6C3.048,9,3,9.447,3,10c0,0.553,0.048,1,0.6,1H16.4c0.552,0,0.6-0.447,0.6-1C17,9.447,16.952,9,16.4,9z M16.4,13
	H3.6C3.048,13,3,13.447,3,14c0,0.553,0.048,1,0.6,1H16.4c0.552,0,0.6-0.447,0.6-1C17,13.447,16.952,13,16.4,13z M3.6,7H16.4
	C16.952,7,17,6.553,17,6c0-0.553-0.048-1-0.6-1H3.6C3.048,5,3,5.447,3,6C3,6.553,3.048,7,3.6,7z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4">
      <a
        href="#!"
        class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >List your property</a
      >
      <a
        href="#!"
        class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >Trips</a
      >
      <a
        href="#!"
        class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >Messages</a
      >
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class NavbarComponent extends Vue {
  isOpen: boolean = false;
}
</script>

<style scoped></style>
