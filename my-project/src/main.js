import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from  './components/UI/BaseButton.vue'
import AddModal from "./components/topic-resouse/AddModal.vue";


const app =createApp(App)

app.component('base-button',BaseButton);
app.component('add-modal',AddModal)
app.mount('#app')
