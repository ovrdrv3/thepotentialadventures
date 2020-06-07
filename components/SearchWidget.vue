<template>
  <div>
    <!-- search my blog -->
    <b-form-input
      v-model="searchQuery"
      placeholder="Search my blog"
      @input="debounce(performSearch)"
    ></b-form-input>
    <!-- {{ searchResults }} -->
    <div
      v-if="
        searchQuery != '' && searchResults && searchResults.results_size > 0
      "
    >
      <b-button
        v-for="result in searchResults.results"
        :key="result.id"
        class="my-3 p-0 contrast-font search-result"
        block
        :to="'/blog/' + result.uid"
        >{{ result.data.title[0].text }}</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchWidget',
  data() {
    return {
      searchQuery: null,
      searchResults: null,
    }
  },
  methods: {
    debounce(fn) {
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        fn()
      }, 500)
    },
    async performSearch() {
      const queryResults = await this.$prismic.api.query(
        [
          this.$prismic.predicates.at('document.type', 'post'),
          this.$prismic.predicates.fulltext('document', this.searchQuery),
        ],
        { orderings: '[my.post.date desc]' }
      )
      console.log(queryResults)
      this.searchResults = queryResults
    },
  },
}
</script>

<style>
.search-result {
  font-size: 25px;
}
</style>
