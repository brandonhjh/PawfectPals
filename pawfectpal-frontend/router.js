import { createRouter, createWebHistory } from 'vue-router';
import Home from './src/views/Home-view.vue';
import Task from './src/views/Task-view.vue';
import Notifications from './src/views/Notifications-view.vue';
import Calendar from './src/views/Calendar-view.vue';
import Groups from './src/views/Groups-view.vue';
import Pets from './src/views/Pets-view.vue';


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/task',
    component: Task,
  },

  {
    path: '/notifications',
    component: Notifications,
  },

  {
    path: '/calendar',
    component: Calendar,
  },

  {
    path: '/groups',
    component: Groups,
  },

  {
    path: '/pets',
    component: Pets,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
