<template>
    <BaseHeaderImage title="Students Exam Results"
        subtitle="View and celebrate academic achievements on the Students Exam Results page, your gateway to success, progress, and future opportunities. Explore now!"
        imgPath="/grades.png" />
    <div class="mt-10 px-10">
        <template v-if="dep && sitting_num">
            <grade :sitting_num="sitting_num" :dep="dep"/>
        </template>
        <template v-if="!dep && !sitting_num">
            <Form />
        </template>
    </div>
</template>

<script setup>
import Form from './components/Form.vue';
import grade from './components/grade.vue'

defineProps({
    sitting_num: String,
    dep: String
});
</script>
