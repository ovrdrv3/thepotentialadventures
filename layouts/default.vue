<template>
  <div class="top-level-div">
    <b-navbar
      type="light"
      variant="light"
      class="contrast-font light-blue bg-lighter-blue"
    >
      <b-navbar-nav>
        <b-navbar-brand to="/" class="nav-link" exact
          >the potential adventures
        </b-navbar-brand>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-toggle variant="dark" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav right>
          <b-nav-item class="light-blue" to="contact">contact</b-nav-item>
          <b-nav-item class="light-blue" to="about">about</b-nav-item>
        </b-collapse>
      </b-navbar-nav>
    </b-navbar>

    <nuxt />
    <!-- Footer -->
    <b-navbar variant="light" class="bg-lighter-blue">
      <!-- Copyright -->
      <b-navbar-brand class="footer footer-copyright text-center contrast-font"
        >the potential adventures © {{ new Date().getFullYear() }}
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-navbar-toggle variant="dark" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav right>
          <b-nav-item class="light-blue contrast-font" to="privacy"
            >privacy policy
          </b-nav-item>
        </b-collapse>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'The Potential Adventures Blog',
    }
  },
}
</script>
<style lang="sass" scoped>
.bg-lighter-blue
  background-color: #F0F8FF !important
.top-level-div
  display: flex
  flex-direction: column
  min-height: 100vh
  justify-content: space-between
.blog-description
  font-size: 20px
  color: #9A9A9A
  line-height: 30px
.nav-link:hover,
.nuxt-link-active,
.navbar-brand:hover,
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary
  color: lightblue !important
</style>
