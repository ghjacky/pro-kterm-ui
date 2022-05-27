import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/components/Layout"),
    children: [
      {
        path: "logstreaming",
        name: "LogStreaming",
        component: () => import("@/components/LogStreaming"),
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
