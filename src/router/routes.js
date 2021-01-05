const routes = [
  {
    path: '/',
    component: () => import('layouts/VoidLayout.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('pages/Login.vue') },
      { path: '/forgot-password', name: 'EsqueciSenha', component: () => import('pages/Esqueci minha senha.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Home', name: 'Index', component: () => import('pages/Index.vue') },
      { path: '/Burgers', name: 'Burgers', component: () => import('pages/Burgers.vue') },
      { path: '/Pizzas', name: 'Pizzas', component: () => import('pages/Pizzas.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
