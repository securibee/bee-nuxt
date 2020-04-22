<template>
  <article :class="['post', { first: isFirst }]">
    <figure class="flex-1">
      <img
        :src="thumbnail"
        :alt="title"
        class="object-cover h-full w-full rounded-t rounded-l"
      />
    </figure>
    <section class="p-6 rounded-r flex flex-col">
      <h2 class="w-full text-gray-700 text-xs md:text-sm">
        {{ date }}
      </h2>
      <h1 class="w-full  font-bold text-xl text-gray-900">
        {{ title }}
      </h1>
      <p class="text-gray-800 font-serif text-base mb-5">
        {{ description }}
      </p>
      <div class="flex-none mt-auto bg-white">
        <div class="flex items-center justify-between">
          <img
            class="w-8 h-8 rounded-full mr-4 avatar"
            :src="avatar"
            alt="avatar"
            tabindex="0"
          />
          <p class="text-gray-700 text-xs md:text-sm">1 MIN READ</p>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    isFirst: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    publishedAt: {
      type: String,
      default: ''
    }
  },

  computed: {
    date() {
      const date = new Date(this.publishedAt)
      return date.toDateString()
    }
  }
}
</script>

<style lang="postcss" scoped>
.post {
  @apply flex flex-col bg-white rounded-t rounded-b-none overflow-hidden shadow-lg;

  &.first {
    @apply flex-row;
  }
}
</style>
