import { createApp } from 'vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/styles/style.css'
import router from './router/index'
import i18n from './plugins/i18n'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
