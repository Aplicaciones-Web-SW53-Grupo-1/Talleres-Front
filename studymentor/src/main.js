import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import Calendar from "primevue/calendar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Password from "primevue/password";

const i18n =  createI18n({
    locale:'es',
    messages:{
        es:{
            'registerS':'Registro del Estudiante',
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
app.use(PrimeVue);
app.component("pv-calendar", Calendar);
app.component("pv-input", InputText);
app.component("pv-button", Button);
app.component("pv-password", Password)
app.mount('#app')