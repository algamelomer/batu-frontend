<template>
  <button class="w-10/12 items-center flex hover:bg-green-light bg-white rounded-full mx-auto duration-200"
    @click="props.onClick">
    <div class="h-20 w-20 min-w-20 min-h-20 rounded-full overflow-hidden relative">
      <img class="absolute inset-0 object-cover h-full w-full" :src="imgPath" />
    </div>


    <div class="ml-5 w-11/12 text-start justify-center items-center">
      <div class="text-xl font-bold">{{ props.name }}</div>
      <div class="text-gray-dark">{{ props.major }}</div>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  name: String,
  major: String,
  imgPath: String,
  onClick: { type: Function, default: () => { } },
});
</script>
