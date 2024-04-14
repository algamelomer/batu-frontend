<template>
  <div class=" md:h-96 h-[30rem] justify-between flex flex-col py-6 rounded-md px-4" :class="[
    state.cardWidth,
    {
      'bg-zinc-light': state.bgZinc,
      'bg-blue-light': state.bgBlue,
      'bg-green-light': state.bgGreen,
    },
  ]">
    <h1 class="text-xl font-black text-center h-20 overflow-auto" :class="{
      'text-zinc-dark': state.bgZinc,
      'text-blue-dark': state.bgBlue,
      'text-green-dark': state.bgGreen,
    }">
      {{ state.title }}
      <span v-if="state.lecturer" class=" block text-base">lecturer: {{ state.lecturer }}</span>
    </h1>
    <div class="w-full h-3/5 flex flex-row justify-between gap-2">

      <div class=" w-full md:w-11/12">

        <p class="text-center h-full text-white overflow-auto" :class="{ 'text-zinc': state.bgZinc }">
          {{ state.description }}
        </p>
      </div>
      <div class="flex flex-col items-center justify-center w-24 h-24">
        <img loading="lazy" :src="state.iconPath" class=" object-contain w-full h-full" />
      </div>
    </div>
    <div class="flex justify-center">
      <router-link to="/departments/3"
        class="md:w-52 w-11/12 flex justify-center items-center text-white font-bold py-2 px-4 hover:w-56 rounded-full duration-200"
        :class="{
          'bg-zinc-dark': state.bgZinc,
          'bg-blue-dark': state.bgBlue,
          'bg-green-dark': state.bgGreen,
        }">
        LearnMore
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";


export default {
  props: {
    title: String,
    description: String,
    lecturer: String,
    bgBlue: {
      type: Boolean,
      default: false,
    },
    bgGreen: {
      type: Boolean,
      default: false,
    },
    bgZinc: {
      type: Boolean,
      default: false,
    },
    iconPath: {
      type: String,
      default: "src/assets/icons/solar_programming-broken.svg",
    },

    cardWidth: {
      type: String,
      default: "w-96",
    },
  },

  setup(props) {
    const state = reactive({
      title: props.title,
      lecturer: props.lecturer,
      description: props.description,
      bgBlue: props.bgBlue,
      bgGreen: props.bgGreen,
      bgZinc: props.bgZinc,
      iconPath: props.iconPath,
      cardWidth: props.cardWidth,
    });



    return { state };
  },
};
</script>
<style scoped>
p::-webkit-scrollbar {
  display: none;
}
</style>