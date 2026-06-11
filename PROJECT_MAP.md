# 🗺️ 九头虫 RPA 文档站 — 项目地图

> 最后更新：2026-06-11

## 一、项目概览

| 项目 | 说明 |
|---|---|
| **站点名称** | 九头虫 RPA |
| **标语** | 浏览器原生自动化插件 |
| **URL** | https://doc-jtcrpa.com |
| **框架** | Docusaurus 3.10.1 |
| **语言** | 简体中文 (zh-Hans) |
| **包管理** | pnpm |
| **Node** | ≥ 20.0 |
| **国际化** | 仅中文，默认 locale `zh-Hans` |

## 二、目录总览

```
doc-jtcrpa-com/
├── docusaurus.config.ts      # 站点配置（导航栏、页脚、主题）
├── sidebars.ts               # 侧边栏（自动从 docs/ 生成）
├── package.json              # 依赖与脚本
├── tsconfig.json             # TypeScript 配置
├── CLAUDE.md                 # AI 辅助写作规范
├── PROJECT_MAP.md            # 📍 本文件 — 项目地图
│
├── docs/                     # 📚 所有文档内容（挂载到 / 根路径）
│   ├── intro.mdx             #    首页 → /
│   ├── quick-start.mdx       #    快速上手 → /quick-start
│   ├── components/           #    功能组件 → /components
│   │   ├── triggers/         #      触发器（10个）
│   │   ├── event-interaction/#      事件交互（13个）
│   │   ├── browser-control/  #      浏览器控制（11个）
│   │   ├── flow-control/     #      流程控制（8个）
│   │   ├── general-components/#     通用组件（7个）
│   │   └── network-components/#     网络组件（2个）
│   ├── core-concepts/        #    核心概念 → /core-concepts
│   ├── reference/            #    参考 → /reference
│   └── _snippets/            #    可复用片段（2个）
│
├── src/                      # 🎨 页面与主题
│   ├── pages/                #    首页（React 组件）
│   │   ├── index.tsx
│   │   ├── index.module.css
│   │   └── markdown-page.mdx
│   ├── components/           #    HomepageFeatures 组件
│   │   └── HomepageFeatures/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   └── css/
│       └── custom.css        #    全局自定义样式
│
├── static/                   # 🖼️ 静态资源
│   └── img/                  #    图片（logo、截图、示意图，约40张）
│
├── build/                    # 🏗️ 生产构建输出
├── .docusaurus/              # ⚙️ Docusaurus 内部缓存
└── node_modules/             # 📦 依赖
```

## 三、文档完整结构（docs/ 树）

路由基准路径为 `/`，`docs/` 下的 `.mdx` 文件直接映射为 URL 路径。

### 🌳 第一层：顶级页面

| 文件 | URL 路径 | 说明 |
|---|---|---|
| `docs/intro.mdx` | `/` | 介绍首页 |
| `docs/quick-start.mdx` | `/quick-start` | 快速上手 |
| `docs/components/index.mdx` | `/components` | 功能组件总览 |

### 🧩 第二层：功能组件 (components/) — 6 个子分类

