<template>
  <div class="container">
    <div class="flex bg-gray-100">
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
    </div>
    <!-- <div class="my-10">
      <h1>{{ title }}</h1>
      <test />
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import test from '../components/test.vue';

@Component({
  // asyncData & fetch 컴포넌트에 입력
  // async asyncData(ctx: any) {
  //   await ctx.store.dispatch('contents/lists');
  // },
  // asyncData(ctx) {
  //   console.log(ctx);
  // },
  components: {
    test,
  },
})
export default class extends Vue {
  @State(state => state.contents.lists) lists!: any;
  @Action('contents/lists') loadLists: any;
  @Action('contents/addContact') addContact: any;
  @Action('contents/delContact') delContact: any;

  title: string = 'This is index';
  userInfo: Object = {
    name: 'test',
    tel: '010-0000-0000',
    address: '독도는 우리땅',
  };

  created() {
    this.loadLists();
  }

  addInfo() {
    this.addContact(this.userInfo);
  }

  delInfo(userInfoNo: Number) {
    this.delContact(userInfoNo);
  }
}
</script>
