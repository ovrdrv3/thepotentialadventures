<template>
  <div>
    <b-row>
      <b-col
        v-for="(item, index) in slice.items"
        :key="'multi-image-' + index"
        md="4"
      >
        <image-caption-slice :slice="item"></image-caption-slice>
      </b-col>
    </b-row>
  </div>
</template>

<script>
const ImageCaptionSlice = () =>
  import('~/components/slices/ImageCaptionSlice.vue')
export default {
  name: 'MultiImageSlice',
  components: {
    ImageCaptionSlice,
  },
  props: ['slice'],
}
</script>
