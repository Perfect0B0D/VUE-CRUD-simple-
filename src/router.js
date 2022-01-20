import { createWebHistory, createRouter } from "vue-router";



const routes=[
    {
      path: "/",
      alias: "/Movies",
      name: "Movies",
      component: () => import("./components/Movies/Movies_main")
    },
    {
      path: "/movies/create/",
      name: "Moviecreat",
      component: ()=> import("./components/Movies/Movies_edit")
    },
    {
      path: "/Movies/edit/:id",
      name: "Movieedit",
      component: ()=> import("./components/Movies/Movies_edit")
    },
    {
      path: "/Movies/show/:id",
      name: "Movieshow",
      component: ()=> import("./components/Movies/Movie_show")
    },
    {
      path: "/Personalities",
      name: "Personalities",
      component: () => import("./components/Personalities/Personalities_main")
    },
    {
      path: "/Personalities/show/:id",
      name: "Personalitiesshow",
      component: () => import("./components/Personalities/Personalities_show")
    },
    {
      path: "/Personalities/create/:id",
      name: "Personalitiesedit",
      component: () => import("./components/Personalities/Personalities_edit")
    },
    {
      path: "/Personalities/create/",
      name: "Personalitiescreate",
      component: () => import("./components/Personalities/Personalities_edit")
    }
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;

