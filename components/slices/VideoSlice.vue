<template>
  <div class="d-flex justify-content-center align-items-center">
    <b-card class="p-0" style="max-width: 20rem;">
      <video
        :src="video_url"
        autoplay
        muted
        loop
        controls
        class="img-fluid video rounded"
      ></video>

      <b-card-text class="text-center contrast-font h4">
        {{ $prismic.asText(caption) }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'VideoSlice',
  props: ['slice'],
  data() {
    return {
      video_url: '',
      caption: '',
    }
  },
  created() {
    this.video_url = this.slice.primary.link.url
    this.caption = this.slice.primary.caption
  },
}
</script>
