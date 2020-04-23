<template>
  <div class="container mx-auto py-24">
    <section>
      <header class="flex items-center justify-center flex-col md:flex-row">
        <Logo class="w-48 h-48" />
        <div class="text-6xl mx-6">+</div>
        <NuxtLogo />
        <div class="text-6xl mx-6">+</div>
        <DevtoLogo class="w-64" />
      </header>
      <h1 class="text-center mt-8 text-3xl font-medium md:text-6xl">
        static dev.to nuxt blog
      </h1>
      <h2 class="text-center text-gray-800 text-xl md:text-4xl">
        Blog on the platform you love and host it yourself
      </h2>
      <div class="text-center mt-8">
        <nuxt-link to="blog" class="button--green">Blog</nuxt-link>
      </div>
    </section>
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
