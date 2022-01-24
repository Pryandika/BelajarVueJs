import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$translate = (arr) => {
    let language = localStorage.getItem('language')
    return language === null ? arr[0] : arr[language-1] 
}
app.use(router)
app.mount('#app')