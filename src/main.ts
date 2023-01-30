import { createApp } from 'vue'
import './styles/reset.css'
import './styles/iconfont.css'
import './styles/index.css'
import './assets/fonts/font.css'
import App from './App.vue'
import router from './router/router'
import globalComponent from './components'
import mitt from 'mitt'

const eventBus = mitt()

const app = createApp(App)
// 把 mitt 加入 Vue 的全域 Property，讓任何一個元件都能使用
app.config.globalProperties.eventBus = eventBus
/* 注册全局组件 */
app.use(globalComponent)
/* 注册路由 */
app.use(router)
app.mount('#app')
