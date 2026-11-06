<script setup>
import DefaultTheme from 'vitepress/theme'
import AsideInstall from './AsideInstall.vue'
import AsidePractice from './AsidePractice.vue'
import AsideVideo from './AsideVideo.vue'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <!-- 下载入口优先，视频教程仍放在右栏底部。 -->
        <template #aside-outline-after>
            <AsideInstall />
            <AsidePractice />
            <AsideVideo />
        </template>
    </Layout>
</template>
