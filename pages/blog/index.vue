<template>
  <section>
    <h1>Dev.to blog</h1>
    <article v-for="post in posts" :key="post.id">
      <nuxt-link :to="`/blog/${post.slug}`">
        <header>
          <h2>{{ post.title }}</h2>
          <h3>{{ post.date }}</h3>
          <img :src="post.cover_image" :alt="post.title" />
        </header>
        <section v-html="$md.render(post.body_markdown)"></section>
      </nuxt-link>
    </article>
  </section>
</template>

<script>
const getDevtoPosts = () =>
  import('~/data/devto.json').then((m) => m.default || m)

export default {
  async fetch() {
    this.posts = await getDevtoPosts()
  },

  data() {
    return {
      posts: []
    }
  }
}
</script>

<style lang="scss" scoped></style>
