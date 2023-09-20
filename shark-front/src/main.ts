import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"

import { createApp } from 'vue'
import App from './App.vue'
 // Importe o arquivo CSS da Font Awesome
import router from './router'




const app = createApp(App); 
app.use(router);
app.mount('#app');