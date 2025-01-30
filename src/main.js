import 'sass-reset'
import './style/style.scss'
import FontAwesomeIcon from './assets/icons.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
