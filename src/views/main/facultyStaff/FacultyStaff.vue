<template>
  <BaseHeaderImage imgPath="/src/assets/facultyStaff.png" title="Faculty & Staff"
    subtitle="Faculty and staff hub. Access resources, support, and important information for academic and administrative needs conveniently on this page." />
  <template v-if="!loader">
    <BaseContainer class="mx-5 py-16" v-if="!isSpecificDoctor()">
      <StaffSearch></StaffSearch>
    </BaseContainer>

    <BaseContainer class="mx-5 py-5">
      <BaseTitle title="Staff Members" class="mx-auto" />

      <ListTile v-if="!isSpecificDoctor()" v-for="doctor in doctorsData" :name="doctor.name" :major="doctor.title"
        :imgPath="doctor.image" @Click="handleclick(doctor.id)" class="mb-5 mt-5" />

      <template v-else>
        <template v-if="getDoctorById(props.id)">
          <template v-if="doctorLoader">
            <DoctorDetails :name="doctorData.faculty_member.name" :major="doctorData.faculty_member.title"
              :imgPath="doctorData.faculty_member.image" :description="doctorData.faculty_member.head_description" />
          </template>
          <template v-else>
            <div class="loader">
              <div role="status">
                <svg aria-hidden="true" class="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-green"
                  viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </template>
        </template>
      </template>

    </BaseContainer>
  </template>
  <template v-if="loader">
    <div class="flex justify-center items-center h-screen">
      <div class="loader">
        <div role="status">
          <svg aria-hidden="true" class="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-green"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </template>
</template>
<script setup>
import BaseHeaderImage from "@/components/BaseHeaderImage.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import StaffSearch from "./components/StaffSearch.vue";
import ListTile from "./components/ListTile.vue";
import DoctorDetails from "./components/DoctorDetails.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from '@/store'

const doctorData = ref(null)
const doctorsData = ref(null)

const doctorLoader = ref(false)

const loader = ref(true);
const getData = async () => {
  await useStore().getfacultyMember('/')
  doctorsData.value = useStore().facultyMember.data
  loader.value = false
}
getData();

var router = useRouter();

const handleclick = (id) => {
  router.push("/facultyStaff/" + id);
}

// var doctorsDummyData = [
//   {
//     id: 1,
//     name: "Dr. Osama El-nahass",
//     major: "IT Major Doctor / Constructor",
//     imgPath: "/src/assets/drOsama.jpeg",
//     description:
//       "Dr. Osama El-nahass is the Program President of the Information Technology Program. He leads the program, making sure students learn what they need for today's tech world. Dr. El-nahass is known for his dedication to quality education and keeping up with the latest trends in IT. He encourages innovation and helps students and faculty stay ahead in the field. His leadership makes the IT Program a great place to learn and prepares students well for their future careers in technology.",
//     onClick: () => {
//       router.push("/facultyStaff/1");
//     },
//   },
//   {
//     id: 2,
//     name: "Dr. Nehal El-Azaly",
//     major: "IT Major Doctor ",
//     imgPath: "/src/assets/drNehal.jpeg",
//     description:
//       "Dr. Nehal El-Azaly is an IT expert with a doctorate in the field. She specializes in areas like database management or data analytics, using her knowledge to teach, research, and help solve IT challenges. Dr. El-Azaly's work contributes to advancements in technology and benefits both students and professionals in the industry.",
//     onClick: () => {
//       router.push("/facultyStaff/2");
//     },
//   },
//   {
//     id: 3,
//     name: "Dr. Ashraf Taha",
//     major: "IT Major Doctor ",
//     imgPath: "/src/assets/drAshraf.jpeg",
//     description:
//       "Dr. Ashraf Taha is an expert in web and cybersecurity, holding a doctoral degree in the field. He focuses on protecting online systems from cyber threats and helps teach, research, and develop cybersecurity practices. Dr. Taha's work enhances digital security for individuals and organizations alike.",
//     onClick: () => {
//       router.push("/facultyStaff/3");
//     },
//   },
// ];

const props = defineProps(["id"]);

function isSpecificDoctor() {
  return props.id !== undefined;
}
const doctor = ref(false)
const currentid = ref(props.id)

const getDoctorById = async (id) => {
  if (currentid != id) {
    // currentid = id
    doctor.value = false;
  }
  if (!doctor.value) {
    await useStore().getfacultyMember(id)
    doctorData.value = useStore().facultyMember.data
    doctor.value = true;
    doctorLoader.value = true;
    console.log("text")
  }
  return true;
}

</script>
