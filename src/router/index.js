import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routersContext = require.context('@/views', true, /router\.js$/)
const routersArray = routersContext.keys().map(key => routersContext(key).default)

const routers = [{
  path: '/',
  name: 'layout',
  component: () => import(/* webpackChunkName: "layout" */ "@/layout/index"),
  redirect: to => '/demo',
  children: routersArray,
}, {
  path: '*',
  redirect: '/',
  hidden: true
}]

const router = new Router({
  routes: routers
});

export default router;
