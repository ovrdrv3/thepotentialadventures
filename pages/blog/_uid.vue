<template>
  <b-container>
    <!-- <div class="back">
      <nuxt-link to="../">back to list</nuxt-link>
    </div>-->
    <!-- Template for page title -->
    <h1 class="blog-title p-4 contrast-font text-center">{{ $prismic.asText(document.title) }}</h1>
    <p class="blog-post-meta p-3">
      <span class="created-at">{{ formattedPostDate }}</span>
      <span class="created-at float-right">({{ formattedTravelDate }})</span>
    </p>
    <div v-if="notEmptyObject(document.splash_image)" class="text-center">
      <b-img
        class="zoom splash-img p-3"
        :src="document.splash_image.url"
        fluid
        :alt="document.splash_image.alt"
      ></b-img>
      <br />
    </div>
    <!-- Template for published date -->

    <adsbygoogle />
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" />
    <adsbygoogle />
  </b-container>
</template>

<script>
// Importing all the slices components
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'Post',
  components: {
    SlicesBlock,
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const allData = await $prismic.api.getByUID('post', params.uid)
      const post = allData.data
      // Returns data to be used in template
      return {
        document: post,
        slices: post.body,
        formattedTravelDate: Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(new Date(post.travel_date)),
        formattedPostDate: Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(new Date(allData.first_publication_date)),
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  methods: {
    notEmptyObject(object) {
      return Object.keys(object).length
    },
  },
  head() {
    return {
      title: 'Post: ' + this.$prismic.asText(this.document.title),
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$prismic.asText(this.document.title),
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$prismic.asText(this.document.splash_image.url),
        },
      ],
    }
  },
}
</script>
