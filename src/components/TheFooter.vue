<!-- <template>
  <footer class="bg-green-dark mt-32">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <router-link
            to="/"
            class="flex items-center justify-center hover:animate-Bpulse"
          >
            <img loading="lazy"  src="@assets/logo.png" class="h-32 me-3" />
          </router-link>
        </div>
        <div class="relative grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-white uppercase dark:text-white"
            >
              About Us
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>

            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-white uppercase"
            >
              Industry & Energy
            </h2>
            <ul class="text-gray-500 d font-medium">
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-white uppercase"
            >
              Health scince
            </h2>
            <ul class="text-gray-500 d font-medium">
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
              <li class="hover:text-white">
                <a href="/" class="hover:underline">page 1 </a>
              </li>
              
            </ul>
          </div>
         
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2024
          <a href="https://it-club.top" class="hover:underline">ITClub™</a>.
          All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template> -->
<template>
  <div class="px-16 py-20 bg-green-dark mt-32">
    <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  text-gray-light font-sans">
      <ul class=" ul_grid  text-xs">
        <li class=" ml-[-15px]">
          <img :src="logo" alt="BATU Logo" width="166px">
        </li>
        <li>BATU Website</li>
        <li>Copyright © 2024</li>
        <li>All rights reserved.</li>
      </ul>
      <ul class=" ul_grid">
        <li class=" text-lg transition hover:text-green-light duration-500 cursor-pointer"><router-link
            to="/aboutUs">About University</router-link></li>
      </ul>
      <ul v-if="faculties && facultyData" v-for="faculty in faculties" :key="faculty.id"
        class=" gap-2 flex flex-col ul_grid">
        <router-link :to="'/faculty/' + faculty.id" class="">
          <li class=" text-lg transition hover:text-green-light duration-500 cursor-pointer">{{ faculty.name }}</li>
        </router-link>
        <ul class=" gap-1 flex flex-col">
          <li v-for="department in test(faculty.id)" :key="department.id"
            class="group cursor-pointer text-sm transition hover:text-green-light duration-500">
            <router-link :to="'/departments/' + department.id">{{ department.name }}</router-link>
          </li>
        </ul>
      </ul>
      <ul>
        <li class=" text-lg transition hover:text-green-light duration-500 cursor-pointer"><a
            href="https://www.google.com/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8+%D8%A7%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A9%E2%80%AD/@30.8582875,29.5688782,17z/data=!3m1!4b1!4m6!3m5!1s0x145f7d35b368ca83:0x6b44d7cb3b2a22f8!8m2!3d30.8582875!4d29.5714531!16s%2Fg%2F11pf5zg0pm?entry=ttu">
            BATU location</a></li>
        <li>
          <div style="overflow:hidden;max-width:100%;width:100%;height:100%;min-height: 300px;">
            <div class="google-maps-display" style="height:100%; width:100%;max-width:100%;"><iframe
                style="height:100%;width:100%;border:0;" frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?q=جامعة+برج+العرب+التكنولوجية,+Unnamed+Road,+Hod+Sakrah+WA+Abu+Hamad,+Borg+El+Arab,+Egypt&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class=" flex flex-col">
      <h1 class=" text-white font-bold text-2xl items-center m-auto relative h-16">Contact Us <span
          class=" w-[50.06px] h-[1.79px] absolute bg-green right-1/2 translate-x-1/2 rounded-md top-10"></span>
      </h1>
      <ul v-if="data" class="flex items-center space-x-4 justify-evenly flex-col md:flex-row">
        <ul class="flex items-center space-x-4 justify-evenly md:gap-12 gap-16">
          <li v-for="item in data" :key="item.id" class="flex">
            <a v-if="item.icon === 'envelope'" :href="'mailto:' + item.link">
              <font-awesome-icon :icon="[item.iconType, item.icon]"
                class="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 hover:text-green-light transition duration-300 text-[#e2e8f0] m-auto" />
            </a>
            <a v-else :href="item.link"><font-awesome-icon :icon="[item.iconType, item.icon]"
                class="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 hover:text-green-light transition duration-300 text-[#e2e8f0] m-auto" /></a>

          </li>
        </ul>
        <li class=" relative w-full mt-8 md:mt-0 max-w-[454px]">
          <input type="text" class=" bg-gray-light w-full md:w-[454px] h-12 rounded-3xl pl-5"
            placeholder="Your Email Here...">
          <button
            class="absolute right-0 top-0 bg-green-light h-full flex justify-center items-center rounded-full w-12">
            <font-awesome-icon icon="paper-plane" class=" text-gray-light m-auto" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import logo from '@/assets/logo.png';
import { ref } from "vue";
import jsonData from '@components/social.json';
import { useStore } from '@/store'

const faculties = ref(null);
const facultyData = ref(null);

const data = ref(jsonData)

const getData = async () => {
  await useStore().getFaculties()
  faculties.value = useStore().faculties
  await useStore().getDepartments('/')
  facultyData.value = useStore().department.departments
  // (facultyData.value)
}
getData();

const test = (fac) => {
  const test = ref([])
  facultyData.value.map(item => {
    if (item.faculty_id == fac) {
      test.value.push(item);
    };
  });
  // (test.value)
  // facultyData.value = useStore().faculty.faculty.department
  // (facultyData.value)
  return test.value
}
</script>

<style scoped>
.ul_grid {
  @apply px-2 pb-7
}

.google-maps-display img {
  max-height: none;
  max-width: none !important;
  background: none !important;
}
</style>