import { ref } from 'vue'

const SUPPORTED = ['en', 'ru', 'kz']
const STORAGE_KEY = 'cer.lang'

function detectInitialLang() {
  if (typeof window === 'undefined') return 'en'

  const stored = window.localStorage?.getItem(STORAGE_KEY)
  if (stored && SUPPORTED.includes(stored)) return stored

  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || '']

  for (const raw of candidates) {
    const tag = String(raw).toLowerCase()
    const primary = tag.split('-')[0]
    if (primary === 'ru') return 'ru'
    // Kazakh ISO 639-1 is "kk"; some systems report "kz"
    if (primary === 'kk' || primary === 'kz') return 'kz'
    if (primary === 'en') return 'en'
  }

  return 'en'
}

// Module-level ref — shared across all components (singleton)
const currentLang = ref(detectInitialLang())

export function useLanguage() {
  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return
    currentLang.value = lang
    try {
      window.localStorage?.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore storage failures (private mode, quota, etc.)
    }
  }

  /**
   * Simple inline translator.
   * Usage: t('English', 'Русский', 'Қазақша')
   * Reactive in Vue 3 templates — components re-render when currentLang changes.
   */
  function t(en, ru, kz) {
    if (currentLang.value === 'ru') return ru
    if (currentLang.value === 'kz') return kz
    return en
  }

  return { currentLang, setLang, t }
}
