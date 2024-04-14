<template>
  <div @click="onclick" class="block max-w-sm p-6 border-none rounded-lg cursor-pointer"
    :class="{ 'hover:bg-green hover:shadow-3xl duration-200': !notHoverable }" v-visible="isVisible">
    <img loading="lazy" :src="card.iconPath || card.image" width="70" height="70" class="mx-auto"
      :class="{ 'grayscale brightness-[4]': useWhite }" />

    <h5 class="mb-5 text-3xl text-center mt-2 font-bold tracking-tight text-gray-dark"
      :class="{ 'text-white': useWhite }, text_style">
      {{ card.title }}
    </h5>
    <p class="font-normal text-center text-gray-dark" :class="{ 'text-white': useWhite }, text_style">
      {{ card.subtitle || card.description }}
    </p>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  props: {
    card: {
      type: Object,
      required: true,
    },
    text_style: String,

    onclick: {
      type: Function,
      required: false,
      default: () => { },
    },
    useWhite: {
      type: Boolean,
      required: false,
      default: false,
    },
    notHoverable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  setup(_, { emit }) {
    const cardField = ref(null);

    function isVisible() {
      emit("visible");
    }

    return { cardField, isVisible };
  },
});
</script>
