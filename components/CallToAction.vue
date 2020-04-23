<template>
  <section>
    <div class="subscribe bg-gray-100 rounded mt-8 p-4 md:p-24 text-center">
      <h2 class="font-bold text-2xl md:text-4xl">
        Subscribe to my blog
      </h2>
      <h3
        class="font-bold break-normal font-normal text-gray-700 text-base md:text-xl"
      >
        We'll never give your email out
      </h3>
      <div class="w-full text-center pt-4">
        <form action="#">
          <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
            <input
              aria-label="Email"
              type="email"
              name="email"
              placeholder="youre@awesome.com"
              class="flex-1 appearance-none rounded shadow p-3 text-gray-700 mr-2 focus:outline-none"
            />
            <button
              type="submit"
              class="flex-1 mt-0block md:inline-block appearance-none bg-yellow-500 text-white text-base font-semibold tracking-wider uppercase py-3 rounded shadow hover:bg-yellow-400"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex w-full justify-center items-center font-sans p-8 md:p-24">
      <img
        class="w-10 h-10 rounded-full mr-4"
        :src="avatar"
        :alt="`${author}'s avatar`"
      />
      <div class="flex flex-col">
        <h4 class="text-base font-bold text-base md:text-xl leading-none">
          static dev.to nuxt blog
        </h4>
        <p class="text-gray-700 text-xs md:text-base">
          Blog on the platform you love and host it yourself by
          <a
            class="text-gray-800 hover:text-yellow-500 no-underline border-b-2 border-yellow-500"
            href="https://securib.ee"
            >securib.ee</a
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    }
  }
}
</script>
