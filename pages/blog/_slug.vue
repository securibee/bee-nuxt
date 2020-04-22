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
      <img class="mx-auto" :src="post.cover_image" :alt="post.title" />
      <section
        class="max-w-3xl z-10 relative mx-auto -mt-10 bg-white p-8 markdown md:p-24 text-xl"
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
    // inject TOC
    post.body_markdown = `\n[[toc]]\n${post.body_markdown}`
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
.markdown {
  @apply text-gray-900 leading-normal break-words;
}

.markdown > * + * {
  @apply mt-0 mb-4;
}

.markdown li + li {
  @apply mt-1;
}

.markdown li > p + p {
  @apply mt-6;
}

.markdown strong {
  @apply font-semibold;
}

.markdown a {
  @apply text-blue-600 font-semibold;
}

.markdown strong a {
  @apply font-bold;
}

.markdown h1 {
  @apply leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h2 {
  @apply leading-tight border-b text-2xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h3 {
  @apply leading-snug text-lg font-semibold mb-4 mt-6;
}

.markdown h4 {
  @apply leading-none text-base font-semibold mb-4 mt-6;
}

.markdown h5 {
  @apply leading-tight text-sm font-semibold mb-4 mt-6;
}

.markdown h6 {
  @apply leading-tight text-sm font-semibold text-gray-600 mb-4 mt-6;
}

.markdown blockquote {
  @apply text-base border-l-4 border-gray-300 pl-4 pr-4 text-gray-600;
}

.markdown ul {
  @apply text-base pl-8 list-disc;
}

.markdown ol {
  @apply text-base pl-8 list-decimal;
}

.markdown table {
  @apply text-base border-gray-600;
}

.markdown th {
  @apply border py-1 px-3;
}

.markdown td {
  @apply border py-1 px-3;
}
</style>
