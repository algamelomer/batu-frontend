<template>
    <div class="bg-gradient-to-br from-green-dark to-green relative pt-16 pb-10 rounded-lg flex flex-col items-center ">
        <div class="grid grid-cols-4 h-[90.99px] w-[90.99px] absolute top-1 right-1">
            <div v-for="index in 16" :key="index" class=" w-2 h-2 rounded-full bg-white opacity-25 m-auto"></div>
        </div>
        <BaseTitle title="Ask the university president" :animate="true" class="mx-auto"
            ask=" text-white border-white" />

        <div class=" flex justify-between mt-20 gap-20">
            <div class=" flex justify-between items-center gap-4 text-white font-Mulish">
                <div class=" w-[78px] h-[78px] rounded-full overflow-hidden"><img
                        src="@assets/349-3499617_person-placeholder-person-placeholder.png" alt=""
                        class=" w-full h-full object-cover"></div>
                <div class=" flex flex-col gap-1">
                    <h3 class=" font-bold text-[15px]">Name</h3>
                    <h4 class=" text-[18px]">Title</h4>
                </div>
            </div>
            <textarea class=" w-[397.15px] min-w-[397.15px] h-[105.49px] min-h-[105.49px] rounded-md "></textarea>
        </div>

        <button
            class=" mt-5 text-green-dark rounded-[55px] bg-white border-[1.4px] border-green-dark font-bold text-lg w-[137.9px] h-[38.61px] items-center hover:text-white hover:bg-green-dark hover:border-white transition-all duration-300">Submit</button>
        <!-- left dots -->
        <div class=" absolute -left-6 bottom-6 gap-3 flex flex-col opacity-30">
            <span v-for="index in 5" :key="index"
                class=" w-2 h-2 rounded-full bg-gradient-to-br from-[#97C3F9] to-[#93C1F9]"></span>
        </div>
    </div>
</template>