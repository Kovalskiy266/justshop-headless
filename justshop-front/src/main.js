import { createApp } from 'vue'
import App from './App.vue'
// import router from "@/router";
// import router from './router'
import router from './router'
// import { createRouter, createWebHistory } from 'vue-router'

// let router = createRouter({
//     history: createWebHistory(),
//     routes,
// })
//
// createApp(App).use(router).mount('#app')
createApp(App).use(router).mount('#app')
