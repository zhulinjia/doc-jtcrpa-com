import { computed } from 'vue'
import { useData } from 'vitepress'
import sourceLessons from '../../public/practice/lessons.json'
import translations from '../i18n/lessons-en.json'
import { englishLessons } from '../i18n/lessons.mjs'

const translatedLessons = englishLessons(sourceLessons, translations)

export function useDocLocale() {
  const { lang, page } = useData()
  const isEnglish = computed(() => lang.value.startsWith('en'))
  const lessons = computed(() => isEnglish.value ? translatedLessons : sourceLessons)
  const pagePath = computed(() => page.value.relativePath.replace(/^en\//, ''))
  return { isEnglish, lessons, pagePath }
}
