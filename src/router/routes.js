
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/fortime', component: () => import('pages/ForTime.vue') },
      { path: '/amrap', component: () => import('pages/Amrap.vue') },
      { path: '/enom', component: () => import('pages/Enom.vue') },
      { path: '/tabata', component: () => import('pages/Tabata.vue') },
      { path: '/custom', component: () => import('pages/Custom.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
