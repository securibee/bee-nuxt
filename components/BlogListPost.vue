<template>
  <article :class="['post', { first: isFirst }]">
    <figure class="flex-1">
      <img :src="thumbnail" class="h-full w-full rounded-t rounded-l" />
    </figure>
    <section class="p-6 rounded-r">
      <h2 class="w-full text-gray-600 text-xs md:text-sm px-6">
        {{ publishedAt }}
      </h2>
      <h1 class="w-full  font-bold text-xl text-gray-900 px-6">
        {{ title }}
      </h1>
      <p
        class="text-gray-800 font-serif text-base px-6 mb-5"
        v-html="$md.render(content)"
      ></p>
      <div class="flex-none mt-auto bg-white">
        <div class="flex items-center justify-between">
          <img
            class="w-8 h-8 rounded-full mr-4 avatar"
            :src="avatar"
            alt="avatar"
            tabindex="0"
          />
          <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
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
    content: {
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
  }
}
</script>

<style lang="postcss" scoped>
.post {
  @apply flex bg-white rounded-t rounded-b-none overflow-hidden shadow-lg;

  &.first {
    @apply flex-row;
  }
}
</style>
