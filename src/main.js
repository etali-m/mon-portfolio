import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App)

// Initialize AOS
AOS.init({
    duration: 1000,      // animation duration in ms
    once: true,         // whether animation should happen only once
    offset: 150,        // offset (in px) from the original trigger point
})

app.mount('#app')