<template>
  <div v-motion-fade-visible-once
    class="w-full flex flex-col justify-center items-center bg-gray-light dark:bg-darkMode-gray-light py-16">
    <BaseTitle title="Available Courses" :animate="true" class="mt-11" />
    <BaseSubtitle
      subtitle="Discover diverse academic paths. Explore our available courses, ranging from cutting-edge disciplines to time-tested subjects, shaping future leaders and innovators." />

    <!-- Filter semester -->
    <div class=" flex flex-col w-full items-center mb-5">
      <label for="semester" class="font-bold text-green-light py-2 px-4">
        academic year:
        <template v-for="(item, index) in uniqueAcademicYears" :key="index">
          <span v-if="index !== 0">, </span> <!-- Add comma separator for multiple years -->
          <span>{{ item }}</span>
        </template>
      </label>


      <select v-model="semester" id="semester"
        class="border-2 border-green-light text-green-light hover:bg-green-light hover:border-green-light hover:text-white font-bold py-2 px-4 cursor-pointer rounded-full focus:outline-none focus:shadow-outline h-12 w-6/12 text-sm transition-all duration-300">
        <option value="" disabled key="fade">Select semester</option>
        <option class="cursor-pointer hover:bg-green-light" v-for="semesterItem in uniqueSemesters"
          :key="semesterItem.id" :value="semesterItem.semester">
          {{ semesterItem.semester }}
        </option>
      </select>

    </div>

    <!-- cards -->
    <div class="grid grid-cols-1 min-[824px]:grid-cols-2 gap-10">
      <transition-group name="visible">

        <BaseDepartmentCard v-for="items in filteredCourses" cardWidth="w-11/12 m-auto md:w-[24rem] lg-[26rem]" :key="items.id" :title="items.name"
          :description="items.description" :lecturer="items.lecturer" iconPath="/src/assets/icons/courses.svg"
          :bgGreen="true" />
      </transition-group>

    </div>
  </div>
</template>

<script setup>
import BaseDepartmentCard from "@components/departments/BaseDepartmentCard.vue";
import { computed, ref } from 'vue'

const uniqueSemesters = computed(() => {
  const uniqueSet = new Set();
  return props.availableCourses.filter(course => {
    if (!uniqueSet.has(course.semester)) {
      uniqueSet.add(course.semester);
      return true;
    }
    return false;
  });
});

const uniqueAcademicYears = computed(() => {
  const uniqueYears = new Set();
  filteredCourses.value.forEach(course => {
    uniqueYears.add(course.academic_year);
  });
  return Array.from(uniqueYears);
});

const props = defineProps({ availableCourses: Array })
const semester = ref()
const filteredCourses = computed(() => {
  if (!semester.value) return [];
  return props.availableCourses.filter(item => item.semester === semester.value);
});
</script>
<style scoped>
/* select::-ms-expand {
  display: none;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
} */
</style>