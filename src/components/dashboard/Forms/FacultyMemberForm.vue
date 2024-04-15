<template>
    <form class="w-full px-8 py-4 rounded overflow-hidden shadow-lg bg-gray-700 m-auto flex flex-col gap-4"
        @submit.prevent="handleSubmit(form)">
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

        <img loading="lazy" v-if="form.imageUrl" :src="form.imageUrl" alt="Uploaded bg"
            class="mx-auto my-4 max-w-80 h-auto" />
        <div class=" flex justify-between px-12">
            <label for="bg">member image</label>
            <input id="bg" type="file" @change="handleImageFileChange"
                class="block w-3/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
        </div>
        <div class=" flex justify-between px-12">
            <label for="bg">member cv</label>
            <input id="bg" type="file" @change="handleCvFileChange"
                class="block w-3/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
        </div>
        <div class="px-6 py-4 flex flex-col w-full gap-4">
            <label for="departmen">member name</label>
            <input id="departmen" class="dashInput text-black text-base resizable bg-gray-400 placeholder-gray-700"
                type="text" placeholder="member name" v-model="form.name" />
            <label for="title">title</label>
            <input id="title" class="dashInput text-black text-base resizable bg-gray-400 placeholder-gray-700"
                type="text" placeholder="title" v-model="form.title" />
            <label for="sub_title">sub_title</label>
            <input id="sub_title" class="dashInput text-black text-base resizable bg-gray-400 placeholder-gray-700"
                type="text" placeholder="sub_title" v-model="form.sub_title" />
            <label for="head_description">head_description</label>
            <textarea id="head_description"
                class="dashTextArea text-black text-base resizable bg-gray-400 placeholder-gray-700" type="text"
                placeholder="head_description" v-model="form.head_description"></textarea>
            <label for="word">word</label>
            <textarea id="word" class="dashTextArea text-black text-base resizable bg-gray-400 placeholder-gray-700"
                type="text" placeholder="word" v-model="form.word"></textarea>
            <label for="email">email</label>
            <input id="email" class="dashInput text-black text-base resizable bg-gray-400 placeholder-gray-700"
                type="email" placeholder="email" v-model="form.email" />


            <!-- certificates -->
            <div class="flex flex-col w-full gap-4">
                <label for="certificates_title">certificates (لاضافه وظيف اكتبها ثم اضغط Add اما اذا كنت تريد ان تحفذفها
                    اضغط علي الوظيفه المراد حذفها)</label>
                <div class="w-full flex gap-4">
                    <div class=" flex flex-col md:flex-row w-full gap-4">
                        <input id="certificates_title"
                            class=" dashInput  w-11/12 text-black text-base  bg-gray-400 placeholder-gray-700"
                            type="text" v-model="certificates_title_Add" placeholder="certificates_title" />
                        <textarea id="certificates_description"
                            class=" dashInput  w-11/12 text-black text-base  bg-gray-400 placeholder-gray-700"
                            type="text" v-model="certificates_description_Add" placeholder="certificates_description" />
                    </div>
                    <span @click="AddCertificates"
                        class=" cursor-pointer m-auto bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-500 rounded">Add</span>
                </div>
                <transition-group tag="ul" name="list" class="relative p-0 grid grid-cols-1 gap-4">
                    <li class=" bg-slate-500 shadow-lg rounded-lg w-full px-4 py-2 cursor-pointer text-center m-auto"
                        v-for="(items, index) in (certificates_title && certificates_description)" :key="index"
                        @click="deleteCertificate(index)">
                        <span class=" flex gap-2">
                            <p class=" text-white dark:text-black">title: </p>{{ certificates_title[index] }}
                        </span>
                        <span class=" flex gap-2">
                            <p class=" text-white dark:text-black">description: </p>
                            <p>{{ certificates_description[index] }}</p>
                        </span>
                    </li>

                </transition-group>
            </div>

            <!-- researches -->
            <div class="flex flex-col w-full gap-4">
                <label for="Researches_title">Researches (لاضافه وظيف اكتبها ثم اضغط Add اما اذا كنت تريد ان تحفذفها
                    اضغط علي الوظيفه المراد حذفها)</label>
                <div class="w-full flex gap-4">
                    <div class=" flex flex-col md:flex-row w-full gap-4">
                        <input id="Researches_title"
                            class=" dashInput  w-11/12 text-black text-base  bg-gray-400 placeholder-gray-700"
                            type="text" v-model="Researches_title_Add" placeholder="Researches_title" />
                        <textarea id="Researches_description"
                            class=" dashInput  w-11/12 text-black text-base  bg-gray-400 placeholder-gray-700"
                            type="text" v-model="Researches_description_Add" placeholder="Researches_description" />
                    </div>
                    <span @click="AddResearches"
                        class=" cursor-pointer m-auto bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-500 rounded">Add</span>
                </div>
                <transition-group tag="ul" name="list" class="relative p-0 grid grid-cols-1 gap-4">
                    <li class=" bg-slate-500 shadow-lg rounded-lg w-full px-4 py-2 cursor-pointer text-center m-auto"
                        v-for="(items, index) in (Researches_title && Researches_description)" :key="index"
                        @click="deleteResearche(index)">
                        <span class=" flex gap-2">
                            <p class=" text-white dark:text-black">title: </p>{{ Researches_title[index] }}
                        </span>
                        <span class=" flex gap-2">
                            <p class=" text-white dark:text-black">description: </p>
                            <p>{{ Researches_description[index] }}</p>
                        </span>
                    </li>

                </transition-group>
            </div>


            <label for="career">career</label>
            <textarea id="career" class="dashTextArea text-black text-base resizable bg-gray-400 placeholder-gray-700"
                type="text" placeholder="career" v-model="form.career"></textarea>
            <label for="experience">experience</label>
            <textarea id="experience"
                class="dashTextArea text-black text-base resizable bg-gray-400 placeholder-gray-700" type="text"
                placeholder="experience" v-model="form.experience"></textarea>

            <label for="scientific_interests">scientific_interests</label>
            <textarea id="scientific_interests"
                class="dashTextArea text-black text-base resizable bg-gray-400 placeholder-gray-700" type="text"
                placeholder="scientific_interests" v-model="form.scientific_interests"></textarea>
        </div>
        <button
            class="m-auto bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-500 rounded">Upload</button>

    </form>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios'
