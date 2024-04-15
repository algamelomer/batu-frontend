<template>
  <BaseTitle title=" college agent word" class="mx-auto mt-10" />
  <div class="flex">
    <div class="basis-1/3">
      <div class="flex flex-col items-center">
        <img
          :src="props.imgPath"
          alt=""
          class="flex-none mt-10 rounded-xl h-56"
        />
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
});
</script>
