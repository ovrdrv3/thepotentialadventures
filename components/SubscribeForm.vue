<template>
<div id="mc_embed_signup">
  <b-form action="https://thepotentialadventures.us10.list-manage.com/subscribe/post?u=8b46b4c05967fa41bdb6b7abf&amp;id=fa498477b9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
        <b-button @click="showForm = true" 
            block
            class="mx-auto contrast-font p-0 m-0"
            variant="light"
            v-if="!showForm"
         >Subscribe to my blog</b-button>

        <div v-else>
            <label class="sr-only" for="mce-FNAME">First Name</label>
            <b-input
            id="mce-FNAME"
            class="my-2"
            placeholder="First Name"
            type="text" name="FNAME" 
            ></b-input>

            <label class="sr-only" for="mce-EMAIL">Email</label>
            <b-input id="mce-EMAIL" name="EMAIL" type="email" placeholder="Email" class="my-2"></b-input>

            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8b46b4c05967fa41bdb6b7abf_fa498477b9" tabindex="-1" value=""></div>
            <b-button type="submit" 
                id="mc-embedded-subscribe" 
                value="Subscribe" 
                name="subscribe" 
                block
                class="mx-auto contrast-font p-0 m-0"
                variant="light"
                >Subscribe</b-button>
        </div>
    </div>
  </b-form>
</div>

</template>

<script>
export default {
  name: 'SubscribeForm',
  data() {
    return {
        showForm: false
    }
  }
}
</script>

<style>
.search-result {
  font-size: 25px;
}
</style>
