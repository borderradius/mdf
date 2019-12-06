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
  components: {
    test,
  },
})
export default class extends Vue {
  title: string = 'Hello world!';
}
</script>
