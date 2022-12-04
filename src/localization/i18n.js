import { createI18n } from 'vue-i18n'
import ru from './ru.json'
import en from './en.json'
import vn from './vn.json'

const messages = { ru, en, vn }
export const RU = 'ru'
export const EN = 'en'
export const VN = 'vn'

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: RU, // set locale
  fallbackLocale: RU, // set fallback locale
  messages,
})

export default i18n