```
components/
├── index.mdx                        # 功能组件总览页
│
├── triggers/                        # 触发器 (position 1)
│   ├── manual-execute.mdx           #   手动执行
│   ├── context-menu.mdx             #   右键菜单
│   ├── keyboard-shortcut.mdx        #   键盘快捷键
│   ├── scheduled-trigger.mdx        #   定时触发
│   ├── element-monitor.mdx          #   元素监控
│   ├── network-intercept.mdx        #   网络拦截
│   ├── url-match.mdx                #   URL 匹配
│   ├── signal-trigger.mdx           #   信号触发
│   ├── websocket-trigger.mdx        #   WebSocket 触发
│   └── sse-trigger.mdx              #   SSE 触发
│
├── event-interaction/               # 事件交互 (position 2)
│   ├── click.mdx                    #   点击事件
│   ├── hover.mdx                    #   悬浮事件
│   ├── key-press.mdx                #   按下按键
│   ├── scroll.mdx                   #   滚动元素
│   ├── text-input.mdx               #   输入文字
│   ├── select-option.mdx            #   选择选项
│   ├── checkbox.mdx                 #   勾选选框
│   ├── form-submit.mdx              #   提交表单
│   ├── file-upload.mdx              #   上传文件
│   ├── file-download.mdx            #   下载文件
│   ├── read-clipboard.mdx           #   读剪切板
│   ├── write-clipboard.mdx          #   写剪切板
│   └── trigger-event.mdx            #   触发事件
│
├── browser-control/                 # 浏览器控制 (position 3)
│   ├── open-page.mdx                #   打开网页
│   ├── open-window.mdx              #   打开窗口
│   ├── close-page.mdx               #   关闭标签页
│   ├── close-window.mdx             #   关闭窗口
│   ├── switch-page.mdx              #   切换标签页
│   ├── switch-window.mdx            #   切换窗口
│   ├── switch-iframe.mdx            #   切换 iframe
│   ├── refresh-page.mdx             #   刷新页面
│   ├── replace-page.mdx             #   替换页面
│   ├── show-notification.mdx        #   显示通知
│   └── handle-dialog.mdx            #   处理弹窗
│
├── flow-control/                    # 流程控制 (position 4)
│   ├── condition-branch.mdx         #   条件分支
│   ├── multi-branch.mdx             #   多路分支
│   ├── loop.mdx                     #   循环
│   ├── call-flow.mdx                #   调用子流程
│   ├── delay.mdx                    #   延迟
│   ├── converge.mdx                 #   汇聚
│   ├── send-signal.mdx              #   发送信号
│   └── return.mdx                   #   返回
│
├── general-components/              # 通用组件 (position 5)
│   ├── set-variable.mdx             #   设置变量
│   ├── data-collection.mdx          #   数据采集
│   ├── wait-signal.mdx              #   等待信号
│   ├── wait-element.mdx             #   等待元素
│   ├── print-output.mdx             #   打印输出
│   ├── execute-code.mdx             #   执行代码
│   └── read-file.mdx                #   读取文件
│
└── network-components/              # 网络组件 (position 6)
    ├── wait-http.mdx                #   等待 HTTP 响应
    └── send-http.mdx                #   发送 HTTP 请求
```

### 📘 核心概念 (core-concepts/)

| 文件 | URL 路径 | 说明 |
|---|---|---|
| `css-selectors.mdx` | `/core-concepts/css-selectors` | CSS 选择器 |
| `variables.mdx` | `/core-concepts/variables` | 变量与表达式 |
| `data-transform.mdx` | `/core-concepts/data-transform` | 数据清理管道 |

### 📙 参考 (reference/)

| 文件 | URL 路径 | 说明 |
|---|---|---|
| `css-selector-tutorial.mdx` | `/reference/css-selector-tutorial` | CSS 选择器教程 |
| `match-patterns.mdx` | `/reference/match-patterns` | URL 匹配模式 |

### ✂️ 可复用片段 (_snippets/)

| 文件 | 说明 |
|---|---|
| `execution-mode.mdx` | 执行模式说明 |
| `receive-params-url.mdx` | 参数传递说明 |

## 四、导航与信息架构

### 顶部导航栏

| 位置 | 标签 | 目标 |
|---|---|---|
| 左 | 文档 | docSidebar → tutorialSidebar |
| 右 | GitHub | https://github.com/jtcrpa |

### 页脚链接

| 分组 | 链接 |
|---|---|
| **文档** | 介绍 (`/`)、快速上手 (`/quick-start`)、功能组件 (`/components`) |
| **核心概念** | CSS 选择器、变量与表达式、数据清理管道 |
| **更多** | CSS 选择器教程、URL 匹配模式 |

### 侧边栏

- 类型：`autogenerated`，从 `docs/` 目录结构自动生成
- `_category_.json` 控制每个分类的标签、排序、折叠等行为

