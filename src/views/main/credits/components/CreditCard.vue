<template>
  <div
    class=" hover:animate-Bpulse rounded-[3.3rem] border-4 border-green-dark flex flex-col justify-center items-center"
  >
    <div class="h-50 w-40 overflow-hidden">
      <img
        class="w-full h-full object-cover object-top"
        :src="props.imgPath"
        :alt="props.name"
      />
    </div>
    <div class="text-2xl text-center font-bold mx-auto">
      {{ props.name }}
    </div>
    <div class="text-gray-700 text-center">{{ props.position }}</div>
    <div class="flex flex-row gap-3 mb-2">
      <IconAnchor
        v-if="props.facebookLink"
        :href="props.facebookLink"
        class="group"
      >
        <font-awesome-icon
          icon="fa-brands fa-facebook-f group-hover:text-green-light duration-200"
          class="text-white group-hover:text-green-light duration-200"
          size="xl"
        />
      </IconAnchor>
      <IconAnchor v-if="props.instaLink" :href="props.instaLink" class="group">
        <font-awesome-icon
          icon="fa-brands fa-instagram"
          class="text-white group-hover:text-green-light duration-200"
          size="xl"
        />
      </IconAnchor>

      <IconAnchor
        v-if="props.phone"
        :href="'https://wa.me/20' + props.phone"
        class="group"
      >
        <font-awesome-icon
          icon="fa-brands fa-whatsapp"
          class="text-white group-hover:text-green-light duration-200"
          size="xl"
        />
      </IconAnchor>
      <IconAnchor
        v-if="props.email"
        :href="'mailto:' + props.email"
        class="group"
      >
        <font-awesome-icon
          icon="fa-solid fa-envelope "
          class="text-white group-hover:text-green-light duration-200"
          size="xl"
        />
      </IconAnchor>
    </div>
  </div>
</template>

<script setup>
import IconAnchor from "@components/TheNavBar/IconAnchor.vue";
const props = defineProps({
  instaLink: String,
  facebookLink: String,
  email: String,
  position: String,
  name: String,
  imgPath: String,
  phone: String,
});
console.log(props.phone);
</script>
