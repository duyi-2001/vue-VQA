import './assets/main.css'
//入口文件
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import VueVideoPlayer from 'vue-video-player'
// require videojs style
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(vue3videoPlay)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
import 'virtual:windi.css'
app.mount('#app')
