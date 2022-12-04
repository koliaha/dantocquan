import { createI18n } from 'vue-i18n'
import ru from './ru.json'
import en from './en.json'
import vn from './vn.json'

const messages = { ru, en, vn }
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'ru', // set locale
  messages,
})

export default i18n
