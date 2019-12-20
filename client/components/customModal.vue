<template>
  <div>
    <h1>custom modal component</h1>
    <div class="container">
      {{ data }}
    </div>
    <button @click="$emit('close')">close</button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped></style>
