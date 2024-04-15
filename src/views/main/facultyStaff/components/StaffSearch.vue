<template>
  <div>
    <BaseTitle title="Search Faculty Staff members" class="mx-auto" />
    <div class="mx-auto flex flex-col sm:flex-row w-4/5 mt-10">
      <BaseDropDown
        :items="dummyCollages"
        @itemChosen="collageChosen"
        defaultValue="choose collage"
        class="rounded-full z-10 sm:basis-1/2 mb-5 sm:mb-0"
      ></BaseDropDown>

      <div
        class="w-full h-16 sm:ml-10 bg-green border-2 sm:basis-1/2 border-green flex-1 rounded-full overflow-hidden"
      >
        <input
          type="text"
          class="w-full h-full p-4 placeholder-green-light border-none outline-none text-gray-900 rounded-lg bg-gray-50 text-base focus:border-transparent"
          placeholder="Enter Staff Name..."
          aria-label="Search"
        />
      </div>
    </div>
    <div class="mx-auto flex flex-col sm:flex-row w-4/5 mt-10">
      <BaseDropDown
        :items="dummyMajors"
        defaultValue="choose major"
        class="rounded-full sm:basis-2/3 mb-5 sm:mb-0"
      ></BaseDropDown>
      <button
        class="w-full h-20 sm:ml-10 text-white bg-green flex-1 sm:basis-1/3 rounded-full hover:bg-green-dark duration-200"
      >
        Search
        <font-awesome-icon
          icon="fa-solid fa-search"
          class="text-white ml-2"
          size="xl"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import BaseDropDown from "@/components/BaseDropDown.vue";

const emit = defineEmits(["collageChosen"]);
var dummyCollages = ["Industry and Energy College", "Health science collage"];
var dummyMajors = [
  "Information technology",
  "tractorHigh-tech tractor technology and agricultural equipment",
  "railway Technology",
];

function collageChosen(collage) {
  emit("collageChosen", collage);
}
</script>
