import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const i18n =  createI18n({
    locale:'en',
    messages:{
        es:{
            'registerS':'Registro del estudiante',
            'registerT':'Registro del Tutor',
        },
        en:{
            'registerS':'Student register',
            'registerT':'Advisor register',

        },
        br:{
            'registerS':'Registro estudantil',
            'registerT':'Registro do professor',
        }
    }
})
const app=createApp(App);
app.use(i18n);
app.mount('#app')