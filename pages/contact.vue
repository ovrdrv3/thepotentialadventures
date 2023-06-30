<template>
  <b-container>
    <bio-sidebar :homepage-content="homepageContent" />
  </b-container>
</template>

<script>
// Importing blog posts widget
import BlogWidget from '~/components/BlogWidget.vue'
import BioSidebar from '~/components/BioSidebar.vue'

export default {
  name: 'Home',
  components: {
    BlogWidget,
    BioSidebar,
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      const homepageContent = (await $prismic.api.getSingle('blog_home')).data

      // Returns data to be used in template
      return {
        homepageContent,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: 'The Potential Adventures Blog - Contact Page',
    }
  },
}
</script>
