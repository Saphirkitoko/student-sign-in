import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import global styles
import './style.css'

// Import the root component of the Vue app
import App from './App.vue'

// Create a Pinia instance
const pinia = createPinia()

// Create the Vue app instance
const app = createApp(App)

// Use Pinia for state management
app.use(pinia)

// Import Bootstrap CSS files
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import Bootstrap JavaScript file
import 'bootstrap'

// Mount the Vue app to the HTML element with id "app"
app.mount('#app')

