<!-- views/NewsPage.vue -->
<template>
  <div class="flex flex-col items-center w-full">
    <!-- <h1 class="text-green font-mulish text-5xl font-bold mb-4">{{ props.title }}</h1>
    <div class="line mb-8"></div>
    <p class="max-w-[53rem] text-center text-[#ccd2e9] text-lg font-medium mb-9">{{ props.subtitle }}</p> -->
    <BaseTitle :title="props.title" :animate="false" />
    <BaseSubtitle :subtitle="props.subtitle" class="-mx-4" />
    <NewsSection :apiData="apiData" :mainCard="mainCard" :numWordsToShow="numWordsToShow" :handleClick="handleClick"
      :truncatedDescription="truncatedDescription" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
// import axios from 'axios';
import NewsSection from './news_components/NewsList.vue';
import BaseTitle from "@components/BaseTitle.vue"
import BaseSubtitle from "@components/BaseSubtitle.vue"
// js functions
import autoChangeData from './news_components/js/autoChangeData'
import clickhandler from './news_components/js/clickhandler'
import truncatedDescription from './news_components/js/truncatedDescription'
import isActive from './news_components/js/isActive'

const props = defineProps({
  news: Array,
  title: String,
  subtitle: String
})


const mainCard = ref({ title: '', content: '', img: '' });
const apiData = ref(props.news);
let counter = 1;
let isPaused = false;
// const subtitle = ref("");
const numWordsToShow = 15;

const handleClick = (items) => {
  clickhandler(apiData, mainCard, isPaused, items)
};


const activeCard = () => {
  isActive(apiData, mainCard)
};

const test = () => {
  autoChangeData(apiData, mainCard, counter, isPaused, activeCard);
}

test()

</script>
