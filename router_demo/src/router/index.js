import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Student from "../views/students/Student.vue";
import StudentDetails from "../views/students/StudentDetails.vue";
import NotFound from "../views/NotFound.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/students",
    name: "student",
    component: Student,
  },
  {
    path: "/student/:id",
    name: "student-details",
    component: StudentDetails,
    props: true,
  },
  //redirect
  {
    path: "/all-students",
    redirect: "/students",
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
