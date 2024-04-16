<template>
  <div class="grid grid-col-1 md:grid-cols-2 gap-11 mx-40 mt-12 justify-center items-center">
    <CreditCard class="min-w-60 h-72" v-for="(card, index) in creditsData" :key="index" :name="card.name"
      :position="card.position" :imgPath="card.imgPath" :facebookLink="card.facebookLink" :instaLink="card.instaLink"
      :email="card.email" :phone="card.phone" />
  </div>
</template>

<script setup>
const creditsData = [
  {
    name: "Dr. Osama El-Nahass",
    imgPath: "/drOsamaCredits.png",
    position: "supervision",
    facebookLink: "https://www.facebook.com/osama.e.helaly",
    instaLink: "",
    email: "osamaelnahhas@gmail.com",
  },
  {
    name: "Eng. Ahmed Sultan",
    imgPath: "/sultanCredits.png",
    position: "teaching assistant and supervision",
    facebookLink: "https://www.facebook.com/ahmedSultan64?mibextid=ZbWKwL",
    instaLink:
      "https://www.instagram.com/ahmeddd_sultan?igsh=MTFoN2R5OWt1OGlsaA==",
    email: "ahmedsultan4277892@gmail.com",
    phone: "01272638173",
  },
  {
    name: "Ahmed El-shentenawy",
    imgPath: "/me.png",
    position: "full-stack developer",
    facebookLink: "https://www.facebook.com/ahmed4040400",
    instaLink:
      "https://www.instagram.com/ahmed.elshentenawy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    phone: "01221468218",
    email: "ahmed4040400@gmail.com",
  },
  {
    name: "Omar Mohamed Algamel",
    imgPath: "/omar.png",
    position: "full-stack developer",
    facebookLink: "https://www.facebook.com/algamel.omer/",
    instaLink: "https://www.instagram.com/algamel.omar/",
    email: "omeralgamel@gmail.com",
    phone: "01126642884",
  },
  {
    name: "Ahmed Amr Taha",
    imgPath: "/ahmedAmr.png",
    position: "ui/ux designer",
    facebookLink: "https://www.facebook.com/profile.php?id=100021863644101",
    instaLink:
      "https://www.instagram.com/vhmed_amr__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    email: "ahmedAmr@gmail.com",
    phone: "01200162559",
  },

  {
    name: "Ziad Hassan Mohamed",
    imgPath: "/ziad.png",
    position: "full-stack developer",
    facebookLink: "https://www.facebook.com/ziad.hassan.148116?mibextid=ZbWKwL",
    instaLink: "https://www.instagram.com/3_p0ox?igsh=ZGUzMzM3NWJiOQ==",
    email: "zeyad.h.abaza@gmail.com",
    phone: "01006403927",
  },
];
import CreditCard from "./components/CreditCard.vue";
</script>
