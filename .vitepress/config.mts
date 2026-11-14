import { defineConfig, type DefaultTheme } from 'vitepress'

const groups: DefaultTheme.SidebarItem[] = [
  { text: '新手入门', items: [
    { text: '安装与首次使用', link: '/guide/install' },
    { text: '第一个采集任务', link: '/guide/first-task' },
    { text: '修改已有工作流', link: '/guide/modify-workflow' },
    { text: '换成自己的网页', link: '/guide/own-page' },
    { text: '按需要查看', collapsed: true, items: [
      { text: '按工作目标选择教程', link: '/guide/cases' },
      { text: '九头虫RPA-Agent 能做什么', link: '/guide/what-is-jtcrpa' },
      { text: '像聊天一样提出采集需求', link: '/guide/write-requirement' },
      { text: 'AI 准备任务时会发生什么', link: '/guide/during-compile' }
    ] }
  ] },
  { text: '常见采集任务', items: [
    { text: '列表与翻页采集', link: '/tutorial/list-pagination' },
    { text: '滚动加载与点击加载更多', link: '/tutorial/infinite-scroll' },
    { text: '列表与详情页采集', link: '/tutorial/list-and-detail' },
    { text: '先搜索和筛选，再采集', link: '/tutorial/form-entry' },
    { text: '上传表格，按清单采集', link: '/tutorial/upload-table' },
    { text: '等内容出现后再采集', link: '/tutorial/wait-page' },
    { text: '采集网页中嵌入的内容', link: '/guide/frame-practice' },
    { text: '邮箱、电话与图片提取', link: '/tools/extract-tools' }
  ] },
  { text: '网页操作与表单', items: [
    { text: '常用网页操作练习', link: '/guide/basic-practice' },
    { text: '填写与提交表单', link: '/tutorial/fill-form' },
    { text: '采集悬停和弹窗中的内容', link: '/tutorial/hover-dialog' },
    { text: '登录、验证码与人工确认', link: '/tutorial/login-captcha' }
  ] },
  { text: '查看与使用数据', items: [
    { text: '数据存储与数据预览', link: '/data/storage-preview' },
    { text: '检查采集结果是否正确', link: '/data/check-results' },
    { text: '按工作要求整理结果', link: '/data/tidy-results' },
    { text: '导出数据', link: '/data/export' },
    { text: '上传到飞书多维表格', link: '/data/feishu' },
    { text: '读取本地文件', link: '/data/local-file' },
    { text: '读取飞书多维表格', link: '/data/feishu-read' },
    { text: '继续使用已有采集结果', link: '/data/read-dataset' },
    { text: '数据保存与去向', link: '/data/privacy-storage' }
  ] },
  { text: '重复运行与自动化', items: [
    { text: '启动、中断与结束', link: '/automation/start-stop' },
    { text: '定时任务', link: '/automation/scheduled-task' },
    { text: '批量采集：一次处理多个网址', link: '/automation/batch-collection' },
    { text: '任务完成或中断时提醒我', link: '/automation/notifications' },
    { text: '备份、迁移与分享工作流', link: '/advanced/import-export' }
  ] },
  { text: '进阶与设置', items: [
    { text: '从接口采集数据', link: '/tutorial/from-api' },
    { text: '通过 HTTP 请求发送数据', link: '/tutorial/http-request' },
    { text: '组合使用多个工作流', link: '/tutorial/workflow-invocation' },
    { text: 'AI 模型配置', link: '/settings/ai-model' },
    { text: '自定义脚本：按提示完成准备', link: '/advanced/user-script' }
  ] },
  { text: '遇到问题', items: [
    { text: '遇到问题先看这里', link: '/troubleshooting/' },
    { text: '采不到数据 / 结果为空', link: '/troubleshooting/empty-result' },
    { text: '运行中断了怎么办', link: '/troubleshooting/interrupted' },
    { text: '页面不支持操作 / 需要刷新', link: '/troubleshooting/page-not-supported' },
    { text: '长时间采集防休眠', link: '/troubleshooting/anti-sleep' },
    { text: '执行日志', link: '/automation/run-logs' },
    { text: '报错对照表', link: '/troubleshooting/error-reference' }
  ] }
]

function sidebarFor(active: number): DefaultTheme.SidebarItem[] {
  return groups.map((group, index) => ({ ...group, collapsed: index > 1 && index !== active }))
}

export default defineConfig({
  lang: 'zh-CN',
  title: '九头虫RPA-Agent 帮助文档',
  description: '从一句话开始，跟着练习完成网页采集、核对结果并用到自己的工作。',
  srcExclude: ['CLAUDE.md'],
  head: [['script', { defer: '', src: 'https://tongji.jtcrpa.com/script.js', 'data-website-id': '3f8fa26e-7da5-484d-a86d-c8b76a1ee4f6' }]],
  themeConfig: {
    // 官网「首页」与右栏视频入口保持原有约定，站内首页仍是操作文档。
    nav: [
      { text: '首页', link: 'https://jtcrpa.com/', target: '_blank', rel: 'noopener noreferrer' },
      { text: '新手入门', link: '/guide/install' },
      { text: '常见任务', link: '/guide/cases' },
      { text: '练习场', link: '/practice/hub.html', target: '_blank', rel: 'noopener noreferrer' },
      { text: '数据与自动化', items: [
        { text: '查看与使用数据', link: '/data/storage-preview' },
        { text: '重复运行与自动化', link: '/automation/start-stop' }
      ] },
      { text: '遇到问题', link: '/troubleshooting/' }
    ],
    // 前两组默认展开，其他分组按当前页面展开。
    sidebar: {
      '/guide/basic-practice': sidebarFor(2), '/guide/frame-practice': sidebarFor(1), '/guide/': sidebarFor(0),
      '/tutorial/fill-form': sidebarFor(2), '/tutorial/hover-dialog': sidebarFor(2), '/tutorial/login-captcha': sidebarFor(2),
      '/tutorial/from-api': sidebarFor(5), '/tutorial/http-request': sidebarFor(5), '/tutorial/workflow-invocation': sidebarFor(5), '/tutorial/': sidebarFor(1),
      '/data/': sidebarFor(3), '/automation/run-logs': sidebarFor(6), '/automation/': sidebarFor(4),
      '/advanced/user-script': sidebarFor(5), '/advanced/': sidebarFor(4), '/settings/': sidebarFor(5), '/tools/': sidebarFor(1),
      '/troubleshooting/': sidebarFor(6), '/': sidebarFor(0)
    },
    search: { provider: 'local', options: {
      miniSearch: {
        options: {
          tokenize(text: string) {
            return Array.from(new Intl.Segmenter('zh-CN', { granularity: 'word' }).segment(text))
              .filter(part => part.isWordLike).map(part => part.segment)
          }
        },
        searchOptions: { combineWith: 'AND' }
      },
      locales: { root: { translations: { button: { buttonText: '搜索文档', buttonAriaLabel: '搜索帮助文档' }, modal: { noResultsText: '没有找到相关内容', resetButtonTitle: '清除搜索', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } } } } }
    } },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部', sidebarMenuLabel: '目录', darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式', darkModeSwitchTitle: '切换到深色模式', externalLinkIcon: true
  }
})
