<template>
  <div>
    <button
      class="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
    >
      <img
        class="h-full w-full object-cover"
        src="https://i.pinimg.com/originals/c8/14/99/c814995b86a60232c93492f5c90c0570.jpg"
        alt="avatar"
      />
    </button>
    <div class="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
      <a
        href="#!"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Account settings</a
      >
      <a
        href="#!"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Support</a
      >
      <a
        href="#!"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Sign out</a
      >
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { Vue, Component, Prop, PropSync } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import { State, Action } from 'vuex-class';

@Component({})
export default class AccountDropdownComponent extends Vue {
  // @Prop({ type: propType }) private propName!: propType;
  // @PropSync('propName', { type: propType }) newPropName!: propType;
}
</script>

<style scoped lang="sass"></style>
