import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '九头虫RPA-Agent 帮助文档',
  description: '九头虫RPA-Agent 扩展的操作说明：用自然语言描述需求，让重复的网页操作自动完成。',

  // CLAUDE.md 是写文档用的内部规范，不是给读者的页面——别让它进构建产物和搜索索引。
  srcExclude: ['CLAUDE.md'],

  // 流量统计（自建 umami）。defer 必须留空串：VitePress 会把空值属性渲染成布尔属性，
  // 删掉就退化成同步脚本，拖慢首屏。
  head: [
    [
      'script',
      {
        defer: '',
        src: 'https://tongji.jtcrpa.com/script.js',
        'data-website-id': '3f8fa26e-7da5-484d-a86d-c8b76a1ee4f6'
      }
    ]
  ],

  themeConfig: {
    nav: [
      // 「首页」回官网主站——站内是纯操作文档、没有营销首页（见 CLAUDE.md），
      // 所以它必须是指向站外的绝对地址，别改成 '/'。
      // 也开新标签页：读者看到一半跳走不至于丢掉在文档里的位置。
      //
      // 「视频教程」原本排在这一项后面（指向 jtcrpa.com/help）。用户 2026-10-15 定：
      // 撤掉导航上的视频入口，改挂到**右侧边栏最下方**（.vitepress/theme/AsideVideo.vue，
      // 每页都有）。别再往导航里加回来。
      { text: '首页', link: 'https://jtcrpa.com/', target: '_blank', rel: 'noopener noreferrer' },
      { text: '入门', link: '/guide/what-is-jtcrpa' },
      { text: '采集实战', link: '/tutorial/list-pagination' },
      { text: '练习场', link: '/practice/hub.html', target: '_blank', rel: 'noopener noreferrer' },
      { text: '数据', link: '/data/storage-preview' },
      { text: '自动化', link: '/automation/scheduled-task' },
      { text: '常见问题', link: '/troubleshooting/' }
    ],

    sidebar: [
      {
        text: '入门',
        collapsed: false,
        items: [
          { text: '九头虫RPA-Agent 能做什么', link: '/guide/what-is-jtcrpa' },
          { text: '安装与首次使用', link: '/guide/install' },
          { text: '第一个采集任务', link: '/guide/first-task' },
          // 「修改已有工作流」归在入门，不归采集实战：采集实战那一组是**采集场景**
          // （翻页 / 滚动 / 详情页 / 接口），而修改是编好之后的**日常操作**，
          // 且是新用户做完第一个任务后紧接着就会问的事（用户 2026-10-15 指出放错了）。
          { text: '修改已有工作流', link: '/guide/modify-workflow' }
        ]
      },
      {
        text: '采集需求与编译',
        collapsed: false,
        items: [
          { text: '采集需求怎么写', link: '/guide/write-requirement' },
          { text: '编译期间会发生什么', link: '/guide/during-compile' }
        ]
      },
      {
        text: '基础操作',
        collapsed: false,
        items: [
          { text: '基础操作练习', link: '/guide/basic-practice' },
          { text: '嵌入页面练习', link: '/guide/frame-practice' }
        ]
      },
      {
        text: '采集实战',
        collapsed: false,
        items: [
          { text: '列表与翻页采集', link: '/tutorial/list-pagination' },
          { text: '滚动加载采集', link: '/tutorial/infinite-scroll' },
          // 2026-10-25 新增：等待元素出现/消失（waitElement）是「加载慢」场景的通用手法，
          // 放在滚动加载之后，与「内容是慢慢刷出来的」这一类页面挨着。
          { text: '等页面加载完成', link: '/tutorial/wait-page' },
          { text: '列表 + 详情页采集', link: '/tutorial/list-and-detail' },
          { text: '从接口采集数据', link: '/tutorial/from-api' },
          // 2026-10-25 用户定：这一篇是「拿一份清单去批量采」，属于实战场景。
          // 同为输入的「读取本地文件」「读取飞书多维表格」不是实战内容，留在「数据」组。
          { text: '上传表格，按清单采集', link: '/tutorial/upload-table' },
          // 2026-10-25 新增：表单录入不进「采集场景」的采集链（列表/滚动/详情/接口），
          // 它是**先交互、再采集**的另一类实战，故排在采集场景之后、调用与登录之前。
          { text: '表单录入与提交', link: '/tutorial/form-entry' },
          { text: '通过 HTTP 请求发送数据', link: '/tutorial/http-request' },
          { text: '工作流调用', link: '/tutorial/workflow-invocation' },
          { text: '登录、验证码与人工介入', link: '/tutorial/login-captcha' }
        ]
      },
      {
        text: '数据',
        collapsed: false,
        items: [
          { text: '数据存储与数据预览', link: '/data/storage-preview' },
          { text: '导出数据', link: '/data/export' },
          { text: '上传到飞书多维表格', link: '/data/feishu' },
          // 「读取飞书多维表格」「读取本地文件」2026-10-25 回到本组（用户定）：这两篇讲的是
          // 「怎么读到现成数据」，不是实战场景；从实战组挪来的只有「上传表格，按清单采集」。
          // 「读取已有数据集」跟着「数据存储」走，也留在这组。
          { text: '读取飞书多维表格', link: '/data/feishu-read' },
          { text: '读取已有数据集', link: '/data/read-dataset' },
          { text: '读取本地文件', link: '/data/local-file' }
        ]
      },
      {
        text: '自动化与调度',
        collapsed: false,
        items: [
          { text: '定时任务', link: '/automation/scheduled-task' },
          { text: '批量采集', link: '/automation/batch-collection' },
          { text: '启动、中断与结束', link: '/automation/start-stop' },
          // 「看懂执行日志」2026-10-15 改名为「执行日志」（用户：旧名太口水）——
          // 「执行日志」正是日志页自己的标题（standalone/pages/logs 的 h1），照抄界面不多加字。
          // 地址保持 run-logs：这正对上扩展里这一页的英文名（locales/en.json 里「执行日志」译作 Run logs）。
          { text: '执行日志', link: '/automation/run-logs' }
        ]
      },
      {
        text: '提取工具',
        collapsed: false,
        items: [
          { text: '邮箱 / 电话 / 图片提取', link: '/tools/extract-tools' }
        ]
      },
      {
        // 「账号、套餐与额度」「分享有礼」两篇已按用户要求于 2026-10-15 删除。
        // ⚠️ 删的是**文档**，不是功能：界面上的「分享有礼」入口、设置菜单里的账号卡片都还在，
        // 所以 guide/what-is-jtcrpa.md 里对侧边栏底部那一行的描述**不能跟着删**。
        // 会员/额度的说明仍散见于 定时任务、批量采集、写入飞书、AI 模型配置、报错对照表 等篇。
        text: '配置与账号',
        collapsed: false,
        items: [
          { text: 'AI 模型配置', link: '/settings/ai-model' }
        ]
      },
      {
        // 「变量：把上一步的结果用起来」已按用户要求于 2026-10-15 删除。
        // ⚠️ 它删掉后，下列**界面/日志上真会显示**的原文全站再无一处解释：
        //   「已声明变量 X = 值」/「…N 项数组」/「…N 个字段的对象」（正常运行时就有）
        //   「请求地址为空（URL 里的变量可能没取到值）」
        //   「清洗代码里引用了运行期变量，编译期没有值可渲染…这不是错误，请不要据此改动清洗代码。」
        //   「数组 N 项」/「对象（N 个字段）」的结果摘要
        // 若日后收到"这行字是什么意思"的反馈，从本注释找回来，别再当成新问题排。
        text: '进阶',
        collapsed: false,
        items: [
          { text: '导入导出与分享工作流', link: '/advanced/import-export' },
          { text: '自定义脚本', link: '/advanced/user-script' }
        ]
      },
      {
        text: '常见问题与排错',
        collapsed: false,
        items: [
          { text: '常见问题总览', link: '/troubleshooting/' },
          { text: '采不到数据 / 结果为空', link: '/troubleshooting/empty-result' },
          // 这一篇放在「常见问题与排错」而不是「自动化与调度」（用户 2026-10-15 指出放错组）：
          // 它讲的是**省电策略导致采空**的排查与预防，不是定时/批量那类可配置的**功能**；
          // 「采不到数据」那篇本就把它当作自己的详细版反复引用。
          // 标题 2026-10-15 由「让采集稳定跑完」改为「长时间采集防休眠」（用户定稿）：
          // 旧名看不出讲的是什么；「休眠」是正文和日志里（「运行页被浏览器休眠」）的原词。
          { text: '长时间采集防休眠', link: '/troubleshooting/anti-sleep' },
          { text: '运行中断了怎么办', link: '/troubleshooting/interrupted' },
          { text: '页面不支持操作 / 需要刷新', link: '/troubleshooting/page-not-supported' },
          { text: '报错对照表', link: '/troubleshooting/error-reference' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    externalLinkIcon: true
  }
})
