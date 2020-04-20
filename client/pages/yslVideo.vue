<template>
  <div>
    <vue-plyr>
      <video :src="dataUrl">
        <source :src="dataUrl" type="video/mp4" />
        <!-- <track
          kind="captions"
          label="English"
          srclang="en"
          src="captions-en.vtt"
          default
        /> -->
      </video>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  layout: 'clear',
  data() {
    return {
      dataUrl: '',
    };
  },
  mounted() {
    this.dataUrl = `http://210.223.45.233:9000/ysl/${this.$route.query.fileName}`;
  },
};
</script>
