import { createRouter, createWebHistory } from 'vue-router';

// Define your routes
const routes = [
    {
        path: '/form',
        name: 'Form',
        component: () => import('@/components/FormComponent.vue'), // Lazy loading
    },
    {
        path: '/card',
        name: 'Card',
        component: () => import('@/components/CardComponent.vue'), // Lazy loading
    },
    {
        path: '/table',
        name: 'Table',
        component: () => import('@/components/TableComponent.vue'), // Lazy loading
    },
    {
        path: '/chart',
        name: 'Chart',
        component: () => import('@/components/ChartComponent.vue'), // Lazy loading
    },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
