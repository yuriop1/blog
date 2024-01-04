import { createWebHistory, createRouter } from "vue-router";
import List from './components/BlogList.vue'
import home from './components/homeMain.vue'

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;