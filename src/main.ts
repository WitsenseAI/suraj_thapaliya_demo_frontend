import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routes/routes"
// import Toast from "vue-toastification"
import { createPinia } from 'pinia'

const pinia = createPinia()
createApp(App).use(pinia).use(router).mount('#app')
