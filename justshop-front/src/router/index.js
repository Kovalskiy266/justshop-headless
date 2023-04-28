import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from "@/views/HelloWorld";
import ArticlePage from "@/components/contentType/ArticlePage";

const routes = [
    {
        path: '/s',
        name: 'home',
        component: HelloWorld,
    },
    {
        path: '/article/:slug',
        component: ArticlePage,
        name: 'Article',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;