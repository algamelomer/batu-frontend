<template>
  <BaseHeaderImage
    imgPath="/src/assets/facultyStaff.png"
    title="Faculty & Staff"
    subtitle="Faculty and staff hub. Access resources, support, and important information for academic and administrative needs conveniently on this page."
  />

  <BaseContainer class="mx-5 py-16" v-if="!isSpecificDoctor()">
    <StaffSearch></StaffSearch>
  </BaseContainer>

  <BaseContainer class="mx-5 py-5">
    <BaseTitle title="Staff Members" class="mx-auto" />

    <ListTile
      v-if="!isSpecificDoctor()"
      v-for="doctor in doctorsDummyData"
      :name="doctor.name"
      :major="doctor.major"
      :imgPath="doctor.imgPath"
      :onClick="doctor.onClick"
      class="mb-5 mt-5"
    />
    <DoctorDetails
      v-else
      :name="getDoctorById(props.id).name"
      :major="getDoctorById(props.id).major"
      :imgPath="getDoctorById(props.id).imgPath"
      :description="getDoctorById(props.id).description"
    />
  </BaseContainer>
</template>
<script setup>
import BaseHeaderImage from "@/components/BaseHeaderImage.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import StaffSearch from "./components/StaffSearch.vue";
import ListTile from "./components/ListTile.vue";
import DoctorDetails from "./components/DoctorDetails.vue";
import { useRouter } from "vue-router";
import { defineProps } from "vue";

var router = useRouter();
var doctorsDummyData = [
  {
    id: 1,
    name: "Dr. Osama El-nahass",
    major: "IT Major Doctor / Constructor",
    imgPath: "/src/assets/drOsama.jpeg",
    description:
      "Dr. Osama El-nahass is the Program President of the Information Technology Program. He leads the program, making sure students learn what they need for today's tech world. Dr. El-nahass is known for his dedication to quality education and keeping up with the latest trends in IT. He encourages innovation and helps students and faculty stay ahead in the field. His leadership makes the IT Program a great place to learn and prepares students well for their future careers in technology.",
    onClick: () => {
      router.push("/facultyStaff/1");
    },
  },
  {
    id: 2,
    name: "Dr. Nehal El-Azaly",
    major: "IT Major Doctor ",
    imgPath: "/src/assets/drNehal.jpeg",
    description:
      "Dr. Nehal El-Azaly is an IT expert with a doctorate in the field. She specializes in areas like database management or data analytics, using her knowledge to teach, research, and help solve IT challenges. Dr. El-Azaly's work contributes to advancements in technology and benefits both students and professionals in the industry.",
    onClick: () => {
      router.push("/facultyStaff/2");
    },
  },
  {
    id: 3,
    name: "Dr. Ashraf Taha",
    major: "IT Major Doctor ",
    imgPath: "/src/assets/drAshraf.jpeg",
    description:
      "Dr. Ashraf Taha is an expert in web and cybersecurity, holding a doctoral degree in the field. He focuses on protecting online systems from cyber threats and helps teach, research, and develop cybersecurity practices. Dr. Taha's work enhances digital security for individuals and organizations alike.",
    onClick: () => {
      router.push("/facultyStaff/3");
    },
  },
];

const props = defineProps(["id"]);

function isSpecificDoctor() {
  return props.id !== undefined;
}

function getDoctorById(id) {
  return doctorsDummyData.find((doctor) => doctor.id === Number(id));
}
</script>
