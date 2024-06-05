import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Repository.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'repo',
      component: HomeView
    },
    {
      path: '/followers',
      name: 'followers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Followers.vue')
    },
    {
      path: '/following',
      name: 'following',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Following.vue')
    },
    {
      path: '/',
      name: 'repo-list',
      component: () => import('../components/Repo.vue')    },
    {
      path: '/repo/:username/:repoName',
      name: 'repo-detail',
      component: () => import('../components/RepoDetail.vue')    },
  ]
})

export default router
