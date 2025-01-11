import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/movies/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: () => import('../views/BookmarkView.vue'),
    },
    // {
    //   path: '/details/:id',
    //   name: 'details',
    //   component: () => import('../views/DetailsView.vue'),
    //   props: (route) => ({
    //     movieId: route.params.id,
    //   }),
    // },
  ],
})

export default router
