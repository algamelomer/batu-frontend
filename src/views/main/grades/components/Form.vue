<template>
    <div
        class=" bg-gray-light dark:bg-darkMode-gray-light p-12 w-full m-auto rounded-md flex flex-col items-center text-center">
        <h1 class=" font-mulish font-bold text-4xl text-green-dark">{{ title }}</h1>
        <hr width="50px" class="border-black border-[1.5px] mt-5 mb-8" />
        <form class=" grid grid-cols-1 w-full gap-4 min-[850px]:grid-cols-2 min-[1149px]:px-[135px]"
            @submit.prevent="submitForm(form)">
            <div class="relative h-fit w-full sm:w-fit m-auto">
                <!-- faculty -->
                <select v-model="formData.faculty" required
                    class=" text-xs min-[370px]:text-xs min-[400px]:text-sm sm:text-base cursor-pointer w-full m-auto sm:w-[335px] h-14 p-2 pr-10 border border-green-dark rounded-[55px] shadow-sm focus:outline-none focus:border-green-dark text-center text-white bg-green hover:bg-green-dark transition duration-300 appearance-none">
                    <option value="" disabled selected>Choose your Faculty</option>
                    <template v-for=" faculty in props.data.faculties">
                        <option :value="faculty.id">{{ faculty.name }}</option>
                    </template>
                </select>
                <div
                    class="absolute inset-y-0 top-1 right-1 min-[360px]:right-4 flex items-center pr-2 pointer-events-none text-white">
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                </div>
            </div>
            <!-- department -->
            <div class="relative h-fit w-full sm:w-fit m-auto">
                <select v-model="formData.department_id" required
                    class=" text-xs min-[370px]:text-xs min-[400px]:text-sm sm:text-base cursor-pointer w-full m-auto sm:w-[335px] h-14 p-2 pr-10 border border-green-dark rounded-[55px] shadow-sm focus:outline-none focus:border-green-dark text-center text-white bg-green hover:bg-green-dark transition duration-300 appearance-none">
                    <option value="" disabled selected>Choose your department</option>
                    <template v-for=" department in props.data.departments">
                        <template v-if="department.faculty_id == formData.faculty">
                            <option :value="department.id">{{ department.name }}</option>
                        </template>
                    </template>
                </select>
                <div
                    class="absolute inset-y-0 top-1 right-1 min-[360px]:right-4 flex items-center pr-2 pointer-events-none text-white">
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                </div>
            </div>
            <div class=" gap-4 min-[850px]:gap-0 min-[850px]:col-span-2 flex flex-col min-[850px]:flex-row">

                <input placeholder="Enter your Seat-Number..." v-model="formData.sitting_num" type="text" required
                    class="m-auto text-xs min-[370px]:text-xs min-[400px]:text-sm sm:text-base relative w-full sm:w-[335px] min-[850px]:w-[462px] h-14 border-[1px] rounded-[55px] shadow-sm focus:outline-none text-center text-green-dark border-green transition duration-300 focus:border-green-dark focus:border-2" />

                <button :disabled="loading" type="submit"
                    class=" sm:w-[335px] text-xs min-[370px]:text-xs min-[400px]:text-sm sm:text-base m-auto relative w-full min-[850px]:w-[213px] h-14 border border-green-dark rounded-[55px] shadow-sm focus:outline-none focus:border-green text-center text-white bg-green transition duration-300 hover:bg-green-dark">
                    <span v-if="loading" class="absolute inset-0 flex items-center justify-center">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V2.5a.5.5 0 00-1 0V4a.5.5 0 00.5.5H12a.5.5 0 000-1h-.5A8 8 0 004 12h.5a.5.5 0 000-1H4zm13.034 5.66a8 8 0 01-1.41-1.41l.707-.707a.5.5 0 00-.353-.854h-1.414a.5.5 0 000 1h.663l-.375.375a.5.5 0 10.707.707l.375-.375v.663a.5.5 0 001 0v-1.414a.5.5 0 00-.854-.354l-.707.707zm-10.67-10.68a8 8 0 011.41 1.41l-.707.707a.5.5 0 00.353.854h1.414a.5.5 0 000-1h-.663l.375-.375a.5.5 0 10-.707-.707l-.375.375v-.663a.5.5 0 00-1 0v1.414a.5.5 0 00.854.354l.707-.707z">
                            </path>
                        </svg>
                    </span> <span v-else>
                        <p class=" gap-2 flex justify-center items-center"><span>Submit</span><font-awesome-icon
                                icon="angle-up" class=" rotate-90" /></p>
                    </span>
                </button>
            </div>
        </form>
        <template v-if="err">
            <p class=" text-red-700 text-center items-center justify-center mt-4">
                <span v-if=" err == 0">an error has occurred</span>
                <span v-if=" err == 1 ">sitting number or department is incorrect</span>
                <span v-if=" err == 2 ">sitting number contain only numbers</span>
            </p>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    data: String,
    err: String
})
const router = useRouter();
const title = "Inquiry about exam results"
const loading = ref(false);
const formData = ref({
    faculty: "",
    department_id: "",
    sitting_num: "",
});

const submitForm = () => {
    router.push({ path: '/grades/' + formData.value.sitting_num + '/' + formData.value.department_id });
};

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23353E48" viewBox="0 0 20 20"><path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z"/></svg>'); */
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    padding-right: 1.5rem;
}
</style>