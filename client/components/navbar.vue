<template>
  <header class="flex items-center bg-gray-900 justify-between px-4 py-2">
    <div>
      <img class="h-8" src="~assets/img/logo.svg" alt="logo" />
    </div>
    <div>
      <button
        type="button"
        class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
      >
        <svg id="Menu" class="h-6 w-6 fill-current" viewBox="0 0 20 20">
          <path
            d="M16.4,9H3.6C3.048,9,3,9.447,3,10c0,0.553,0.048,1,0.6,1H16.4c0.552,0,0.6-0.447,0.6-1C17,9.447,16.952,9,16.4,9z M16.4,13
	H3.6C3.048,13,3,13.447,3,14c0,0.553,0.048,1,0.6,1H16.4c0.552,0,0.6-0.447,0.6-1C17,13.447,16.952,13,16.4,13z M3.6,7H16.4
	C16.952,7,17,6.553,17,6c0-0.553-0.048-1-0.6-1H3.6C3.048,5,3,5.447,3,6C3,6.553,3.048,7,3.6,7z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class NavbarComponent extends Vue {}
</script>

<style scoped></style>
