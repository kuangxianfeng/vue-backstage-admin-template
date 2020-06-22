import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const defaultRoutes = [
  {
    path: "/redirect",
    name: "Redirect",
    component: () => import('@/views/Redirect/Index.vue'),
    hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/Index.vue'),
    meta: {
      title: '登陆'
    }
  }
]

const createRouter = () =>
  new VueRouter({
    mode: "hash",
    scrollBehavior: () => ({//使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样
      y: 0,
    }),
    routes: defaultRoutes,//// 构建选项
  });

const router = createRouter();
const routerPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

export default router
