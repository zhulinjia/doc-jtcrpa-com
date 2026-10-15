/**
 * 扩展下载入口的**唯一登记处**。
 *
 * 「安装与首次使用」正文和右侧边栏的下载框都从这里取值——**换地址只改这个文件**。
 * 用户 2026-10-15 提供。
 *
 * ⚠️ 换地址时要一起检查的两处（都引用本文件，不用手改，但要知道它们存在）：
 *   - `guide/install.md`（用 <script setup> 引用）
 *   - `.vitepress/theme/AsideInstall.vue`（右侧边栏的下载框）
 */
export const DOWNLOADS = {
    /** Chrome 应用商店 */
    chrome: 'https://chromewebstore.google.com/detail/cjmhncfngchjajecfgmimhfdhkcicfip',
    /** Microsoft Edge 加载项 */
    edge: 'https://microsoftedge.microsoft.com/addons/detail/efloglgamdaegomdchpldjaedegofnji',
    /** 百度网盘（手动安装用） */
    pan: 'https://pan.baidu.com/s/19Qh09EKqvvGrvNM7rYIueg?pwd=79kk',
    /** 网盘提取码（链接上的参数有时不生效，正文里要单独写出来） */
    panCode: '79kk',
}
