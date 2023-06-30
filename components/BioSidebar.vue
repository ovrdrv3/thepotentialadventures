<template>
  <div>
    <div
      class="blog-avatar"
      :style="{
        backgroundImage: 'url(' + homepageContent.image.url + ')',
      }"
    ></div>
    <h4 class="blog-description">
      {{ $prismic.asText(homepageContent.short_blog_description) }}
    </h4>
    <!-- social media section -->
    <div class="d-flex justify-content-around">
      <!-- <fa
                class="icon-dynamic"
                :icon="['fab', 'facebook']"
                size="lg"
                :style="{ color: 'white' }"
              />-->
      <!-- <a :href="homepageContent.instagram_link.url">
        <fa
          class="icon-dynamic"
          :icon="['fab', 'instagram']"
          size="lg"
          :style="{ color: 'white' }"
        />
      </a> -->
      <a :href="homepageContent.twitter_link.url">
        <fa
          class="icon-dynamic"
          :icon="['fab', 'twitter']"
          size="lg"
          :style="{ color: 'white' }"
        />
      </a>
      <a :href="homepageContent.pinterest_link.url">
        <fa
          class="icon-dynamic"
          :icon="['fab', 'pinterest']"
          size="lg"
          :style="{ color: 'white' }"
        />
      </a>
      <a :href="homepageContent.email_address.url">
        <fa
          class="icon-dynamic"
          :icon="['fas', 'envelope']"
          size="lg"
          :style="{ color: 'white' }"
        />
      </a>
    </div>
    <hr />
    <search-widget />
    <hr />
    <subscribe-form />
  </div>
</template>

<script>
import SearchWidget from '~/components/SearchWidget.vue'
import SubscribeForm from '~/components/SubscribeForm.vue'

export default {
  name: 'BioSidebar',
  components: {
    SearchWidget,
    SubscribeForm,
  },
  props: ['homepageContent'],
}
</script>

<style lang="sass" scoped></style>
