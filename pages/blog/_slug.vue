<template>
  <div>
    <BlogNavigation />
    <article class="container mx-auto">
      <header class="text-center pt-16 md:pt-32">
        <div class="flex justify-center text-sm md:text-base font-medium">
          <span>{{ date }}</span>
          <div v-if="post.tag_list">
            <span class="text-gray-900 px-2">/</span>{{ post.tag_list[0] }}
          </div>
        </div>
        <h1
          class="bg-yellow-400 px-6 my-4 inline-block text-center font-bold break-normal text-3xl md:text-5xl"
        >
          {{ post.title }}
        </h1>
      </header>
      <img :src="post.cover_image" :alt="post.title" />
      <section
        class="max-w-3xl z-10 relative mx-auto -mt-10 bg-white p-8 post md:p-24"
        v-html="$md.render(post.body_markdown)"
      />
    </article>
  </div>
</template>

<script>
const getDevtoPosts = () =>
  import('~/data/devto.json').then((m) => m.default || m)
const BlogNavigation = () => import('@/components/BlogNavigation')

export default {
  components: {
    BlogNavigation
  },
  async asyncData({ params }) {
    const posts = await getDevtoPosts()
    const post = posts.find((p) => p.slug === params.slug)

    return {
      post
    }
  },

  data() {
    return {
      post: {}
    }
  },

  computed: {
    date() {
      const date = new Date(this.post.published_at)
      return date.toDateString()
    }
  }
}
</script>

<style lang="postcss" scoped>
.post {
  @apply text-2xl;
}
</style>
