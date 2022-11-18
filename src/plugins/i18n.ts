import { createI18n } from 'vue-i18n'
import zh from '../locales/zh-TW.json'
import en from '../locales/en-US.json'

type MessageSchema = typeof zh

const i18n = createI18n<[MessageSchema], 'zh-TW' | 'en-US'>({
  legacy: false, // for i18n Composition API
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  globalInjection: true,
  messages: {
    'zh-TW': zh,
    'en-US': en
  }
})

export default i18n
