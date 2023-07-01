<template>
  <b-container class="my-3">
    <!-- <div class="back">
      <nuxt-link to="../">back to list</nuxt-link>
    </div>-->
    <!-- 1 8 3 column layout -->
    <b-row>
      <!-- left bar for sharing layout -->
      <b-col sm="1" order="2" order-sm="1" class="align-self-start">
        <br />
        <h4 class="contrast-font">
          Share this post!
        </h4>
        <a
          :href="
            'https://www.facebook.com/sharer/sharer.php?u=' + document.fullURL
          "
          target="_blank"
          rel="noopener"
        >
          <fa
            class="icon-dynamic"
            :icon="['fab', 'facebook']"
            size="2x"
            :style="{ color: 'white' }"
          />
        </a>
        <!-- <a
          :href="homepageContent.instagram_link.url"
          target="_blank"
          rel="noopener"
        >
          <fa
            class="icon-dynamic"
            :icon="['fab', 'instagram']"
            size="2x"
            :style="{ color: 'white' }"
          />
        </a> -->
        <a
          :href="
            'https://twitter.com/intent/tweet?text=' +
            document.shareText +
            $prismic.asText(document.title) +
            '%0D' +
            document.fullURL
          "
          target="_blank"
          rel="noopener"
        >
          <fa
            class="icon-dynamic"
            :icon="['fab', 'twitter']"
            size="2x"
            :style="{ color: 'white' }"
          />
        </a>
        <a
          :href="
            'mailto:?subject=' +
            $prismic.asText(document.title) +
            '&body=' +
            document.shareText +
            document.fullURL
          "
          target="_blank"
          rel="noopener"
        >
          <fa
            class="icon-dynamic"
            :icon="['fas', 'envelope']"
            size="2x"
            :style="{ color: 'white' }"
          />
        </a>
      </b-col>
      <b-col
        sm="8"
        order="1"
        order-sm="2"
        class="middle-column-pop my-3 rounded"
      >
        <!-- center layout   -->
        <!-- Template for page title -->
        <h1 class="blog-title p-4 contrast-font text-center">
          {{ $prismic.asText(document.title) }}
        </h1>
        <p class="blog-post-meta p-3">
          <span class="created-at">{{ formattedPostDate }}</span>
          <span class="created-at float-right"
            >({{ formattedTravelDate }})</span
          >
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
        <!-- Slice Block Component tag -->
        <slices-block :slices="slices" />
        <adsbygoogle />
      </b-col>
      <!-- column on right side -->
      <b-col sm="3" order="3" order-sm="3" class="align-self-start">
        <bio-sidebar :homepage-content="homepageContent" />
        <br />
        <br />
        <br />
        <adsbygoogle />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// Importing all the slices components
import SlicesBlock from '~/components/SlicesBlock.vue'
import BioSidebar from '~/components/BioSidebar.vue'

export default {
  name: 'Post',
  components: {
    SlicesBlock,
    BioSidebar,
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get blog home content
      const homepageContent = (await $prismic.api.getSingle('blog_home')).data

      // Query to get post content
      const allData = await $prismic.api.getByUID('post', params.uid)
      const post = allData.data
      post.fullURL = 'https://www.thepotentialadventures.com/blog/' + params.uid
      post.shareText =
        '%0D%0DI%20just%20read%20the%20potentially%20best%20post%20ever:%0D'
      // Returns data to be used in template
      return {
        homepageContent,
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
          content: this.document.splash_image.url,
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.middle-column-pop
  background-color: #F0F8FF
</style>
