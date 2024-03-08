import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import store from './store'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

createApp(App).use(store).use(VCalendar).mount('#app')
