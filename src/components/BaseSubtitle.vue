<template>
  <div class="w-[80%] mx-auto font-Mulish" :class="styles">
    <h6 class="mb-5 text-xl text-center mt-10 font-medium tracking-tight" :class="color, text_styles">
      {{ subtitle }}
    </h6>
  </div>
</template>

<script setup>
// export default {
//   props: {
//     subtitle: String,
//     color: { type: String, default: "text-gray-400" },
//     styles: { type: String },
//     text_styles: { type: String }
//   },
// };
defineProps({
  subtitle: String,
  color: { type: String, default: "text-gray-400" },
  styles: { type: String },
  text_styles: { type: String }
})
</script>
