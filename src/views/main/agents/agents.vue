<template>
    <BaseHeaderImage title="College agents"
        subtitle="College Connect is a program dedicated to offering a nurturing and empowering environment for students navigating the challenges of college life. Our team of committed professionals collaborates closely with each student to craft a customized support plan tailored to their distinct academic and personal requirements.
                Whether it's academic struggles, emotional hurdles, or simply adapting to campus life, College Connect is here to provide the guidance and resources needed for success. We understand that every student's journey is unique, and we are committed to fostering an inclusive and supportive community where students can thrive and achieve their full potential."
        imgPath="/src/assets/youth.jpg" />

    <template v-if="noSpecificAgent()">
        <BaseContainer class="min-h-64 py-5 mx-5">
            <BaseTitle title="Our Approach" class="mt-16 mx-auto" />
            <BaseSubtitle
                subtitle="At College Connect, we firmly believe in unlocking the full potential of every student. Our philosophy centers around empowerment, respect, and collaboration. We partner with each student to recognize their strengths and cultivate them, while also tackling any obstacles hindering their progress. Our mission is to equip students with the skills and self-assurance necessary to surmount challenges and flourish in every aspect of their college experience."
                class="mt-5" />
        </BaseContainer>

        <BaseContainer class="min-h-64 py-5 mx-5">
            <BaseTitle title="Colleges Agents" class="mt-16 mx-auto" />
            <CardGrid class="mt-5" :cards="dummyCards" />
        </BaseContainer>

        <BaseContainer class="min-h-64 py-5 mx-5">
            <BaseTitle title="Our Services" class="mt-16 mx-auto" />
            <BaseSubtitle
                subtitle="In our College Connect program, we provide a comprehensive array of services tailored to support students in realizing their aspirations. These services encompass one-on-one counseling, group therapy sessions, life skills workshops, and educational assistance. Our dedicated team is devoted to fostering a secure and enriching space where students can delve into their passions, cultivate fresh talents, and forge connections with peers who understand their journey.
                        Furthermore, we prioritize collaboration with families and community stakeholders to guarantee that each student receives the holistic support necessary for achievement. By working hand in hand with these vital partners, we ensure that students are equipped with the resources and encouragement needed to thrive academically and personally throughout their college experience."
                class="mt-5" />/
        </BaseContainer>
    </template>

    <AgentDetails v-else :name="getAgentById(props.id).name" :major="getAgentById(props.id).major"
        :imgPath="getAgentById(props.id).iconPath" :description="getAgentById(props.id).word" />
</template>

<script setup>
import CardGrid from "@/components/CardGrid.vue";
import { useRouter } from "vue-router";
import AgentDetails from "./components/AgentDetails.vue";

const router = useRouter();
const props = defineProps({
    id: String,
});

