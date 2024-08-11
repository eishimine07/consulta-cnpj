import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n, I18nOptions } from 'vue-i18n'
import App from '@/App.vue'
import ptBR from '@/locales/pt-BR.json'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import '@/style.css'

const app = createApp(App)
const pinia = createPinia()

const i18nOptions: I18nOptions = {
  datetimeFormats: {
    'pt-BR': {
      short: {
        day: '2-digit', month: '2-digit', year: 'numeric'
      },
      shortWithoutDay: {
        month: '2-digit', year: 'numeric'
      }
    }
  },
  legacy: false,
  locale: 'pt-BR',
  messages: {
    'pt-BR': ptBR,
  },
  numberFormats: {
    'pt-BR': {
      currency: {
        style: 'currency', currency: 'BRL'
      }
    }
  }
}
const i18n = createI18n(i18nOptions)

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(vuetify(i18n))
app.mount('#app')
