import { createRouter, createWebHistory } from "vue-router";
import Home from "./src/views/Home-view.vue";
import Task from "./src/views/Task-view.vue";
import Notifications from "./src/views/Notifications-view.vue";
import Calendar from "./src/views/Calendar-view.vue";
import Groups from "./src/views/Groups-view.vue";
import Pets from "./src/views/Pets-view.vue";
import createGroup from "./src/views/Create-group-view.vue";
import createPets from "./src/views/Create-pets-view.vue";
import groupAddMember from "./src/views/Group-add-member-view.vue";
import groupAddPet from "./src/views/Group-add-pet-view.vue";
import groupPets from "./src/views/Group-pets-view.vue";
import indivPetView from "./src/views/Indiv-pet-view.vue";
import groupMember from "./src/views/Group-member-view.vue";
import signUp from "./src/views/Sign-up-view.vue";
import Login from "./src/views/Login-view.vue";
import petUpdate from "./src/views/Pet-update-view.vue";
import joinGroup from "./src/views/Group-join-group.vue";

import { auth } from "./src/firebase";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/task",
    component: Task,
  },

  {
    path: "/notifications",
    component: Notifications,
  },

  {
    path: "/calendar",
    component: Calendar,
  },

  {
    path: "/groups",
    component: Groups,
  },

  {
    path: "/pets",
    component: Pets,
  },

  {
    path: "/createGroup",
    component: createGroup,
  },

  {
    path: "/createPets",
    component: createPets,
  },

  {
    path: "/groupAddMember",
    component: groupAddMember,
  },

  {
    path: "/groupAddPet",
    component: groupAddPet,
  },

  {
    path: "/groupPets",
    component: groupPets,
  },

  {
    path: "/groupMember",
    component: groupMember,
  },

  {
    path: "/indivPetView",
    component: indivPetView,
  },

  {
    path: "/signup",
    component: signUp,
  },

  {
    path: "/login",
    component: Login,
  },

  {
    path: "/petUpdate",
    component: petUpdate,
  },

  {
    path: "/joinGroup",
    component: joinGroup,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/login");
    return;
  }

  next();
});

export default router;
