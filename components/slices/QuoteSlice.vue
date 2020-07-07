<template>
  <h2 class="text-center contrast-font special-header rounded mx-5 p-2">
    {{ $prismic.asText(slice.primary.quote) }}
  </h2>
</template>

<script>
export default {
  name: 'QuoteSlice',
  props: ['slice'],
}
</script>

<style>
.special-header:hover {
  background-color: beige;
}
.special-header {
  background-color: white;
  /* background-color: red; */
}
</style>