const dummyCards = [
    {
        id: 1,

        iconPath: "/src/assets/personPlaceholder.png",
        title: "وكيل كلية تكنولوجيا الصناعة والطاقة د علاء عرفة",
        name: "د علاء عرفة",
        major: "وكيل كلية تكنولوجيا الصناعة والطاقة",
        word: `يطيب لي أن أتقدم إليكم بأصدق التهاني وأطيب الأمنيات بعام جامعي جديد حافلاً بالجد والاجتهاد مكللاً بالنجاح والتميز، كما أود أن أرحب بأبنائي الطلاب والطالبات الجدد الذين التحقوا بالكلية في هذا العام ليصبحوا جزءاً هاماً من نسيجها متمنياً لهم دوام التقدم والتوفيق في مسيرتهم الجامعية الجديدة.
  
  إنه لمن دواعي فخري وإعتزازي بكلية الزراعة ما تحتله من مكانة مرموقة وما تلعبه من دوراً متميزاً بما نالته من إعتماد أكاديمي، وبما تزخر به من أساتذة وعلماء أجلاء، وبما لديها من برامج تعليمية وأنشطة بحثية متنوعة، وبما تقدمه من خدمات مجتمعية وبيئية كجزء أصيل من رؤية ورسالة جامعة قناة السويس.
  
  وتسعى الكلية إلى النهوض بالمستوي الأكاديمي لأقسامها العلمية والإرتقاء بجودة البيئة التعليمية، وتضع الكلية ضمن أولوياتها تزويد الطلاب والطالبات بالمعارف والمهارات اللازمة وتأهيل الكوادر المتميزة القادرة علي المنافسة في سوق العمل بما يسهم في دفع عجلة التنمية وتعزيز النمو الاقتصادي.
  
  كما أود أن أؤكد لكم حرص وإهتمام قطاع وإدارات شئون التعليم والطلاب بالكلية على توفير المناخ الملائم لممارسة شتى الأنشطة الطلابية لغرس السلوكيات الايجابية ولتحقيق التميز والإبداع وتنمية الجوانب الوجدانية والمهارية لخريجي هذه الكلية العريقة.
  
  أبنائي الطلاب والطالبات… أغتنم هذه الفرصة لكي أحثكم على ضرورة الحفاظ علي مقدرات الكلية، كما أدعوكم إلى التمسك والالتزام بحسن الخلق، وتعظيم القيم والتقاليد الجامعية، وأوصيكم بالجد والاجتهاد والمواظبة، كما أوصيكم بأن تقبلوا بمزيد من الإصرار والعزيمة والمثابرة علي دراستكم لتنهلوا من منابع العلم والمعرفة في شتي مجالات العلوم الزراعية.
  
  وأخيراً لا يسعني إلا أن أدعو الله عز وجل أن تكون دراستكم بالكلية مثمرة وناجحة وزاخرة بالذكريات الجميلة الطيبة، وأن يكلل جهدكم بالنجاح والتميز، وفقنا الله وإياكم إلي ما فيه الخير لجامعتنا ومصرنا الحبيبة.`,

        onclick: () => router.push("/agents/1"),
    },

    {
        id: 2,
        iconPath: "/WhatsApp Image 2024-04-15 at 9.16.45 PM - Rasha Yakout.jpeg",
        title: "وكيل كلية تكنولوجيا العلوم الصحية د رشا ياقوت",
        name: "د رشا ياقوت",
        major: "وكيل كلية تكنولوجيا العلوم الصحية",
        word: `يطيب لي أن أتقدم إليكم بأصدق التهاني وأطيب الأمنيات بعام جامعي جديد حافلاً بالجد والاجتهاد مكللاً بالنجاح والتميز، كما أود أن أرحب بأبنائي الطلاب والطالبات الجدد الذين التحقوا بالكلية في هذا العام ليصبحوا جزءاً هاماً من نسيجها متمنياً لهم دوام التقدم والتوفيق في مسيرتهم الجامعية الجديدة.
  
  إنه لمن دواعي فخري وإعتزازي بكلية الزراعة ما تحتله من مكانة مرموقة وما تلعبه من دوراً متميزاً بما نالته من إعتماد أكاديمي، وبما تزخر به من أساتذة وعلماء أجلاء، وبما لديها من برامج تعليمية وأنشطة بحثية متنوعة، وبما تقدمه من خدمات مجتمعية وبيئية كجزء أصيل من رؤية ورسالة جامعة قناة السويس.
  
  وتسعى الكلية إلى النهوض بالمستوي الأكاديمي لأقسامها العلمية والإرتقاء بجودة البيئة التعليمية، وتضع الكلية ضمن أولوياتها تزويد الطلاب والطالبات بالمعارف والمهارات اللازمة وتأهيل الكوادر المتميزة القادرة علي المنافسة في سوق العمل بما يسهم في دفع عجلة التنمية وتعزيز النمو الاقتصادي.
  
  كما أود أن أؤكد لكم حرص وإهتمام قطاع وإدارات شئون التعليم والطلاب بالكلية على توفير المناخ الملائم لممارسة شتى الأنشطة الطلابية لغرس السلوكيات الايجابية ولتحقيق التميز والإبداع وتنمية الجوانب الوجدانية والمهارية لخريجي هذه الكلية العريقة.
  
  أبنائي الطلاب والطالبات… أغتنم هذه الفرصة لكي أحثكم على ضرورة الحفاظ علي مقدرات الكلية، كما أدعوكم إلى التمسك والالتزام بحسن الخلق، وتعظيم القيم والتقاليد الجامعية، وأوصيكم بالجد والاجتهاد والمواظبة، كما أوصيكم بأن تقبلوا بمزيد من الإصرار والعزيمة والمثابرة علي دراستكم لتنهلوا من منابع العلم والمعرفة في شتي مجالات العلوم الزراعية.
  
  وأخيراً لا يسعني إلا أن أدعو الله عز وجل أن تكون دراستكم بالكلية مثمرة وناجحة وزاخرة بالذكريات الجميلة الطيبة، وأن يكلل جهدكم بالنجاح والتميز، وفقنا الله وإياكم إلي ما فيه الخير لجامعتنا ومصرنا الحبيبة.`,
        onclick: () => router.push("/agents/2"),
    },
];

function noSpecificAgent() {
    return props.id === undefined;
}

function getAgentById(id) {
    return dummyCards.find((agent) => agent.id === Number(id));
}
</script>
