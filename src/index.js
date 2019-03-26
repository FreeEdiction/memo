import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../src/components/SignIn.vue'
import SignUp from '../src/components/SignUp.vue'
import Settings from '../src/components/Settings.vue'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'signUp',
            component: SignUp,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/signIn',
            name: 'signIn',
            component: SignIn,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: SignUp,
            meta: {
                requiresAuth: false
            }
        },
        {
            path:'/settings/:username',
            name: 'settings',
            component: Settings,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        next('/login')
    } else {
        next()
    }
});

export default router