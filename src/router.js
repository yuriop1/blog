import { createWebHistory, createRouter } from "vue-router";
import List from './components/BlogList.vue'
import home from './components/homeMain.vue'
import detail from './components/BlogDetail.vue'

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail",
    component: detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;