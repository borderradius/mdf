<template>
  <div class="w-screen h-screen flex items-center">
    <div class="w-full max-w-xs m-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="ID">
            ID
          </label>
          <input
            id="ID"
            v-model="user.id"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter ID"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            v-model="user.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter password"
          />
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="signin"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <n-link
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/"
            >Move main</n-link
          >
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2019 Minigate Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clear',
  data() {
    return {
      user: {
        id: 'minigate',
        password: 'minigate',
      },
    };
  },
  methods: {
    async signin() {
      try {
        await this.$store.dispatch('user/login', this.user);
      } catch (e) {
        alert('로그인 실패');
        return false;
      }
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="sass"></style>
