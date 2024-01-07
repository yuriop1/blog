import { createWebHistory, createRouter } from "vue-router";
import List from './components/BlogList.vue'
import home from './components/homeMain.vue'
import Detail from './components/BlogDetail.vue'
import Author from './components/BlogAuthor.vue'
import Comment from './components/BlogComment.vue'

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
    path: "/detail/:id",
    component: Detail,
    children : [
      { path : 'author', component : Author },
      { path : 'comment', component : Comment },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;