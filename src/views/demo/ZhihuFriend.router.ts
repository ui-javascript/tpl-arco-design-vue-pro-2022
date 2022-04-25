export default {
  path: 'ZhihuFriendNav',
  name: 'ZhihuFriendNav',
  component: () => import('@/views/demo/ZhihuFriend.nav.vue'),
  meta: {
    locale: 'menu.ZhihuFriend',
    requiresAuth: true,
    icon: 'icon-list',
    order: 99,
  },
  children: [
    {
      path: 'ZhihuFriendPage',
      name: 'ZhihuFriendPage',
      component: () => import('@/views/demo/ZhihuFriend.page.vue'),
      meta: {
        locale: 'menu.ZhihuFriend.page',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};
