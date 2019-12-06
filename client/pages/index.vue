<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <test />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import test from '../components/test.vue';

@Component({
  // asyncData & fetch 컴포넌트에 입력
  async asyncData(ctx: any) {
    console.log(ctx);
    const { data } = await ctx.$axios.get('contents/list');
    console.log(data.result);
    // commit('SET_LISTS', data.result);
  },
  components: {
    test,
  },
})
export default class extends Vue {
  title: string = 'Hello world!';
}
</script>