// import { event } from 'jquery';


const props = defineProps({
    id: String,
});


const college = ref()
const department = ref()

const apiData = ref()

const form = ref({
    department_id: '',
    faculty_id: '',
    name: '',
    image: null,
    title: '',
    sub_title: '',
    career: '',
    experience: '',
    scientific_interests: '',
    user_id: '',
    id: '',
    imageUrl: null,
    head_description: '',
    word: '',
    email: '',
    certificates_title: '',
    certificates_description: '',
    cv: null,
    cvUrl: null,
    Researches_title: '',
    Researches_description: '',
});

const filteredDepartments = ref()

const certificates_title_Add = ref()
const certificates_description_Add = ref()

const certificates_title = ref([])
const certificates_description = ref([])

const AddCertificates = () => {
    if ((certificates_title_Add.value.trim() !== '')) {
        certificates_title.value.push(certificates_title_Add.value);
        certificates_description.value.push(certificates_description_Add.value);
        // form.value.job_opportunities = form.value.job_opportunities.join(',');
        certificates_title_Add.value = '';
        certificates_description_Add.value = '';
    }
}


const deleteCertificate = (index) => {
    // const index = certificates.value.indexOf(certificate);
    if (index !== -1) {
        certificates_title.value.splice(index, 1);
        certificates_description.value.splice(index, 1);
    }
}





const Researches_title_Add = ref()
const Researches_description_Add = ref()

const Researches_title = ref([])
const Researches_description = ref([])



const AddResearches = () => {
    if ((Researches_title_Add.value.trim() !== '')) {
        Researches_title.value.push(Researches_title_Add.value);
        Researches_description.value.push(Researches_description_Add.value);
        // form.value.job_opportunities = form.value.job_opportunities.join(',');
        Researches_title_Add.value = '';
        Researches_description_Add.value = '';
    }
}


const deleteResearche = (index) => {
    if (index !== -1) {
        Researches_title.value.splice(index, 1);
        Researches_description.value.splice(index, 1);
    }
}



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



const handleImageFileChange = (event) => {
    const selectedFile = event.target.files[0];
    form.value.image = selectedFile;
    form.value.imageUrl = URL.createObjectURL(selectedFile);
};

const handleCvFileChange = (event) => {
    const selectedFile = event.target.files[0];
    form.value.cv = selectedFile;
    form.value.cvUrl = URL.createObjectURL(selectedFile);
}

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
        if (props.id) {
            const response = await axios.get('/api/staff/' + props.id);
            apiData.value = response.data.data.faculty_member
            form.value.department_id = apiData.value.department_id;
            form.value.faculty_id = apiData.value.faculty_id;
            form.value.name = apiData.value.name;
            form.value.image = apiData.value.image;
            form.value.title = apiData.value.title;
            form.value.sub_title = apiData.value.sub_title;
            form.value.career = apiData.value.career;
            form.value.experience = apiData.value.experience;
            form.value.scientific_interests = apiData.value.scientific_interests;
            form.value.id = apiData.value.id;
            form.value.head_description = apiData.value.head_description;
            form.value.word = apiData.value.word;
            form.value.email = apiData.value.email;
            form.value.certificates_title = apiData.value.certificates_title;
            form.value.certificates_description = apiData.value.certificates_description;
            form.value.cv = apiData.value.cv
            form.value.Researches_title = apiData.value.Researches_title;
            form.value.Researches_description = apiData.value.Researches_description
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        if (form.value.image) {
            form.value.imageUrl = form.value.image
            form.value.image = form.value.image
        }
        if (form.value.cv) {
            form.value.cvUrl = form.value.cv
            form.value.cv = form.value.cv
        }
        if (form.value.faculty_id) {
            updateFilteredDepartments(form.value.faculty_id);
        }
        if (form.value.certificates_title) {
            // jobAdd.value = form.value.job_opportunities
            certificates_title.value = form.value.certificates_title.split(',')
            certificates_description.value = form.value.certificates_description.split(',')
        }
        if (form.value.Researches_title) {
            // jobAdd.value = form.value.job_opportunities
            Researches_title.value = form.value.Researches_title.split(',')
            Researches_description.value = form.value.Researches_description.split(',')
        }
    }
};

const handleSubmit = (form) => {
    form.certificates_title = certificates_title.value.join(',');
    form.certificates_description = certificates_description.value.join(',');
    form.Researches_title = Researches_title.value.join(',');
    form.Researches_description = Researches_description.value.join(',');

    // (form.job_opportunities)
    console.log(form)
    authStore.handleFacultyMember(form)
}

// onMounted(() => {
fetchData();
// });
</script>