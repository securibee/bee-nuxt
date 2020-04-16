<template>
  <div>
    <h1>Dev.to blog</h1>
    <div v-for="post in posts" :key="post.id">
      {{ post }}
    </div>
  </div>
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
