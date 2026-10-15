<script setup>
/**
 * 右侧边栏里「本页目录」「安装扩展」下面的视频教程入口。
 *
 * 来历：它原本是顶部导航的第二项（指向 jtcrpa.com/help）。用户 2026-10-15 决定
 * 撤掉导航那一项，改挂到右侧边栏——接在下载框**下面**（同一个 #aside-outline-after
 * 插槽里、AsideInstall 之后，见 Layout.vue）。
 *
 * 三点刻意的取舍：
 *   1. **整张卡片就是链接**（用户 2026-10-15 纠正：不要"卡片标题 + 底下一行链接"的写法）。
 *      所以根元素是 <a>，标题、图标全在链接里面，点哪儿都能跳。
 *   2. **不做成按钮** —— 右栏里唯一像按钮的必须是「安装扩展」那两个商店入口（见
 *      AsideInstall.vue 的注释）。这里静止时是一张安静的描边卡片，只有鼠标移上去
 *      才变品牌色，用来告诉读者"整块可以点"。
 *   3. **每页都显示** —— 视频和下载不同，任何一页都可能有人想先看一遍，没有要排除的页面。
 *
 * ⚠️ 窄栏适配：aside 宽 16rem、左内边距 2rem，实际可用只有 ~224px。
 *    字号 12~13px、文案一行说完，别往这里加长句子。
 */

/** 视频地址。B 站分享链接里那串 spm_id_from / vd_source 是分享来源追踪参数，
 *  去掉后照样能打开，所以这里只留作品号这一段。换视频只改这一行。 */
const VIDEO_URL = 'https://www.bilibili.com/video/BV1UeHi63E2m/'
</script>

<template>
    <a class="vd-card" :href="VIDEO_URL" target="_blank" rel="noreferrer">
        <svg class="vd-card__play" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5z" />
        </svg>

        <span class="vd-card__body">
            <span class="vd-card__head">视频教程</span>
            <span class="vd-card__sub">在 B 站观看</span>
        </span>

        <svg class="vd-card__arrow" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
        </svg>
    </a>
</template>

<style scoped>
/* 根元素是 <a>，所以布局属性直接写在它身上；下面没有独立的链接元素了。 */
.vd-card {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    padding: 0.875rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background-color: var(--vp-c-bg-soft);
    text-decoration: none;
    transition:
        border-color 0.2s,
        background-color 0.2s;
}

.vd-card:hover {
    border-color: var(--vp-c-brand-1);
}

.vd-card__play {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    fill: var(--vp-c-brand-1);
}

.vd-card__body {
    display: flex;
    flex-direction: column;
    min-width: 0; /* 窄栏里允许文字自己换行，别把箭头挤出去 */
}

.vd-card__head {
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.3;
    color: var(--vp-c-text-1);
    transition: color 0.2s;
}

.vd-card__sub {
    margin-top: 0.125rem;
    font-size: 0.6875rem;
    line-height: 1.4;
    color: var(--vp-c-text-3);
}

.vd-card:hover .vd-card__head {
    color: var(--vp-c-brand-1);
}

/* 右上角那个外链小箭头：和下载框里的同款，静止时压暗，悬停才亮 */
.vd-card__arrow {
    flex-shrink: 0;
    width: 0.75rem;
    height: 0.75rem;
    margin-left: auto;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    color: var(--vp-c-text-3);
    opacity: 0.5;
    transition:
        opacity 0.2s,
        color 0.2s;
}

.vd-card:hover .vd-card__arrow {
    color: var(--vp-c-brand-1);
    opacity: 1;
}
</style>
