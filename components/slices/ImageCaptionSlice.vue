<template>
  <div>
    <b-card class="mx-auto m-3 p-0" style="max-width: 20rem;">
      <b-card-img-lazy class="zoom" :src="img.url" :alt="img.alt">
      </b-card-img-lazy>

      <b-card-text class="text-center contrast-font h4">
        {{ $prismic.asText(caption) }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ImageCaptionSlice',
  props: ['slice'],
  data() {
    return {
      img: '',
      caption: '',
    }
  },
  created() {
    this.img = this.slice.image
    this.caption = this.slice.caption
  },
}
</script>

<style lang="sass" scoped>
.blog-header
  height: 400px
  position: relative
  font-family: 'Lato', sans-serif
  font-weight: 400
  background-color: white
  background-size: cover
  color: white
  margin-bottom: 3rem
  &::before
    content: ''
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: rgba(0, 0, 0, 0.2)
  &::after
    content: ''
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: -moz-linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.05) 80%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0.2) 100%)
    background: -webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.05) 80%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0.2) 100%)
    background: -o-linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.05) 80%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0.2) 100%)
    background: -ms-linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.05) 80%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0.2) 100%)
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.05) 80%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0.2) 100%)
  .wrapper
    text-align: center
    position: absolute
    left: 50%
    top: 50%
    -ms-transform: translate(-50%, -50%)
    -webkit-transform: translate(-50%, -50%)
    transform: translate(-50%, -50%)

img
  width: 100%
  height: auto

.block-img
  margin-bottom: 24px

.image-label
  display: block
  text-align: center
  font-style: italic
  font-size: 14px
  color: #949494

// Media Queries
@media (max-width: 767px)
  .blog-header
    padding: 5px
    .wrapper
      width: 80%

@media screen and (min-width: 768px)
  // Blog post images
  .block-img.emphasized
    width: 130%
    margin: 0 -15% 2rem -15%
</style>
