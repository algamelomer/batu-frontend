<template>
  <div class="relative" @mouseleave="deActivateDropDown" @mouseenter="activateDropDown">
    <button :class="$attrs.class" id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
      class="text-white w-full h-full bg-green hover:bg-green-dark focus:ring-4 focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
      type="button">
      {{ chosenItemName }}
      <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    </button>
    <transition class="absolute">
      <div v-if="dropIsActive" class="rounded-sm right-6 bg-white w-11/12 origin-top divide-gray-100 shadow">
        <ul class="text-green-dark">
          <li v-for="item in props.items" @click="itemChose(item.id, item.name)"
            class="block px-4 py-2 hover:bg-green-light hover:text-white">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["itemChosen"]);

const props = defineProps({
  items: { type: Array, default: () => [] },
  defaultValue: { type: String },
});

const dropIsActive = ref(false);

var chosenItemName = ref(props.defaultValue);

var chosenItemsId = ref(null)
function activateDropDown() {
  dropIsActive.value = true;
}

function deActivateDropDown() {
  dropIsActive.value = false;
}

function itemChose(itemId, itemName) {
  chosenItemName.value = itemName;
  chosenItemsId.value = itemId;
  deActivateDropDown();
  emit("itemChosen", chosenItemsId.value);
}
</script>

<style scoped>
.v-enter-from {
  @apply transition-all opacity-0 scale-0;
}

.v-enter-to {
  @apply opacity-100 scale-100 duration-300;
}

.v-leave-from {
  @apply transition-all scale-100 opacity-100;
}

.v-leave-to {
  @apply opacity-0 scale-0 duration-300;
}
</style>
