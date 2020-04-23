<template>
  <div class="relative min-h-screen ">
    <BlogListHeader />
    <div class="container px-4 md:px-0 mx-auto -mt-64">
      <div class="mx-0 sm:mx-6">
        <BlogNavigation />
        <div class="posts">
          <nuxt-link
            v-for="post in posts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            :aria-label="`Read more about ${post.title}`"
            class="flex"
          >
            <BlogListPost
              :is-first="isFirst(post)"
              :title="post.title"
              :description="post.description"
              :thumbnail="post.cover_image"
              :published-at="post.published_at"
              :avatar="post.user.profile_image_90"
            />
          </nuxt-link>
        </div>
        <CallToAction :author="author" :avatar="avatar" />
      </div>
    </div>
  </div>
</template>

<script>
const getDevtoPosts = () =>
  import('~/data/devto.json').then((m) => m.default || m)
const BlogListHeader = () => import('~/components/BlogListHeader')
const BlogListPost = () => import('~/components/BlogListPost')
const BlogNavigation = () => import('~/components/BlogNavigation')
const CallToAction = () => import('~/components/CallToAction')

export default {
  components: {
    BlogListHeader,
    BlogListPost,
    BlogNavigation,
    CallToAction
  },

  async fetch() {
    this.posts = await getDevtoPosts()
  },

  data() {
    return {
      posts: []
    }
  },

  computed: {
    avatar() {
      return this.posts.length > 0 ? this.posts[0].user.profile_image_90 : ''
    },

    author() {
      return this.posts.length > 0 ? this.posts[0].user.name : 'unknown'
    }
  },

  methods: {
    isFirst(post) {
      return this.posts[0].slug === post.slug
    }
  }
}
</script>

<style lang="postcss" scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  row-gap: 3rem;
  @screen md {
    & > *:first-child {
      grid-column: span 2;
    }
  }
}
</style>
