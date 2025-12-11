import { createI18n } from 'vue-i18n'
import ru from './ru.json'
import en from './en.json'
import zh from './zh.json'

const messages = { ru, en, zh }
const defaultLocale = 'ru'
const savedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: savedLocale || defaultLocale, // set locale
  messages,
})

export default i18n
