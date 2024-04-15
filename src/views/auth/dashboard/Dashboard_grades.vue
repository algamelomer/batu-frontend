<template>
    <form class="w-full px-8 py-4 min-h-screen rounded overflow-hidden shadow-lg bg-gray-700 m-auto flex flex-col gap-4"
        @submit.prevent="authStore.handleGrades(form)">
        <div class="relative flex gap-8">
            <select id="faculty" v-model="form.faculty_id" @change="updateFilteredDepartments"
                class="block appearance-none w-full bg-gray-400 border border-gray-300 text-gray-900 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500">
                <option disabled value="">Select Faculty</option>
                <option v-for="faculty in college" :key="faculty.id" :value="faculty.id">{{ faculty.name }}</option>
            </select>
            <select id="department" v-model="form.department_id"
                class="block appearance-none w-full bg-gray-400 border border-gray-300 text-gray-900 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500">
                <option disabled value="">Select Department</option>
                <option v-for="dep in filteredDepartments" :key="dep.id" :value="dep.id">{{ dep.name }}</option>
            </select>
        </div>
        <select id="academic_year" v-model="form.academic_year"
            class="block appearance-none w-full bg-gray-400 border border-gray-300 text-gray-900 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500">
            <option disabled value="">Select academic year</option>
            <option v-for="index in 4" :key="index" :value="index"> {{ index }} </option>
        </select>
        <div class=" flex justify-between px-12">
            <label for="bg">department grades in excel</label>
            <input id="bg" type="file" @change="handleFileFileChange"
                class="block w-3/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
        </div>

        <button
            class="m-auto bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-500 rounded">Upload</button>

    </form>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios'


const props = defineProps({
    id: String,
});


const college = ref()
const department = ref()

// const apiData = ref()

const form = ref({
    department_id: '',
    faculty_id: '',
    academic_year: '',
    file: '',
    user_id: '',
    id: '',
});

const filteredDepartments = ref()

const updateFilteredDepartments = (event) => {
    let selectedFacultyId = ''
    if (event.target) {
        selectedFacultyId = event.target.value;
    }
    else {
        selectedFacultyId = event;
    }
    filteredDepartments.value = department.value.filter(dep => dep.faculty_id == selectedFacultyId);
};



const handleFileFileChange = (event) => {
    const selectedFile = event.target.files[0];
    form.value.file = selectedFile;
};

const authStore = useAuthStore();

const user = ref()


const fetchData = async () => {
    try {
        user.value = await inject('user');
        form.value.user_id = user.value.authUser.id;
        const faculty = await axios.get('/api/faculty/');
        college.value = faculty.data.data;
        const dep = await axios.get('/api/department/');
        department.value = dep.data.departments;
    }
    //         // (department.value)
    //         if (props.id) {
    //             const response = await axios.get('/api/member/' + props.id);
    //             // (response.data.data)
    //             apiData.value = response.data.data
    //             form.value.department_id = apiData.value.department_id;
    //             form.value.faculty_id = apiData.value.faculty_id;
    //             form.value.name = apiData.value.name;
    //             form.value.image = apiData.value.image;
    //             form.value.title = apiData.value.title;
    //             form.value.sub_title = apiData.value.sub_title;
    //             form.value.career = apiData.value.career;
    //             form.value.experience = apiData.value.experience;
    //             form.value.scientific_interests = apiData.value.scientific_interests;
    //             form.value.id = apiData.value.id;
    //         }
    catch (error) {
        console.error('Error fetching data:', error);
    }
};



// onMounted(() => {
fetchData();
// });
</script>