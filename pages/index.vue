<template>
  <b-container>
    <section class="home">
      <article>
        <!-- top header -->
        <div class="p-4">
          <!-- Template for page title -->
          <h1 class="blog-title contrast-font">
            {{ $prismic.asText(homepageContent.headline) }}
          </h1>
          <!-- Template for page description -->
          <p class="blog-description">
            {{ $prismic.asText(homepageContent.description) }}
          </p>
        </div>
        <b-row>
          <!-- left side -->
          <b-col sm="9">
            <!-- Check blog posts exist -->
            <div v-if="posts.length !== 0" class="blog-main">
              <!-- Template for blog posts -->
              <section
                v-for="post in posts"
                :key="post.id"
                :post="post"
                class="blog-post"
              >
                <!-- Here :post="post" passes the data to the component -->
                <blog-widget :post="post"></blog-widget>
              </section>
            </div>
            <!-- If no blog posts return message -->
            <div v-else class="blog-main">
              <p>No Posts published at this time.</p>
            </div>
          </b-col>

          <!-- right side -->
          <b-col sm="3">
            <bio-sidebar :homepage-content="homepageContent" />
            <br />
            <br />
            <br />
          </b-col>
        </b-row>
      </article>
    </section>
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

      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.first_publication_date desc]' }
      )

      // Returns data to be used in template
      return {
        homepageContent,
        posts: blogPosts.results,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      searchQuery: null,
    }
  },
  head() {
    return {
      title: 'The Potential Adventures Blog',
    }
  },
}
</script>

<style lang="sass" scoped>
.home
  text-align: center

.blog-main
  max-width: 700px
  margin: auto
  text-align: left
  &.single img
    width: 100%
    height: auto
  &.single a
    text-decoration: none
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background-repeat: repeat-x
    background-size: 2px 2px
    background-position: 0 23px

.blog-post
  margin: 0
  margin-bottom: 3rem

@media (max-width: 767px)
  .home
    padding: 0 20px
  .blog-main
    padding: 0
    font-size: 18px
</style>
