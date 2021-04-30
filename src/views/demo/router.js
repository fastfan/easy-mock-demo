export default {
    path: "/demo",
    name: "demo",
    component: () => import(/* webpackChunkName: "demo" */ "./index.vue")
};
