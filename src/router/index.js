import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/components/Layout"),
    children: [
      {
        path: "podlog",
        name: "PodLog",
        component: () => import("@/components/PodLog"),
      },
      {
        path: "webterminal",
        name: "Webterminal",
        component: () => import("@/components/Webterminal"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
