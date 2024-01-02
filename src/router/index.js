import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home', // Redirect '/' to a specific default route
      component: () => import('../components/layouts/LayoutComponent.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomePage.vue'),
        },
        {
          path: '/recordings',
          name: 'recordings',
          component: () => import('../views/RecordingsPage.vue'),
        },
      ],
    },
    {
      path: '/recording',
      name: 'recording',
      component: () => import('../views/RecordingPage.vue'),
    },
  ],
});

export default router;
