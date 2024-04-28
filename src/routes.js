import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "@views/main/landingPage/LandingPage.vue";
import Departments from "@views/main/departments/Departments.vue";
import AboutUs from "@views/main/aboutUs/AboutUs.vue";
import faculty from "@views/main/faculty/Faculty.vue";
import ContactUs from "@views/main/ContactUs/Contact.vue";
import Main from "@views/main/Main.vue";
import work_apply from "@views/main/apply_for_work/apply_for_work.vue";
import how_to_apply from "@views/main/How_to_apply/How_to_apply.vue";
import Undergraduates from "@views/main/undergraduates/Undergraduates.vue";
import Book from "@views/main/flipBook/Book.vue";
import LMS from "@views/main/lms/LMS.vue";
import dr_page from "@views/main/dr_page/dr_page.vue";
import FacultyStaff from "@views/main/facultyStaff/FacultyStaff.vue";
import grades from "@views/main/grades/grades.vue";
import team from "@views/main/team/team.vue";
import YouthCare from "@views/main/YouthCare/YouthCare.vue";
import agents from "@views/main/agents/agents.vue";
import Credits from "@views/main/Credits/Credits.vue";
import environmental from "@views/main/environmental/Environmental.vue";
export default createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
      children: [
        { path: "/", component: LandingPage },
        { path: "/departments/:id", component: Departments, props: true },
        { path: "/faculty/:id", component: faculty, props: true },
        { path: "/aboutUs", component: AboutUs },
        { path: "/ContactUs", component: ContactUs },
        { path: "/book", component: Book },
        { path: "/work_apply", component: work_apply },
        { path: "/undergraduates", component: Undergraduates },
        { path: "/lms", component: LMS },
        { path: "/FacultyStaff", component: FacultyStaff },
        { path: "/FacultyStaff/:id", component: FacultyStaff, props: true },
        { path: "/dr", component: dr_page },
        { path: "/how_to_apply", component: how_to_apply },
        { path: "/grades", component: grades, props: true },
        { path: "/grades/:err", component: grades, props: true },
        { path: "/grades/:sitting_num/:dep", component: grades, props: true },
        { path: "/developers", component: team },
        { path: "/youth_care", component: YouthCare },
        { path: "/youth_care/:id", component: YouthCare, props: true },
        { path: "/agents", component: agents },
        { path: "/agents/:id", component: agents, props: true },
        { path: "/credits", component: Credits },
        { path: "/environmentdev", component: environmental },
      ],
    },
    {
      path: "/soon",
      name: "Soon",
      component: () => import("@/views/coming_soon.vue"),
    },

    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/guest/Login.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("@/views/auth/Dashboard.vue"),
      children: [
        {
          path: "",
          name: "DashboardHome",
          component: () => import("@/views/auth/dashboard/Dashboard_home.vue"),
        },
        {
          path: "/dashboard/Faculties",
          name: "DashboardFaculties",
          component: () =>
            import("@/views/auth/dashboard/Dashboard_faculties.vue"),
        },
        {
          path: "/dashboard/News",
          name: "DashboardNews",
          component: () => import("@/views/auth/dashboard/Dashboard_news.vue"),
        },
        {
          path: "/dashboard/Article",
          name: "DashboardArticle",
          component: () =>
            import("@/views/auth/dashboard/Dashboard_article.vue"),
        },
        {
          path: "/dashboard/Letter",
          name: "DashboardLetter",
          component: () =>
            import("@/views/auth/dashboard/Dashboard_letter.vue"),
        },
        {
          path: "/dashboard/Users",
          name: "DashboardUsers",
          component: () => import("@/views/auth/dashboard/Dashboard_users.vue"),
        },
        {
          path: "/dashboard/Departments",
          name: "DashboardDepartments",
          component: () =>
            import("@/views/auth/dashboard/Dashboard_departments.vue"),
        },
        {
          path: "/dashboard/FacultyMember",
          name: "DashboardFacultyMember",
          component: () =>
            import("@/views/auth/dashboard/Dashboard_faculty_member.vue"),
        },
        {
          path: "/dashboard/projects",
          name: "DashboardProjects",
          component: () =>
            import("@/views/auth/dashboard/Dashboard_projects.vue"),
        },
        {
          path: "/dashboard/supervisory",
          name: "DashboardSupervisory",
          props: true,
          component: () =>
            import("@/views/auth/dashboard/Dashboard_supervisory.vue"),
        },
        {
          path: "/dashboard/about",
          name: "DashboardAboutUs",
          props: true,
          component: () =>
            import("@/views/auth/dashboard/Dashboard_aboutUs.vue"),
        },
        {
          path: "/dashboard/details",
          name: "DashboardDetails",
          props: true,
          component: () =>
            import("@/views/auth/dashboard/Dashboard_details.vue"),
        },
        {
          path: "/dashboard/study",
          name: "DashboardStudy",
          component: () =>
            import("@/views/auth/dashboard/Dashboard_study_plan.vue"),
        },
        {
          path: "/dashboard/grades",
          name: "DashboardGrades",
          component: () =>
            import("@/views/auth/dashboard/Dashboard_grades.vue"),
        },
        {
          path: "/dashboard/:category/Upload",
          name: "DashboardUpload",
          component: () => import("@/components/dashboard/Upload.vue"),
        },
        {
          path: "/dashboard/:category/edit/:id",
          name: "DashboardEdit",
          component: () => import("@/components/dashboard/Edit.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("@/views/404.vue"),
    },
  ],
});
