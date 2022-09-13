import { createRouter, createWebHistory } from "vue-router";
    import DataTableColToggleDemo from "./DataTableColToggleDemo.vue"

    export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: DataTableColToggleDemo }]
});