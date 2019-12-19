<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { Vue, Component, Prop, PropSync } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import { State, Action } from 'vuex-class';

@Component({})
export default class ClearClassComponent extends Vue {
  // @Prop({ type: propType }) private propName!: propType;
  // @PropSync('propName', { type: propType }) newPropName!: propType;
}
</script>

<style scoped lang="sass"></style>
