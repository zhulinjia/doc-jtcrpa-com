/**
 * 自定义主题：在默认主题基础上，往右侧「本页目录」下方挂一个下载框。
 *
 * 插槽名 `aside-outline-after` 来自默认主题的 VPDocAside.vue——它就在目录（VPDocAsideOutline）
 * 之后、`.spacer` 之前。插槽清单见 node_modules 里 VPDocAside.vue 的 <slot> 列表。
 */
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

export default {
    extends: DefaultTheme,
    Layout,
}
