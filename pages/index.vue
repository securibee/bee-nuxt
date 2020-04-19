<template>
  <div class="container">
    <div>
      <header class="flex items-center justify-center">
        <Logo class="w-48 h-48" />
        <div class="text-6xl mx-6">+</div>
        <NuxtLogo />
        <div class="text-6xl mx-6">+</div>
        <DevtoLogo class="w-64" />
      </header>
      <h1 class="title">
        static dev.to nuxt blog
      </h1>
      <h2 class="subtitle">
        Blog on the platform you love and host it yourself
      </h2>
      <div class="links">
        <nuxt-link to="blog" class="button--green">Blog</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NuxtLogo from '~/components/NuxtLogo.vue'
import DevtoLogo from '~/components/DevtoLogo.vue'

export default {
  components: {
    Logo,
    NuxtLogo,
    DevtoLogo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
