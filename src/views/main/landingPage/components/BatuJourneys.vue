<template>
  <div class="flex gap-20 my-11 flex-col sm:flex-row justify-evenly">
    <div class="flex flex-col justify-center items-center mt-12">
      <div class="max-w-[25rem] text-center flex flex-col justify-center items-center">
        <BaseTitle title="President Abdel Fattah El-Sisi visits BATU." />
      </div>
      <p class="font-normal mt-10 text-center text-gray-dark">
        In the visit of President Abdel Fattah El-Sisi to Borg El Arab Technological University and his inspection of the university
        conditions and student projects.
      </p>

      <a href="https://www.youtube.com/embed/tnWUiBwOAJ8?si=XRdVcK_GRHRrD_en"
        class="bg-transparent mt-10 hover:bg-green-dark text-green hover:text-white font-bold py-2 px-4 border-2 border-green hover:border-green-dark rounded-full duration-200">
        Learn more
      </a>
    </div>
    <div class="flex flex-shrink md:w-4/5">
      <img loading="lazy" src="@assets/sisi.jpeg" class="w-full object-cover" />
    </div>
  </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle.vue";

export default {
  components: {
    BaseTitle,
  },
};
</script>
