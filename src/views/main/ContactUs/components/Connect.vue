<template>
    <div class=" m-auto w-full md:w-[652px] flex flex-col gap-8 text-center items-center">
        <h1 class=" text-green font-mulish font-bold text-4xl md:text-5xl">{{ title }}</h1>
        <!-- <p class=" font-robo font-medium text-lg md:text-xl text-green-light">{{ p }}</p> -->
        <router-link to="/soon"
            class=" text-white w-44 h-14 md:w-48 md:h-16 rounded-[55px] bg-green hover:bg-green-dark transition duration-300 text-center flex justify-center items-center">Connect</router-link>
    </div>
</template>

<script setup>
const title = `جامعة برج العرب التكنولوجية 
مدينة برج العرب الجديدة
محافظة الإسكندرية`
const p = "Reach out effortlessly. Our contact page ensures swift communication with our dedicated care team. Your health inquiries matter to us."
</script>