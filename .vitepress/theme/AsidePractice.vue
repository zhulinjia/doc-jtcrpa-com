<script setup>
import { withBase } from 'vitepress'
</script>

<template>
    <a class="practice-card" :href="withBase('/practice/hub.html')" target="_blank" rel="noopener noreferrer">
        <svg class="practice-card__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 6.5c-2.7-2-5.7-2-8.5-.7v12c2.8-1.3 5.8-1.3 8.5.7m0-12c2.7-2 5.7-2 8.5-.7v12c-2.8-1.3-5.8-1.3-8.5.7m0-12v12" />
        </svg>
        <span class="practice-card__body">
            <span class="practice-card__head">练习场</span>
            <span class="practice-card__sub">边学边练，动手试试</span>
        </span>
        <svg class="practice-card__arrow" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
        </svg>
    </a>
</template>

<style scoped>
.practice-card {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    padding: 0.875rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background-color: var(--vp-c-bg-soft);
    text-decoration: none;
    transition: border-color 0.2s;
}

.practice-card:hover {
    border-color: var(--vp-c-brand-1);
}

.practice-card__icon {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    fill: none;
    stroke: var(--vp-c-brand-1);
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.practice-card__body {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.practice-card__head {
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.3;
    color: var(--vp-c-text-1);
    transition: color 0.2s;
}

.practice-card__sub {
    margin-top: 0.125rem;
    font-size: 0.6875rem;
    line-height: 1.4;
    color: var(--vp-c-text-3);
}

.practice-card:hover .practice-card__head {
    color: var(--vp-c-brand-1);
}

.practice-card__arrow {
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
    transition: opacity 0.2s, color 0.2s;
}

.practice-card:hover .practice-card__arrow {
    color: var(--vp-c-brand-1);
    opacity: 1;
}
</style>
