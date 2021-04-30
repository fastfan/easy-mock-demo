import Vue from 'vue'
import App from './App.vue'
import store from '@/store';
import router from './router/index'
import '@/assets/css/base.scss'
import "@/icons";
import echarts from 'echarts'

Vue.config.productionTip = false
import ElementUI from "element-ui";
Vue.use(ElementUI);
import "element-ui/lib/theme-chalk/index.css";
import "./utils/directives/index" // 增加指令
import 'viewerjs/dist/viewer.css'
import viewer from "@/components/imgViewer"
Vue.component("viewer", viewer)

Vue.prototype.$echarts = echarts
Vue.prototype.bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
