<template>
  <BaseHeaderImage :title="baseTitle" :subtitle="baseSubtitle" imgPath="./aboutUs.png" />
  <div class="flex flex-col md:px-10 px-0 mt-10 gap-10">
    <!-- universty sectors -->
    <BaseContainer>
      <BaseTitle title="University sectors" class="mx-auto" />
      <CardGrid :cards="dummyCards" class="mt-12" text_style="!text-black !text-2xl !font-Mulish " />
    </BaseContainer>
    <!-- The university's organizational structure -->
    <BaseContainer class="mx-5">
      <BaseTitle title="The university's organizational structure" class="mx-auto" />
      <!-- <ListTile v-for="doctor in doctorsDummyData" 
        :onClick="doctor.onClick" class="mb-5 mt-5" /> -->
      <router-link
        class=" bg-green-dark mb-5 border-green-dark border-2 hover:bg-green transition duration-300 w-full sm:w-3/4 md:w-[462px] m-auto h-[60px] rounded-[41px] text-white text-center flex justify-center items-center mt-16 text-[15px] gap-10"
        to="/soon">
        <p>Learn More</p><font-awesome-icon icon="angle-up" class=" transform rotate-90" />
      </router-link>
    </BaseContainer>
    <BaseContainer>
      <BaseTitle title="Centers & units" class="mx-auto" />
      <CardGrid :cards="dummyUnits" class="mt-12" text_style="!text-black !text-2xl !font-Mulish " />
    </BaseContainer>
    <!-- politics -->
    <!-- <div class="bg-gray-light dark:bg-darkMode-gray-light flex flex-col justify-around p-20 rounded-[7px]">
      <BaseTitle title="Our Politics" :animate="true" class="mx-auto" />
      <ul class="gap-2 flex flex-col list-disc mt-20">
        <template v-for="item in politics" :key="item.id">
          <li class="flex w-fit items-center">
            <span class="w-2 h-2 rounded-full bg-gray-dark mr-2"></span>
            <BaseSubtitle :subtitle="item.title" class="w-fit h-min mt-0 mb-0 mx-0" text_styles="!mb-0 !mt-0" />
            <span class="text-gray-400 px-2"> : </span>
            <BaseSubtitle :subtitle="item.subtitle" class="w-fit h-min mt-0 mb-0 mx-0" text_styles="!mb-0 !mt-0" />
          </li>
        </template>
</ul>
</div> -->

    <!-- Vacancies -->
    <div class="bg-gray-light dark:bg-darkMode-gray-light flex flex-col justify-around p-20 rounded-[7px]">
      <BaseTitle title="BATU Careers" :animate="true" class="mx-auto" />
      <router-link
        class=" bg-green-dark border-green-dark border-2 hover:bg-green transition duration-300 w-full sm:w-3/4 md:w-[462px] m-auto h-[60px] rounded-[41px] text-white text-center flex justify-center items-center mt-16 text-[15px] gap-10"
        to="/work_apply">
        <p>Go To Page</p><font-awesome-icon icon="angle-up" class=" transform rotate-90" />
      </router-link>
    </div>
    <!-- ask the university president -->
    <ask_universty_president class="md:w-11/12 w-full m-auto" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseTitle from "@/components/BaseTitle.vue";
import BaseSubtitle from "@/components/BaseSubtitle.vue";
import ask_universty_president from "./components/ask_universty_president.vue";
import CardGrid from "@components/CardGrid.vue";
import BaseContainer from "@components/BaseContainer.vue";
import ListTile from "../facultyStaff/components/ListTile.vue";
import { useRouter } from "vue-router";

const baseTitle = ref("About University");
const baseSubtitle = ref(
  "Discover our mission, values, and commitment to excellence. Learn about our team, history, and vision for the future."
);

const politics = ref([
  {
    id: 1,
    title: "title1",
    subtitle: "Caption..",
  },
  {
    id: 2,
    title: "title2",
    subtitle: "Caption..",
  },
  {
    id: 3,
    title: "title3",
    subtitle: "Caption..",
  },
  {
    id: 4,
    title: "title4",
    subtitle: "Caption..",
  },
  {
    id: 5,
    title: "title5",
    subtitle: "Caption..",
  },
]);

const router = useRouter();

const dummyCards = [
  {
    iconPath: "./icons/Vector (1).svg",
    title: "Students Affairs",
    onclick: () => router.push("/soon"),
  },
  {
    iconPath: "./icons/Vector (2).svg",
    title: "Secretary General of the University",
    onclick: () => router.push("/soon"),
  },
  {
    iconPath: "./icons/Vector (3).svg",
    title: "Community Service",
    onclick: () => router.push("/soon"),
  },
  {
    iconPath: "./icons/youth.svg",
    title: " Youth Care Management",
    onclick: () => router.push("/youth_care"),
  },
  {
    iconPath: "/icons/WhatsApp_Image_2024-04-16_at_06.08.04_4d4141bb-removebg-preview.png",
    title: "Colleges Agents",
    onclick: () => router.push("/agents"),
  },
  {
    iconPath: "./icons/hr.svg",
    title: "Human resources",
    onclick: () => router.push("/soon"),
  },
  {
    iconPath: "/icons/meeting.png",
    title: "College Council",
    onclick: () => router.push("/soon"),
  },
];

const dummyUnits = [
  {
    iconPath: "./personPlaceholder.png",
    title: "Information Technology units",
    onclick: () => router.push("/soon"),
  },
  {
    iconPath: "./personPlaceholder.png",
    title: "Quality Assurance units",
    onclick: () => router.push("/soon"),
  },
];

const doctorsDummyData = [
  {
    name: "Organizer",
    major: "Organizer Description",
    imgPath: "/5c62856ecd0d05ce0a3152961e49fdc9.png",
  },
  {
    name: "Organizer",
    major: "Organizer Description",
    imgPath: "/5c62856ecd0d05ce0a3152961e49fdc9.png",
  },
  {
    name: "Organizer",
    major: "Organizer Description",
    imgPath: "/5c62856ecd0d05ce0a3152961e49fdc9.png",
  },
  {
    name: "Organizer",
    major: "Organizer Description",
    imgPath: "/5c62856ecd0d05ce0a3152961e49fdc9.png",
  },
];
</script>
