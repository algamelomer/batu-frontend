<template>
  <div
    class="flex gap-10 my-11 flex-col justify-between bg-gray-light dark:bg-darkMode-gray-light py-16 w-full"
    :class="{ 'md:flex-row': !reverse, 'md:flex-row-reverse': reverse }"
  >
    <div class="flex flex-col justify-center md:w-1/2 items-center mt-12">
      <div
        class="max-w-[30rem] text-center flex flex-col justify-center items-center"
      >
        <BaseTitle :title="title" :animate="animate" />
      </div>
      <p
        v-motion-fade-visible
        class="font-normal md:pl-3 text-center md:text-justify mt-10 text-gray-dark"
      >
        {{ description }}
      </p>

      <router-link to="/soon"
        v-motion-fade-visible
        class="bg-transparent mt-10 hover:bg-green-dark text-green hover:text-white font-bold py-2 px-4 border-2 border-green hover:border-green-dark rounded-full duration-200"
      >
        Learn more
      </router-link>
    </div>
    <div v-motion-fade-visible class="flex flex-shrink w-11/12 sm:w-3/4 m-auto md:w-2/3 lg:w-2/6">
      <img loading="lazy"  :src="imgPath" class="rounded-md mx-auto w-full" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    imgPath: String,
    reverse: { type: Boolean, default: false },

    animate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
