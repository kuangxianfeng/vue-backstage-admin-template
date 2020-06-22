/**
 * 权限管理的js vue-element-admin
 * 需要通过用户的token来请求符合权限的路由
 */
import router from '@/router';//路由
import store from '@/store';//vuex
import Nprogress from "nprogress";//加载进度条 - Nprogress.start(); Nprogress.done();
import "nprogress/nprogress.css";

// 进入路由之前进行拦截
router.beforeEach(async (to, from, next) => {
    Nprogress.start();//进度条开始
    document.title = to.meta.title;//设置页面title

    if (to.path === '/login') {
        next();
    } else {
        const { token, meauBarData } = store.state;
        if (token) {
            if (meauBarData.length !== 0) {
                next();
                let routerBreadcrumb=to.matched.filter((item)=>{
                    return item.meta.title!=='主页'
                })
                store.commit('setBreadcrumbRecordArr',routerBreadcrumb);
            } else {
                let Main = {
                    path: '/',
                    name: 'Main',
                    component: () => import('@/views/Main/Index.vue'),
                    meta: {
                        title: '主页'
                    },
                    children: []
                };
                let res = await store.dispatch('getPermission');
                Main.children = res;
                let endRoute = [Main, {
                    path: '*',
                    redirect: '/404'
                }];
                router.addRoutes(endRoute);
                next({
                    ...to,
                    replace: true
                })
            }
        } else {
            next({
                path: '/login'
            })
        }
    }
})
router.afterEach((to, from, next) => {
    Nprogress.done();//进度条开始
})