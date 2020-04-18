<template>
  <article>
    <header>
      <h2>{{ post.title }}</h2>
      <h3>{{ post.date }}</h3>
      <img :src="post.cover_image" :alt="post.title" />
    </header>
    <section v-html="$md.render(post.body_markdown)"></section>
  </article>
</template>

<script>
const getDevtoPosts = () =>
  import('~/data/devto.json').then((m) => m.default || m)

export default {
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
  }
}
</script>

<style lang="scss" scoped></style>
