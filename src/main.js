import {createBootstrap} from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import router from './router';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(createBootstrap())
app.use(router);
app.mount('#app')