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
    
    next();
})
router.afterEach((to, from, next) => {
    Nprogress.done();//进度条开始
})