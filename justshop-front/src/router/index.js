import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from "@/views/HelloWorld";
import ArticlePage from "@/components/contentType/ArticlePage";
import RegisterForm from "@/components/forms/RegisterForm";

const routes = [
    {
        path: '/helloworld',
        name: 'home',
        component: HelloWorld,
    },
    {
        path: '/article/:slug',
        component: ArticlePage,
        name: 'Article',
    },
    {
        path: '/user/register',
        component: RegisterForm
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;