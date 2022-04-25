export default {
  path: 'UserNav',
  name: 'UserNav',
  component: () => import('@/views/demo/User.nav.vue'),
  meta: {
    locale: 'menu.User',
    requiresAuth: true,
    icon: 'icon-list',
    // order: 99,
  },
  children: [
    {
      path: 'UserPage',
      name: 'UserPage',
      component: () => import('@/views/demo/User.page.vue'),
      meta: {
        locale: 'menu.User.page',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};
