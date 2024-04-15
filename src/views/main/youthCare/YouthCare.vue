<template>
  <BaseHeaderImage
    title="Youth Care"
    subtitle="Youth Care is a program that aims to provide a safe and supportive environment for young people who are experiencing difficulties in their lives. Our team of dedicated professionals works closely with each individual to develop a personalized care plan that addresses their unique needs and challenges."
    imgPath="/src/assets/youth.jpg"
  />

  <template v-if="noSpecificAgent()">
    <BaseContainer class="min-h-64 py-5 mx-5">
      <BaseTitle title="Our Approach" class="mt-16 mx-auto" />
      <BaseSubtitle
        subtitle="At Youth Care, we believe that every young person deserves the opportunity to reach their full potential. Our approach is based on the principles of empowerment, respect, and collaboration. We work with each individual to identify their strengths and build on them, while also addressing any barriers to success. Our goal is to help young people develop the skills and confidence they need to overcome challenges and thrive in all areas of their lives."
        class="mt-5"
      />
    </BaseContainer>

    <BaseContainer class="min-h-64 py-5 mx-5">
      <BaseTitle title="Colleges Agents" class="mt-16 mx-auto" />
      <CardGrid class="mt-5" :cards="dummyCards" />
    </BaseContainer>

    <BaseContainer class="min-h-64 py-5 mx-5">
      <BaseTitle title="Our Services" class="mt-16 mx-auto" />
      <BaseSubtitle
        subtitle="We offer a range of services to support young people in achieving their goals. These include individual counseling, group therapy, life skills training, and educational support. Our team is committed to providing a safe and nurturing environment where young people can explore their interests, develop new skills, and connect with others who share their experiences. We also work closely with families and other community partners to ensure that each young person receives the support they need to succeed."
        class="mt-5"
      />/
    </BaseContainer>
  </template>

  <AgentDetails
    v-else
    :name="getAgentById(props.id).name"
    :major="getAgentById(props.id).major"
    :imgPath="getAgentById(props.id).iconPath"
    :description="getAgentById(props.id).word"
  />
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

    onclick: () => router.push("/youth_care/1"),
  },

  {
    id: 2,
    iconPath: "/src/assets/personPlaceholder.png",
    title: "وكيل كلية تكنولوجيا العلوم الصحية د رشا ياقوت",
    name: "د رشا ياقوت",
    major: "وكيل كلية تكنولوجيا العلوم الصحية",
    word: `يطيب لي أن أتقدم إليكم بأصدق التهاني وأطيب الأمنيات بعام جامعي جديد حافلاً بالجد والاجتهاد مكللاً بالنجاح والتميز، كما أود أن أرحب بأبنائي الطلاب والطالبات الجدد الذين التحقوا بالكلية في هذا العام ليصبحوا جزءاً هاماً من نسيجها متمنياً لهم دوام التقدم والتوفيق في مسيرتهم الجامعية الجديدة.

إنه لمن دواعي فخري وإعتزازي بكلية الزراعة ما تحتله من مكانة مرموقة وما تلعبه من دوراً متميزاً بما نالته من إعتماد أكاديمي، وبما تزخر به من أساتذة وعلماء أجلاء، وبما لديها من برامج تعليمية وأنشطة بحثية متنوعة، وبما تقدمه من خدمات مجتمعية وبيئية كجزء أصيل من رؤية ورسالة جامعة قناة السويس.

وتسعى الكلية إلى النهوض بالمستوي الأكاديمي لأقسامها العلمية والإرتقاء بجودة البيئة التعليمية، وتضع الكلية ضمن أولوياتها تزويد الطلاب والطالبات بالمعارف والمهارات اللازمة وتأهيل الكوادر المتميزة القادرة علي المنافسة في سوق العمل بما يسهم في دفع عجلة التنمية وتعزيز النمو الاقتصادي.

كما أود أن أؤكد لكم حرص وإهتمام قطاع وإدارات شئون التعليم والطلاب بالكلية على توفير المناخ الملائم لممارسة شتى الأنشطة الطلابية لغرس السلوكيات الايجابية ولتحقيق التميز والإبداع وتنمية الجوانب الوجدانية والمهارية لخريجي هذه الكلية العريقة.

أبنائي الطلاب والطالبات… أغتنم هذه الفرصة لكي أحثكم على ضرورة الحفاظ علي مقدرات الكلية، كما أدعوكم إلى التمسك والالتزام بحسن الخلق، وتعظيم القيم والتقاليد الجامعية، وأوصيكم بالجد والاجتهاد والمواظبة، كما أوصيكم بأن تقبلوا بمزيد من الإصرار والعزيمة والمثابرة علي دراستكم لتنهلوا من منابع العلم والمعرفة في شتي مجالات العلوم الزراعية.

وأخيراً لا يسعني إلا أن أدعو الله عز وجل أن تكون دراستكم بالكلية مثمرة وناجحة وزاخرة بالذكريات الجميلة الطيبة، وأن يكلل جهدكم بالنجاح والتميز، وفقنا الله وإياكم إلي ما فيه الخير لجامعتنا ومصرنا الحبيبة.`,
    onclick: () => router.push("/youth_care/2"),
  },
];

function noSpecificAgent() {
  return props.id === undefined;
}

function getAgentById(id) {
  return dummyCards.find((agent) => agent.id === Number(id));
}
</script>

<!-- title subtitle iconPath onclick -->
