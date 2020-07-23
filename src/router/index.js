import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateAccount from '../views/CreateAccount.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'CreateAccount',
        component: CreateAccount
    },
    {
        path: '/GeneralInfomation',
        name: 'GeneralInfomation',
        component: () =>
            import ('@/views/GeneralInfomation')
    },
    {
        path: '/UpdateProfilePicture',
        name: 'UpdateProfilePicture',
        component: () =>
            import ('@/views/UpdateProfilePicture')
    },
    {
        path: '/PaymentMethod',
        name: 'PaymentMethod',
        component: () =>
            import ('@/views/PaymentMethod')
    },
    {
        path: '/Completed',
        name: 'Completed',
        component: () =>
            import ('@/views/Completed')
    },
    {
        path: '*',
        name: '404',
        component: () =>
            import ('@/views/404NotFound')
    }

]

const router = new VueRouter({
    routes
})

export default router