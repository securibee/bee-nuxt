<template>
  <div>
    <BlogListHeader />
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-64">
      <div class="mx-0 sm:mx-6">
        <nav class="mt-0 w-full">
          <div class="container mx-auto flex items-center">
            <div class="flex w-1/2 pl-4 text-sm">
              <ul
                class="list-reset flex justify-between flex-1 md:flex-none items-center"
              >
                <li class="mr-2">
                  <nuxt-link
                    class="inline-block font-bold text-lg text-black no-underline hover:text-white py-2 px-2"
                    to="/"
                    >Home
                  </nuxt-link>
                </li>
              </ul>
            </div>

            <div class="flex w-1/2 justify-end content-center">
              <a
                class="inline-block text-black no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                href="https://twitter.com/intent/tweet?url=#"
              >
                <svg
                  class="fill-current h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                  ></path>
                </svg>
              </a>
              <a
                class="inline-block text-black no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                href="https://www.facebook.com/sharer/sharer.php?u=#"
              >
                <svg
                  class="fill-current h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>

        <div class="posts">
          <nuxt-link
            v-for="post in posts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
          >
            <BlogListPost
              :is-first="isFirst(post)"
              :title="post.title"
              :content="post.body_markdown"
              :thumbnail="post.cover_image"
              :published-at="post.published_at"
              :avatar="post.user.profile_image_90"
            />
          </nuxt-link>
        </div>
        <div
          class="subscribe container font-sans bg-gray-100 rounded mt-8 p-4 md:p-24 text-center"
        >
          <h2 class="font-bold text-2xl md:text-4xl">
            Subscribe to my blog
          </h2>
          <h3
            class="font-bold break-normal font-normal text-gray-600 text-base md:text-xl"
          >
            We'll never give your email out
          </h3>
          <div class="w-full text-center pt-4">
            <form action="#">
              <div
                class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center"
              >
                <input
                  type="email"
                  placeholder="youre@awesome.com"
                  class="flex-1 appearance-none rounded shadow p-3 text-gray-700 mr-2 focus:outline-none"
                />
                <button
                  type="submit"
                  class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-yellow-500 text-white text-base font-semibold tracking-wider uppercase py-3 rounded shadow hover:bg-yellow-400"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="flex w-full justify-center items-center font-sans p-8 md:p-24"
        >
          <img
            class="w-10 h-10 rounded-full mr-4"
            :src="avatar"
            :alt="`${author}'s avatar`"
          />
          <div class="flex flex-col">
            <h4 class="text-base font-bold text-base md:text-xl leading-none">
              static dev.to nuxt blog
            </h4>
            <p class="text-gray-600 text-xs md:text-base">
              Blog on the platform you love and host it yourself by
              <a
                class="text-gray-800 hover:text-yellow-500 no-underline border-b-2 border-yellow-500"
                href="https://securib.ee"
                >securib.ee</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <BlogListFooter />
  </div>
</template>

<script>
const getDevtoPosts = () =>
  import('~/data/devto.json').then((m) => m.default || m)
const BlogListHeader = () => import('~/components/BlogListHeader')
const BlogListPost = () => import('~/components/BlogListPost')
const BlogListFooter = () => import('~/components/BlogListFooter')

export default {
  components: {
    BlogListHeader,
    BlogListPost,
    BlogListFooter
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
    & > div:first-child {
      grid-column: span 2;
    }
  }
}
</style>
