import { siteConfig } from '../config'
import type I18nKey from './i18nKey'
import { en } from './languages/en'
import { vi } from './languages/vi'
import { es } from './languages/es'
import { ja } from './languages/ja'
import { ko } from './languages/ko'
import { zh_CN } from './languages/zh_CN'
import { zh_TW } from './languages/zh_TW'

export type Translation = {
  [K in I18nKey]: string
}

const defaultTranslation = vi

const map: { [key: string]: Translation } = {
  es: es,
  vi: vi,
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja: ja,
  ja_jp: ja,
  ko: ko,
  ko_kr: ko,
}

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation
}

export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'vi'
  return getTranslation(lang)[key]
}