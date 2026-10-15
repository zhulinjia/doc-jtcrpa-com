<script setup>
/**
 * 右侧「本页目录」下方的下载框。
 *
 * 三点刻意的取舍：
 *   1. **主推商店** —— 商店版能自动更新。网盘那条只作为「商店打不开」的兜底，
 *      所以视觉上必须比商店弱：商店是可点的色块，网盘是一行小字。别把网盘做成按钮。
 *   2. **安装页自己不显示** —— 那一整篇就是讲安装的，再挂一个下载框是重复。
 *   3. 地址全部取自 `.vitepress/downloads.ts`，不在本文件里写死。
 *
 * ⚠️ 窄栏适配：aside 宽 16rem、左内边距 2rem，实际可用只有 ~224px。
 *    所以字号压到 12px、行高收紧，别往这里加长文案。
 */
import { computed } from 'vue'
import { useData } from 'vitepress'
import { DOWNLOADS } from '../downloads'

const { page } = useData()

/** 安装页（guide/install.md）不显示——那篇正文里已经有完整的下载与安装说明 */
const isInstallPage = computed(() => page.value.relativePath === 'guide/install.md')
</script>

<template>
    <div v-if="!isInstallPage" class="dl-card">
        <p class="dl-card__head">安装扩展</p>
        <p class="dl-card__sub">推荐从应用商店安装，能自动更新</p>

        <a class="dl-card__store" :href="DOWNLOADS.chrome" target="_blank" rel="noreferrer">
            <span>Chrome 应用商店</span>
            <svg class="dl-card__store-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
            </svg>
        </a>
        <a class="dl-card__store" :href="DOWNLOADS.edge" target="_blank" rel="noreferrer">
            <span>Microsoft Edge 扩展商店</span>
            <svg class="dl-card__store-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
            </svg>
        </a>

        <p class="dl-card__alt">
            商店打不开？<a :href="DOWNLOADS.pan" target="_blank" rel="noreferrer">网盘下载</a>（提取码 {{ DOWNLOADS.panCode }}）
        </p>
    </div>
</template>

<style scoped>
.dl-card {
    margin-top: 2rem;
    padding: 0.875rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background-color: var(--vp-c-bg-soft);
}

.dl-card__head {
    margin: 0;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.3;
    color: var(--vp-c-text-1);
}

.dl-card__sub {
    margin: 0.1875rem 0 0.625rem;
    font-size: 0.6875rem;
    line-height: 1.4;
    color: var(--vp-c-text-3);
}

/* ── 商店：卡里唯一像「按钮」的东西 ─────────────────── */

.dl-card__store {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.375rem;
    padding: 0.4375rem 0.625rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.4;
    color: var(--vp-c-brand-1);
    text-decoration: none;
    background-color: var(--vp-c-brand-soft);
    transition:
        color 0.2s,
        background-color 0.2s;
}

.dl-card__store:hover {
    color: var(--vp-c-white);
    background-color: var(--vp-c-brand-1);
}

.dl-card__store-icon {
    flex-shrink: 0;
    width: 0.75rem;
    height: 0.75rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.5;
    transition: opacity 0.2s;
}

.dl-card__store:hover .dl-card__store-icon {
    opacity: 1;
}

/* ── 网盘：兜底，故意做得不像按钮 ───────────────────── */

.dl-card__alt {
    margin: 0.625rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.5;
    color: var(--vp-c-text-3);
}

.dl-card__alt a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-color: var(--vp-c-divider);
    transition: color 0.2s;
}

.dl-card__alt a:hover {
    color: var(--vp-c-brand-1);
}
</style>
