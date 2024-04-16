<template>
  <div class="flex flex-col mt-10 md:mt-0 md:flex-row">
    <div class="basis-1/3">
      <div class="flex flex-col items-center">
        <img :src="props.imgPath" alt="" class="flex-none rounded-xl h-56" />
        <div class="bg-white rounded-xl grid grid-cols-1 gap-3 mt-9">
          <a class="w-56 rounded-full h-12 bg-green cursor-pointer text-white justify-center text-center items-center flex hover:bg-green-dark duration-200" v-if="!props.isDean"
            download :href="props.doctordata.cv">
            Download Cv
          </a>
          <!-- <button
            class="w-56 border-2 border-green rounded-full h-12 bg-white text-black hover:bg-green hover:text-white duration-200"
            v-if="!props.isDean">
            Courses
          </button>
          <button
            class="w-56 border-2 border-green rounded-full h-12 bg-white text-black hover:bg-green hover:text-white duration-200">
            Researches
          </button> -->
          <router-link to="/soon"
            class="w-56 text-center justify-center flex items-center border-2 border-green rounded-full h-12 bg-white text-black hover:bg-green hover:text-white duration-200">
            Learn More
          </router-link>
          <a :href="'mailto:'+props.doctordata.email"
            class="w-56 border-2 flex text-center items-center justify-center border-green rounded-full h-12 bg-white text-black hover:bg-green hover:text-white duration-200">
            Contact Me
          </a>
        </div>
      </div>
    </div>
    <div class="basis-2/3">
      <div class="w-11/12 h-16 bg-white rounded-full">
        <div class="m-9">
          <div class="text-xl font-bold">{{ props.name }}</div>
          <div class="text-gray-dark">{{ props.major }}</div>
        </div>
      </div>

      <div class="w-11/12 min-h-96 bg-white rounded-2xl">
        <div class="m-9">
          <div class="font-bold text-gray-700">{{ props.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  major: String,
  description: String,
  imgPath: String,
  doctordata: Object,
  isDean: { type: Boolean, default: false },
});


</script>