## 五、文档拓扑关系图

```
                          ┌─────────────────┐
                          │   intro (首页)    │
                          └────────┬────────┘
                                   │
                   ┌───────────────┼───────────────┐
                   ▼               ▼               ▼
           ┌──────────┐   ┌──────────────┐   ┌──────────┐
           │quick-start│   │  components   │   │ reference │
           └──────────┘   └──────┬───────┘   └──────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              ▼         ▼        ▼        ▼         ▼         ▼
         triggers  event-   browser-  flow-    general-   network-
                  interact  control  control  components components
              │         │        │        │         │         │
         ┌─────┐   ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐
         │10个 │   │13个 │  │11个 │  │8个  │  │7个  │  │2个  │
         └─────┘   └─────┘  └─────┘  └─────┘  └─────┘  └─────┘
              │         │        │        │         │         │
              └─────────┴────────┴────────┴─────────┴─────────┘
                                   │
                          ┌────────┴────────┐
                          │  core-concepts   │
                          │  (核心概念)       │
                          │  CSS选择器       │
                          │  变量表达式       │
                          │  数据清洗         │
                          └─────────────────┘
```

> 组件文档大量引用 `core-concepts/` 中的 CSS 选择器语法和变量语法。

## 六、静态资源（static/img/）

| 类别 | 文件 | 数量 |
|---|---|---|
| 站点资源 | favicon.ico, logo.svg, docusaurus.png 等 | ~7 |
| 触发器截图 | 手动执行、右键菜单、键盘快捷键、定时执行、元素监控、网络拦截、URL匹配、信号触发、WebSocket、SSE | ~15 |
| 事件交互截图 | 点击事件、悬浮事件、按下按键、滚动元素、输入文字、选择选项、勾选选框、提交表单、上传/下载文件、读/写剪切板、触发事件 | ~15 |
| 浏览器控制截图 | 打开网页、打开窗口、关闭窗口 | ~3 |
| 通用截图 | 流程调用、设置变量、数据清洗等 | ~5 |

## 七、关键配置速查

| 配置项 | 值 | 位置 |
|---|---|---|
| 默认语言 | `zh-Hans` | `docusaurus.config.ts` → `i18n` |
| 死链策略 | `throw`（编译报错） | `docusaurus.config.ts` → `onBrokenLinks` |
| Blog | ❌ 已禁用 | `presets.classic.blog: false` |
| 独立页面 | ❌ 已禁用 | `presets.classic.pages: false` |
| 文档路由 | 挂载到根路径 `/` | `presets.classic.docs.routeBasePath: '/'` |
| 暗色模式 | 跟随系统偏好 | `themeConfig.colorMode.respectPrefersColorScheme: true` |
| 代码高亮 | 明: GitHub / 暗: Dracula | `themeConfig.prism` |
| Docusaurus 版本 | 3.10.1 | `package.json` |
| React 版本 | ^19.0.0 | `package.json` |
| TypeScript 版本 | ~6.0.2 | `package.json` |

## 八、常用命令

| 命令 | 说明 |
|---|---|
| `pnpm start` | 启动本地开发服务器 |
| `pnpm build` | 生产构建（会检查死链） |
| `pnpm serve` | 本地预览生产构建 |
| `pnpm clear` | 清除缓存 |
| `pnpm typecheck` | TypeScript 类型检查 |

## 九、文档统计

| 类别 | 文件数 |
|---|---|
| 顶级页面 | 3 |
| 触发器 (triggers) | 10 |
| 事件交互 (event-interaction) | 13 |
| 浏览器控制 (browser-control) | 11 |
| 流程控制 (flow-control) | 8 |
| 通用组件 (general-components) | 7 |
| 网络组件 (network-components) | 2 |
| 核心概念 (core-concepts) | 3 |
| 参考 (reference) | 2 |
| 可复用片段 (_snippets) | 2 |
| **文档合计** | **61** |
| 静态图片 | ~40 |
| 源代码文件 | 6 |
