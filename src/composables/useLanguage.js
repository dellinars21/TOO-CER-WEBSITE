import { ref } from 'vue'

// Module-level ref — shared across all components (singleton)
const currentLang = ref('en')

export function useLanguage() {
  function setLang(lang) {
    currentLang.value = lang
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
