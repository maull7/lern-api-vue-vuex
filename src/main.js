import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'; // Pastikan path ke store benar

createApp(App).use(store).use(router).use(router).mount('#app')
