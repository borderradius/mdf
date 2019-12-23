<template>
  <div class="">
    <iframe
      :src="`http://210.223.45.236:1010/view?studykey=${studykey}`"
      frameborder="0"
      class="w-full h-screen"
    />
    <!-- <button @click="$emit('close')">close</button> -->
  </div>
</template>

<script>
export default {
  props: {
    contentInfo: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    studykey() {
      const temp = this.contentInfo.dataUrl;
      const rs = temp.split('=');
      return rs[1];
    },
  },
  created() {
    console.log(this.contentInfo);
  },
};
</script>

<style scoped></style>
