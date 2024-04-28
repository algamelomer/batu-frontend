<template>
  <BaseHeaderImage
    title="Community service and environmental development affairs"
    subtitle="Batu University's Community Service and Environmental Development Affairs department promotes community engagement and sustainability through volunteer programs and initiatives."
    imgPath="/environmentImg.jpeg"
    class="mb-14"
  />

  <BaseContainer>
    <CardGrid
      :cards="dummyCards"
      class="mt-12"
      text_style="!text-black !text-2xl !font-Mulish "
    />
  </BaseContainer>
</template>

<script setup>
import CardGrid from "@components/CardGrid.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const dummyCards = [
  {
    iconPath: "/icons/sustainabilityList.png",
    title: "BATU Sustainability List",
    onclick: () => router.push("/soon"),
  },
];
</script>
