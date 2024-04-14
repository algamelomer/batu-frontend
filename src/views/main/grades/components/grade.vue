<template>
    <!-- <p>{{ sitting_num }}</p>
<p>{{ dep }}</p> -->
    <Swiper title="Inquiry about exam results" :items="items" />
</template>
<script setup>
import Swiper from './Swiper.vue';
const props = defineProps({
    sitting_num: String,
    dep: String
});
const items = [
    {
        name: "test 1",
        grade: "555"
    },
    {
        name: "test 2",
        grade: "555"
    },
    {
        name: "test 3",
        grade: "555"
    },
    {
        name: "test 4",
        grade: "555"
    },
    {
        name: "test 5",
        grade: "555"
    },
    {
        name: "test 6",
        grade: "555"
    },
    {
        name: "test 7",
        grade: "555"
    },
]
</script>