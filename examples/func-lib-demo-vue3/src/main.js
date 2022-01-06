import { createApp } from 'vue'
import App from './App.vue'
import func from "../../../index"

const app = createApp(App)

app.use(func).mount('#app')
