import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/locale/en.json').then((module) => module.default),
  de: () => import('@/locale/de.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
