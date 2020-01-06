<template>
  <div class="relative">
    <!-- <div class="absolute bg-white w-full flex items-center mark-header">
      <h3
        class="text-3xl text-center text-gray-900 font-semibold align-middle w-10/12 m-auto"
      >
        {{ contentInfo.contentsName }}
      </h3>
      <button
        @click="closeModal"
        class="absolute right-0 mr-2 inline-block bg-indigo-500 
        text-white px-3 py-0 rounded-lg shadow-lg uppercase 
        font-semibold text-3xl focus:outline-none focus:shadow-outline"
      >
        X
      </button>
    </div> -->
    <iframe
      id="contentIframe"
      :src="contentInfo.dataUrl"
      :width="cWidth"
      :height="cHeight"
      frameborder="0"
      class="m-auto"
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
    cWidth() {
      return '1000px';
      // return Math.ceil(window.innerHeight * 1.5023) + 'px';
    },
    cHeight() {
      return '562px';
      // return window.innerHeight;
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped></style>
