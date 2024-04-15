<template>
  <BaseHeaderImage imgPath="./facultyStaff.png" title="Faculty & Staff"
    subtitle="Faculty and staff hub. Access resources, support, and important information for academic and administrative needs conveniently on this page." />

  <BaseContainer class="md:mx-5 py-16" v-if="!isSpecificDoctor()">
    <StaffSearch @collageChosen="collageChosen"></StaffSearch>
  </BaseContainer>

  <BaseContainer class="md:mx-5 py-5">
    <BaseTitle title="Staff Members" class="mx-auto" />

    <ListTile v-if="!isSpecificDoctor()" v-for="doctor in searchedDoctors.length === 0
      ? doctorsDummyData
      : searchedDoctors" :name="doctor.name" :major="doctor.major" :imgPath="doctor.imgPath" :onClick="doctor.onClick"
      class="mb-5 mt-5" />
    <DoctorDetails v-else :name="getDoctorById(props.id).name" :major="getDoctorById(props.id).major"
      :imgPath="getDoctorById(props.id).imgPath" :isDean="getDoctorById(props.id).isDean || false"
      :description="getDoctorById(props.id).description" />
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
import { ref } from "vue";
var router = useRouter();
var doctorsDummyData = [
  {
    id: 1,
    collage: "Industry and Energy College",

    name: "Dr. Ibrahim El-fahham",
    major: "Industry and Energy collage dean",
    isDean: true,
    imgPath: "./drFahham.jpeg",
    description: `Dr. Ibrahim El-Fahham, as the Dean of the College of Industry and Energy, is a distinguished leader dedicated to advancing education and research in the fields of industry and energy. With a wealth of experience and expertise in academia and industry, Dr. El-Fahham plays a pivotal role in shaping the strategic direction and academic programs of the college.

As Dean, Dr. El-Fahham oversees the development and implementation of innovative curricula that meet the evolving needs of the industry. His leadership fosters a dynamic learning environment that encourages interdisciplinary collaboration, critical thinking, and practical application of knowledge.

Beyond his administrative responsibilities, Dr. El-Fahham is actively engaged in research initiatives aimed at addressing pressing challenges in the fields of industry and energy. He collaborates with faculty, students, and industry partners to conduct cutting-edge research and develop solutions that drive technological advancements and sustainability.

Dr. Ibrahim El-Fahham's visionary leadership and commitment to excellence contribute to the college's reputation for academic excellence and its role in shaping the future of industry and energy sectors.`,
    onClick: () => {
      router.push("/facultyStaff/1");
    },
  },

  {
    id: 2,
    collage: "Health science collage",

    name: "Dr. Rania El-Sharkawy",
    major: "Health Sciences collage dean",
    isDean: true,
    imgPath: "./drRaniaEl-Sharkawy.jpg",
    description: `Dr. Rania El-Sharkawy, serving as the Dean of the College of Health Sciences, is a distinguished leader passionate about advancing education and research in the field of health sciences. With extensive experience and expertise in academia and healthcare, Dr. El-Sharkawy plays a pivotal role in shaping the strategic direction and academic programs of the college.

In her capacity as Dean, Dr. El-Sharkawy is committed to fostering a dynamic learning environment that promotes excellence, innovation, and compassion in healthcare education. She spearheads the development of comprehensive curricula that equip students with the knowledge, skills, and ethical values necessary to excel in various healthcare professions.

Beyond her administrative duties, Dr. El-Sharkawy actively engages in research endeavors aimed at addressing pressing healthcare challenges and advancing medical knowledge. She collaborates with faculty, students, and healthcare practitioners to conduct cutting-edge research that contributes to improving patient care and public health outcomes.

Dr. Rania El-Sharkawy's visionary leadership and dedication to excellence make her a driving force in the College of Health Sciences, ensuring that graduates are well-prepared to make meaningful contributions to the healthcare field and improve the well-being of individuals and communities.
`,
    onClick: () => {
      router.push("/facultyStaff/2");
    },
  },

  {
    id: 3,
    collage: "Industry and Energy College",

    name: "Dr. Osama El-nahass",
    major: "IT Major Doctor / Constructor",
    imgPath: "./drOsama.jpeg",
    description:
      "Dr. Osama El-nahass is the Program President of the Information Technology Program. He leads the program, making sure students learn what they need for today's tech world. Dr. El-nahass is known for his dedication to quality education and keeping up with the latest trends in IT. He encourages innovation and helps students and faculty stay ahead in the field. His leadership makes the IT Program a great place to learn and prepares students well for their future careers in technology.",
    onClick: () => {
      router.push("/facultyStaff/3");
    },
  },
  {
    id: 4,
    collage: "Industry and Energy College",

    name: "Dr. Nehal El-Azaly",
    major: "IT Major Doctor ",
    imgPath: "./drNehal.jpeg",
    description:
      "Dr. Nehal El-Azaly is an IT expert with a doctorate in the field. She specializes in areas like database management or data analytics, using her knowledge to teach, research, and help solve IT challenges. Dr. El-Azaly's work contributes to advancements in technology and benefits both students and professionals in the industry.",
    onClick: () => {
      router.push("/facultyStaff/4");
    },
  },
  {
    id: 5,
    collage: "Industry and Energy College",

    name: "Dr. Ashraf Taha",
    major: "IT Major Doctor ",
    imgPath: "./drAshraf.jpeg",
    description:
      "Dr. Ashraf Taha is an expert in web and cybersecurity, holding a doctoral degree in the field. He focuses on protecting online systems from cyber threats and helps teach, research, and develop cybersecurity practices. Dr. Taha's work enhances digital security for individuals and organizations alike.",
    onClick: () => {
      router.push("/facultyStaff/5");
    },
  },
  {
    id: 6,
    collage: "Industry and Energy College",

    name: "Dr. Bassem Nashaat Zakher",
    major: "railway Major Doctor ",
    imgPath: "./drBassem_Nashaat.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    onClick: () => {
      router.push("/facultyStaff/6");
    },
  },
  {
    id: 7,
    collage: "Health science collage",

    name: "Dr. Abeer Ahmed Mohamed Hedia",
    major: "Major Doctor ",
    imgPath: "./drAbeer_Hedia.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    onClick: () => {
      router.push("/drAmira_Darwish/7");
    },
  },
  {
    id: 8,
    collage: "Health science collage",

    name: "Dr. Amira Muhammad Galal Darwish",
    major: "Head Food Industry Technology Program",
    imgPath: "./drAmira_Darwish.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    onClick: () => {
      router.push("/facultyStaff/8");
    },
  },
  {
    id: 9,
    collage: "Health science collage",

    name: "Dr. Mohamed Ahmed Ramadan",
    major: "IT Major Doctor ",
    imgPath: "./drMohamed_Ramadan.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    onClick: () => {
      router.push("/facultyStaff/9");
    },
  },
  {
    id: 10,
    collage: "Health science collage",

    name: "Dr. Wafaa ahmed shaker abu zeid",
    major: "IT Major Doctor ",
    imgPath: "./drWAFAA_ABUZEID.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    onClick: () => {
      router.push("/facultyStaff/10");
    },
  },

  {
    id: 11,
    collage: "Health science collage",

    name: "Mr. Salem Mohamed Fazzaa Salem",
    major: "Secretary General of the University",
    imgPath: "./drSalem.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    onClick: () => {
      router.push("/facultyStaff/11");
    },
  },
];
//

const searchedDoctors = ref([]);

const props = defineProps(["id"]);

function isSpecificDoctor() {
  return props.id !== undefined;
}

function getDoctorById(id) {
  const doc = doctorsDummyData.find((doctor) => doctor.id === Number(id));
  console.log(doc.isDean);
  return doc;
}

function getDoctorsByCollage(collage) {
  return doctorsDummyData.filter((doctor) => doctor.collage === collage);
}

function collageChosen(collage) {
  const doctors = getDoctorsByCollage(collage);
  searchedDoctors.value = doctors;
  console.log(doctors);
}
</script>
