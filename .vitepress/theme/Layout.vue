<script setup>
import DefaultTheme from 'vitepress/theme'
import AsideInstall from './AsideInstall.vue'
import AsideVideo from './AsideVideo.vue'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <!-- 右栏「本页目录」下面依次挂两块：下载框、视频入口。
             顺序有意为之：下载是主 CTA，视频是次一级，别调换。 -->
        <template #aside-outline-after>
            <AsideInstall />
            <AsideVideo />
        </template>
    </Layout>
</template>
