import Users from './pages/Users.vue';
import UserView from './pages/UserView.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: Users,
    },
    {
        path: '/:id',
        component: UserView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router;
