import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const i18n =  createI18n({
    locale:'es',
    messages:{
        es:{
            'registerS':'Registro del estudiante',
            'registerT':'Registro del Tutor',
            'Schedule':'Horario',
            'Monday':'Lunes',
            'Tuesday':'Martes',
            'Wednesday':'Miercoles',
            'Thursday':'Jueves',
            'Friday':'Viernes',
            'Course':'Curso',
            'Hour':'Hora',
            'Section':'Sección',
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