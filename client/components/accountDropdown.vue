<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
    >
      <img
        class="h-full w-full object-cover"
        src="https://i.pinimg.com/originals/c8/14/99/c814995b86a60232c93492f5c90c0570.jpg"
        alt="avatar"
      />
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 z-10 h-full w-full bg-black opacity-50 cursor-default"
      tabindex="-1"
    />
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 py-2 w-48 z-10 bg-white rounded-lg shadow-xl"
    >
      <!-- <a
        href="#!"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Account settings</a
      >
      <a
        href="#!"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Support</a
      > -->
      <a
        @click="signout"
        href="javascript:;"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Sign out</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  created() {
    // const handleEscape = (e: any) => {
    //   if (e.key === 'Esc' || e.key === 'Escape') {
    //     this.isOpen = false;
    //   }
    // };
    // document.addEventListener('keydown', handleEscape);
    // this.$once('hook:beforeDestroy', () => {
    //   document.removeEventListener('keydown', handleEscape);
    // });
  },

  methods: {
    signout() {
      this.isOpen = false;
      try {
        this.$store.dispatch('user/logout');
      } catch (e) {
        console.log(e);
      }
      this.$router.push('signin');
    },
  },
};
</script>

<style scoped lang="sass"></style>
