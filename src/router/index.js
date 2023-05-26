import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

import home from "@/pages/home.vue";
import about from "@/components/about.vue";
import NotFound from "@/pages/404.vue"
import assess from "@/components/assess.vue";
import history_record from "@/components/historyRecord.vue";
const routers = [
    {
        path: '/',
        name: 'home',
        component: home,
        children: [
            {
                path: '/about',
                name: 'about',
                component: about
            },
            {
                path: '/assess',
                name: 'assess',
                component: assess
            },
            {
                path: '/history_record',
                name: 'history_record',
                component: history_record
            }
        ]
    },

    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers

})
export default router