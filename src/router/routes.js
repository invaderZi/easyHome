const routes = [
  {
    path: "/",
    component: () => import("src/pages/HomePage.vue"),
  },

  {
    path: "/imovel/:id",
    component: () => import("src/pages/ImovelPage.vue"),
  },
  {
    path: "/perfil/me",
    component: () => import("src/pages/PerfilUsuarioLogado.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
