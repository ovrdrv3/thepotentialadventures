<template>
  <div class="blog-post">
    <nuxt-link :to="link">
      <h2 class="text-center contrast-font">
        {{ $prismic.asText(post.data.title) }}
      </h2>
    </nuxt-link>
    <p class="text-center">
      <span class="">{{ formattedDate }}</span>
    </p>
    <p>{{ getFirstParagraph(post) }}</p>
    <div class="text-center">
      <b-button
        :to="link"
        class="mx-auto contrast-font p-0 m-0"
        block
        variant="light"
      >
        READ MORE
      </b-button>
    </div>
  </div>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js'

export default {
  name: 'BlogWidget',
  props: ['post'],
  data() {
    return {
      link: '',
      formattedDate: '',
    }
  },
  created() {
    ;(this.link = LinkResolver(this.post)),
      (this.formattedDate = Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }).format(new Date(this.post.data.date)))
  },
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 300
      const slices = post.data.body
      let firstParagraph = ''
      let haveFirstParagraph = false

      slices.map(function (slice) {
        if (!haveFirstParagraph && slice.slice_type == 'text') {
          slice.primary.text.forEach(function (block) {
            if (block.type == 'paragraph' && !haveFirstParagraph) {
              firstParagraph += block.text
              haveFirstParagraph = true
            }
          })
        }
      })

      const limitedText = firstParagraph.substr(0, textLimit)

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...'
      } else {
        return firstParagraph
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.blog-post
  color: #353535
</style>
