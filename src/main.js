import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//添加IE兼容
import "@babel/polyfill";
//import "@/icons";
Vue.config.productionTip = false;
//挂载环境变量中的配置信息，然后在js中使用$src 访问
Vue.prototype.$src = process.env.VUE_APP_PUBLIC_PATH;

new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        document.dispatchEvent(new Event("render-event"));
    }
}).$mount("#app");