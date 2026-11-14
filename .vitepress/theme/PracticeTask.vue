<script setup>
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import lessons from '../../public/practice/lessons.json'

const props = defineProps({ lesson: { type: String, required: true } })
const entry = computed(() => lessons.find(item => item.id === props.lesson))
const message = ref('')
const copying = ref(false)
async function copyRequest() {
  if (!entry.value?.request) return
  copying.value = true
  message.value = ''
  try {
    await navigator.clipboard.writeText(entry.value.request)
    message.value = '已复制，切换到练习页，在扩展中粘贴并发送。'
  } catch {
    message.value = '未能复制，请选中这句话手动复制。'
  } finally {
    copying.value = false
  }
}
</script>

<template>
  <div v-if="entry" class="practice-task">
    <a :href="withBase(entry.path)" target="_blank" rel="noopener noreferrer">打开练习：{{ entry.title }}</a>
    <template v-if="entry.request">
      <blockquote><p>{{ entry.request }}</p></blockquote>
      <div class="practice-task__actions">
        <button type="button" :disabled="copying" @click="copyRequest">复制这句话</button>
        <span role="status" aria-live="polite">{{ message }}</span>
      </div>
    </template>
  </div>
</template>

<style scoped>
.practice-task { margin: 20px 0; }
.practice-task blockquote { margin: 16px 0 12px; }
.practice-task__actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; }
.practice-task__actions button { min-height: 44px; padding: 8px 14px; border: 1px solid var(--vp-c-divider); border-radius: 6px; color: var(--vp-c-brand-1); background: var(--vp-c-bg-soft); font-weight: 600; cursor: pointer; }
.practice-task__actions button:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
.practice-task__actions button:disabled { cursor: wait; opacity: .65; }
.practice-task__actions span { color: var(--vp-c-text-2); font-size: 13px; line-height: 1.6; }
</style>
