<template>
    <BaseHeaderImage title="Undergraduates" subtitle="Explore our Undergraduates services hub. From academic support to extracurricular activities, discover resources to enhance your college experience." imgPath="src/assets/undergraduates.png"/>
    <BaseContainer>
        <BaseTitle title="Undergraduates Services" class=" mx-auto"/>
        <CardGrid :cards="dummyCards" class=" mt-12" text_style="!text-black !text-2xl !font-Mulish "/>
    </BaseContainer>
</template>

<script setup>
import BaseHeaderImage from "@/components/BaseHeaderImage.vue";
import CardGrid from "@components/CardGrid.vue";
import BaseContainer from "@components/BaseContainer.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import { useRouter } from 'vue-router'

const router = useRouter()

var dummyCards=[
   {
        iconPath: '/src/assets/icons/exam.svg',
        title: 'Exam Results',
        onclick: () => router.push('/exam'),
             },
      {
        iconPath: 'src/assets/icons/mail.svg',
        title: 'Students Mail',
        onclick: () => router.push('/mail'),
             },
      {
        iconPath: 'src/assets/icons/pay.svg',
        title: 'Pay electronically',
        onclick: () => router.push('/pay'),
            
            },
      {
        iconPath:'src/assets/icons/schedule.svg',
        title: 'Class schedules',
        onclick: () => router.push('/schedule'),
             },
      {
        iconPath: 'src/assets/icons/liberary.svg',
        title: 'Library',
        onclick: () => router.push('/liberary'),
             
      },
      {
        iconPath: 'src/assets/icons/lms.svg',
        title: 'BATU LMS',
        onclick: () => router.push('/lms'),
      },
      {
        iconPath:
          'src/assets/icons/schedule.svg',
        title: 'Exam schedules',
        onclick: () => router.push('/schedule'),
             },
      {
        iconPath: 'src/assets/icons/course.svg',
        title: 'Course registration',
        onclick: () => router.push('/course'),
      },
      {
        iconPath: 'src/assets/icons/dashboard.svg',
        title: 'Dashboard',
        onclick: () => router.push('/dashboard'),
      },
]
</script>

